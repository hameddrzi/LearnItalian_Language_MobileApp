from pathlib import Path

path = Path(r"src\screen\exams\A1\A1LessonPagerScreen.js")
text = path.read_text()

text = text.replace("import React, { useMemo, useRef, useState } from 'react';",
                    "import React, { useCallback, useMemo, useRef, useState } from 'react';")

text = text.replace(
"const translateX = useRef(new Animated.Value(0)).current;\n",
"const translateX = useRef(new Animated.Value(0)).current;\n  const isTransitioning = useRef(false);\n\n")

text = text.replace(
"const goToNext = () => setCurrentIndex(p => Math.min(p + 1, total - 1));\nconst goToPrev = () => setCurrentIndex(p => Math.max(p - 1, 0));",
"const goToNext = useCallback(() => setCurrentIndex(p => Math.min(p + 1, total - 1)), [total]);\nconst goToPrev = useCallback(() => setCurrentIndex(p => Math.max(p - 1, 0)), []);")

start = text.index("const dismissThen = (dir /* 'next'|'prev' */) => {")
end = text.index("\n\n  // PanResponder", start)
new_block = """  // Animate the outgoing card and slide the incoming one from the opposite side.\n  const dismissThen = useCallback((dir /* 'next'|'prev' */) => {\n    if (isTransitioning.current) return;\n\n    isTransitioning.current = true;\n    translateX.stopAnimation();\n\n    const toVal = dir === 'next' ? -width - 80 : width + 80;\n\n    Animated.timing(translateX, { toValue: toVal, duration: 200, useNativeDriver: true }).start(({ finished }) => {\n      if (!finished) {\n        isTransitioning.current = false;\n        return;\n      }\n\n      if (dir === 'next') {\n        goToNext();\n      } else {\n        goToPrev();\n      }\n\n      const enteringFrom = dir === 'next' ? width : -width;\n\n      requestAnimationFrame(() => {\n        translateX.setValue(enteringFrom);\n        Animated.spring(translateX, {\n          toValue: 0,\n          useNativeDriver: true,\n          friction: 8,\n          tension: 40,\n        }).start(() => {\n          isTransitioning.current = false;\n        });\n      });\n    });\n  }, [goToNext, goToPrev]);\n"""
text = text[:start] + new_block + text[end:]

start = text.index("const panResponder = React.useMemo(")
end = text.index("\n\n  if (total === 0)", start)
new_pan = """  const panResponder = React.useMemo(\n    () =>\n      PanResponder.create({\n        onMoveShouldSetPanResponder: (_e, g) =>\n          !isTransitioning.current &&\n          Math.abs(g.dx) > 10 &&\n          Math.abs(g.dx) > Math.abs(g.dy),\n        onPanResponderTerminationRequest: () => false,\n        onPanResponderGrant: () => {\n          if (isTransitioning.current) return;\n          translateX.stopAnimation();\n          translateX.setValue(0);\n        },\n        onPanResponderMove: (_e, g) => {\n          if (isTransitioning.current) return;\n          if (g.dx > 0 && !canGoPrev) translateX.setValue(g.dx * 0.25);\n          else if (g.dx < 0 && !canGoNext) translateX.setValue(g.dx * 0.25);\n          else translateX.setValue(g.dx);\n        },\n        onPanResponderRelease: (_e, g) => {\n          if (isTransitioning.current) return;\n          const { dx } = g;\n          if (dx > SWIPE_THRESHOLD && canGoPrev) {\n            dismissThen('prev');\n          } else if (dx < -SWIPE_THRESHOLD && canGoNext) {\n            dismissThen('next');\n          } else {\n            Animated.spring(translateX, { toValue: 0, useNativeDriver: true, bounciness: 6 }).start();\n          }\n        },\n        onPanResponderTerminate: () => {\n          if (isTransitioning.current) return;\n          Animated.spring(translateX, { toValue: 0, useNativeDriver: true }).start();\n        },\n      }),\n    [canGoPrev, canGoNext, dismissThen]\n  );\n"""
text = text[:start] + new_pan + text[end:]

path.write_text(text)
