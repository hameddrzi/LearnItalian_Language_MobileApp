# Chatly App Intro Screens

This folder contains the introduction screens for the Chatly app that are displayed to users before entering the main application.

## File Structure

```
Login/
├── IntroScreenEnglish.js  # English optimized base component
├── IntroScreenBase.js     # Original base component (for reference)
├── IntroScreen1.js        # Welcome screen
├── IntroScreen2.js        # AI Features screen
├── IntroScreen3.js        # Learning Features screen
├── IntroScreen4.js        # Multi-language Support screen
├── IntroScreen5.js        # Get Started screen
├── index.js              # Export file for managing imports
└── README.md             # This file
```

## Features

### IntroScreenEnglish Component
- **Reusable**: For creating all intro screens
- **Responsive Design**: Compatible with different screen sizes
- **LTR Layout**: Optimized for English text direction
- **Smooth Animations**: Elegant transitions between screens
- **Custom Fonts**: Uses fonts from assets/font directory
- **Icon-based Illustrations**: Beautiful vector-based graphics

### IntroScreenEnglish Props:
- `illustration`: SVG component or image
- `title`: Main page title
- `subtitle`: Page description
- `currentStep`: Current page number (1-5)
- `totalSteps`: Total number of pages (default: 5)
- `onNext`: Function to go to next page
- `onSkip`: Function to skip intro
- `backgroundColor`: Background color (default: #4C6EF5)
- `showSkip`: Show skip button (default: true)

## Usage

### Create a new intro screen:

```javascript
import React from 'react';
import { Dimensions } from 'react-native';
import IntroScreenEnglish from './IntroScreenEnglish';
import YourIllustration from './YourIllustration';

const IntroScreen6 = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('IntroScreen7');
  };

  const handleSkip = () => {
    navigation.navigate('MainApp');
  };

  return (
    <IntroScreenEnglish
      illustration={<YourIllustration />}
      title="Your Screen Title"
      subtitle="Your screen description here"
      currentStep={6}
      totalSteps={7}
      onNext={handleNext}
      onSkip={handleSkip}
      backgroundColor="#4C6EF5"
    />
  );
};

export default IntroScreen6;
```

### Use in App.js:

```javascript
import { IntroScreen1 } from './src/screen/Login';

// In main component
<IntroScreen1 navigation={navigation} />
```

### All Available Screens:

```javascript
import { 
  IntroScreen1,  // Welcome to Chatly!
  IntroScreen2,  // Smart AI Features  
  IntroScreen3,  // Learn Anything
  IntroScreen4,  // Multiple Languages
  IntroScreen5   // Let's Get Started!
} from './src/screen/Login';
```

## Required Files

### Dependencies:
- `react-native-svg`: For displaying SVG images
- `expo-font`: For loading custom fonts
- `@expo/vector-icons`: For icon illustrations

### Assets:
- Poppins fonts in `assets/font/Poppins/`
- Concert One font in `assets/font/Concert_One/`
- Bungee font in `assets/font/Bungee/`
- SVG images in `assets/pic/LoginAssets/`

## Install Dependencies:

```bash
npm install react-native-svg expo-font @expo/vector-icons
```

## Design Notes

### Screen Colors:
- **Screen 1**: #4C6EF5 (Blue)
- **Screen 2**: #6C5CE7 (Purple)
- **Screen 3**: #00B894 (Green)
- **Screen 4**: #FD79A8 (Pink)
- **Screen 5**: #FF7675 (Red)

### Text Colors:
- **Main Text**: #FFFFFF (White)
- **Subtitle**: #E8EAFF (Light Blue)
- **Inactive Dots**: rgba(255, 255, 255, 0.3)

### Typography:
- **Title**: Poppins-Bold, 32px
- **Subtitle**: Poppins-Regular, 16px
- **Buttons**: Poppins-SemiBold, 16px
- **Skip Button**: Poppins-Medium, 16px

### Dimensions:
- **Illustration**: 60% of screen width
- **Margins**: 30px from sides
- **Button Height**: 16px vertical padding
- **Button Width**: Minimum 140px

## Screen Content

### IntroScreen1: Welcome to Chatly!
- **Focus**: App introduction and welcome
- **Illustration**: Original SVG with chat elements
- **Color**: Blue (#4C6EF5)

### IntroScreen2: Smart AI Features
- **Focus**: AI capabilities and intelligence
- **Illustration**: Brain icon with floating elements
- **Color**: Purple (#6C5CE7)

### IntroScreen3: Learn Anything
- **Focus**: Educational features and learning
- **Illustration**: Graduation cap with learning icons
- **Color**: Green (#00B894)

### IntroScreen4: Multiple Languages
- **Focus**: Language support and communication
- **Illustration**: Translate icon with language elements
- **Color**: Pink (#FD79A8)

### IntroScreen5: Let's Get Started!
- **Focus**: Final call-to-action
- **Illustration**: Rocket with success elements
- **Color**: Red (#FF7675)
- **Special**: No skip button (showSkip: false)

## Adding New Screens

1. Create new screen file following the pattern
2. Add export to `index.js`
3. Update totalSteps if needed
4. Use appropriate color scheme
