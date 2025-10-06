# 🇮🇹 LearnItalian — React Native (Expo)

A mobile app for learning Italian with a clean UI, multi-level navigation, and lesson/practice content. Built with Expo and React Native, featuring React Navigation, custom fonts, and gradient animations.

> Versions: Expo 54 • React Native 0.81 • React 19

---

## ✨ Features
- **Course and Level Screens**: A1, A2, B1, B2, and University
- **Lesson & Practice Slides** powered by `react-native-pager-view`
- **Bottom Tabs + Stack Navigation** using `@react-navigation/*`
- **Custom Fonts** via `expo-font` (Poppins, Bungee, Concert One)
- **Polished UI** with gradients and custom icons

---

## 🖼️ Screenshots
Add images to `assets/pic/` and link them here:

```markdown
![Home](assets/pic/HomeAssets/learn.png)
![Intro](assets/pic/LoginAssets/intro.png)
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js (>= 18)
- Expo CLI installed

```bash
npm install -g expo-cli
```

### Install dependencies
```bash
npm install
```

### Run the project
- Start dev server:
```bash
npm run start
```
- Run on Android:
```bash
npm run android
```
- Run on iOS (macOS):
```bash
npm run ios
```
- Run on Web:
```bash
npm run web
```

If you face cache/font issues:
```bash
expo start -c
```

---

## 🧭 Project Structure
```text
LearnItalian_Language_MobileApp/
├─ App.js
├─ app.json
├─ assets/
│  ├─ font/ (Poppins, Bungee, Concert One)
│  └─ pic/  (icons and screen images)
├─ src/
│  ├─ components/
│  │  └─ ui/BackgroundGradientAnimation.js
│  └─ screen/
│     ├─ Home/
│     ├─ Login/
│     ├─ courses/
│     ├─ exams/
│     │  ├─ A1/ (lesson & practice slides)
│     │  └─ University/Exam1…Exam4
│     └─ MainNavigator.js
├─ index.js
├─ package.json
└─ README.md
```

---

## 📦 NPM Scripts
| Command | Description |
|---|---|
| `npm run start` | Start Metro and open Expo DevTools |
| `npm run android` | Launch on Android device/emulator |
| `npm run ios` | Launch on iOS simulator |
| `npm run web` | Run the web build |

---

## 🛠️ Tech Stack & Libraries
- `expo`, `expo-font`, `expo-linear-gradient`, `expo-status-bar`
- `react`, `react-native`
- `@react-navigation/native`, `@react-navigation/stack`, `@react-navigation/bottom-tabs`
- `react-native-pager-view`, `react-native-screens`, `react-native-safe-area-context`
- `@expo/vector-icons`, `react-native-svg`, `react-native-markdown-display`

---

## 🔤 Fonts & Assets
- Fonts live in `assets/font/` and are loaded in `App.js` using `expo-font`.
- Icons and images are under `assets/pic/`; app icons are `assets/icon.png` and `assets/adaptive-icon.png`.
- Splash and icons are configured in `app.json`.

---

## 🧱 Navigation
- Main navigation is defined in `src/screen/MainNavigator.js`.
- A custom tab bar exists in `src/screen/TabBar.js` with a demo in `TabBarDemo.js`.
- Course and exam screens are organized under `src/screen/courses` and `src/screen/exams`.

---

## 🔎 About the App
LearnItalian focuses on short, swipeable lessons and quick practice sessions. Each level (A1, A2, B1, B2, University) groups relevant screens, media, and text content. The app is optimized for low-friction onboarding and day‑to‑day learning, with typography and spacing tuned for readability.

---

## 🧩 Architecture Overview
- **Entry points**: `index.js` registers `App.js` as the root component.
- **Navigation layer**: `MainNavigator.js` wires stack + tab navigators and routes to top‑level screens.
- **UI components**: shared pieces live under `src/components` (e.g., `ui/BackgroundGradientAnimation.js`).
- **Feature screens**: grouped by domain under `src/screen/*` (Home, Login, courses, exams, University).
- **Static content**: lesson/practice slide data under `src/screen/exams/A1/content/*`.

Minimal example for loading fonts in `App.js`:
```js
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      Poppins: require('./assets/font/Poppins/Poppins-Regular.ttf'),
      'Poppins-Bold': require('./assets/font/Poppins/Poppins-Bold.ttf'),
    }).then(() => setFontsLoaded(true));
  }, []);
  if (!fontsLoaded) return null;
  return /* <MainNavigator /> */ null;
}
```

---

## 📚 Content Model
- **Lessons**: defined in files like `src/screen/exams/A1/content/A1LessonSlides.js`.
- **Practices**: defined in `src/screen/exams/A1/content/A1PracticeSlide.js`.
- **Paged presentation**: `react-native-pager-view` renders slides and handles swipe gestures.

A slide item typically includes title, body text, and an image reference from `assets/pic/`.

---

## ➕ Add a New Level or Exam
1. Duplicate a level folder (e.g., `src/screen/exams/A1/`) and rename to your new level.
2. Update content files inside `content/` with your new slides.
3. Create the corresponding screens (e.g., `A2Screen.js`, `A2LessonPagerScreen.js`, `A2PracticePagerScreen.js`).
4. Register the new screens in `src/screen/MainNavigator.js`.
5. Add any new images to `assets/pic/` and reference them from your slides.

Tip: keep slide objects small and render‑only—derive computed values in the component layer.

---

## 🎨 Styling & Theming
- Primary typography uses Poppins; headings may use Bungee/Concert One.
- Backgrounds can use `expo-linear-gradient` or the `BackgroundGradientAnimation` helper.
- Keep spacing consistent (8/16/24 dp scale). Prefer flex layouts over absolute positioning for responsiveness.

---

## ♿ Accessibility
- Use accessible text sizes (min 14–16sp) and sufficient color contrast.
- Provide `accessibilityLabel` for icon-only buttons.
- Ensure swipe navigation has alternative tap targets when possible.

---

## ⚡ Performance Guidelines
- Lazy‑load heavy screens using React Navigation `lazy`/`detachInactiveScreens`.
- Prefer vector icons (`@expo/vector-icons`) and optimized PNGs/WebP for images.
- Memoize slide items where possible and avoid inline functions in render loops.

---

## 📦 Production Builds (EAS)
For modern Expo projects, use EAS Build:
```bash
npm install -g eas-cli

# Configure once
npx expo login
npx eas login
npx eas init

# Android build (APK/AAB)
eas build -p android --profile preview

# iOS build (requires Apple account)
eas build -p ios --profile preview
```
You can customize app icons, splash, and package identifiers via `app.json` and EAS `eas.json` profiles.

---

## 🤝 Contributing
PRs and issues are welcome. For UI/UX changes, please include a short description and screenshots.

---

## 📄 License
Released under the MIT License. If the repository lacks a LICENSE file, feel free to add one.

---

## 🧭 Roadmap
- Add local persistence (AsyncStorage) for user progress
- Lottie animations for cards and activities
- Unit tests and accessibility improvements

---

## 🧰 Troubleshooting
- **Fonts not loading / wrong font on Android**: clear Expo cache with `expo start -c`.
- **Device not detected**: ensure USB debugging/emulator is running; try `adb devices`.
- **Stuck bundling**: stop all Metro instances and restart your terminal.

Happy learning! 🇮🇹
