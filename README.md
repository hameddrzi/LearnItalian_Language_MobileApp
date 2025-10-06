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
