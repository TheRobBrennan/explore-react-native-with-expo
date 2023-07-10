# Welcome

This project will explore developing native iOS, Android, and web applications using React Native and Expo.

## Getting started

We will use the tutorial at [https://docs.expo.dev/tutorial/](https://docs.expo.dev/tutorial/) as our starting point.

TL;DR Ready to dive in and code?

```sh
# PREREQUISITES
# - Install Expo Go on a physical device - https://expo.dev/client
# - Prepare for development by installing the required tools - https://docs.expo.dev/get-started/installation/#requirements
# - OPTIONAL:
# -   - If you are unfamiliar with React, please take a moment and check out the official React tutorial - https://react.dev/learn

# Create a new Expo project named StickerSmash
% npx create-expo-app <my_expo_project_name>

# Navigate to the project directory
% cd <my_expo_project_name>

# Install dependencies so we can run this project on the web
% npx expo install react-dom react-native-web @expo/webpack-config

# PRO TIP: Install dependencies to add navigation with Expo - https://kadikraman.github.io/react-native-v2/navigation-expo
% npx expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-navigation/stack

# PRO TIP: Install dependencies to install React Native community NetInfo module - https://github.com/react-native-netinfo/react-native-netinfo#readme
% npx expo install @react-native-community/netinfo

# PRO TIP: Install dependencies to install React Native async storage
% npx expo install @react-native-async-storage/async-storage

# Run your Expo project on mobile and web
% npx expo start
```

## Tutorial

### Create your first app

[https://docs.expo.dev/tutorial/create-your-first-app/](https://docs.expo.dev/tutorial/create-your-first-app/)

```sh
# PREREQUISITES
# - Install Expo Go on a physical device - https://expo.dev/client
# - Prepare for development by installing the required tools - https://docs.expo.dev/get-started/installation/#requirements
# - OPTIONAL:
# -   - If you are unfamiliar with React, please take a moment and check out the official React tutorial - https://react.dev/learn

# Create a new Expo project named StickerSmash
% npx create-expo-app StickerSmash

# Navigate to the project directory
% cd StickerSmash

# Download and replace the existing assets directory in the project directory
# https://docs.expo.dev/static/images/tutorial/sticker-smash-assets.zip

# Install dependencies so we can run this project on the web
% npx expo install react-dom react-native-web @expo/webpack-config

# Run your Expo project on mobile and web
% npx expo start
```

### Build a screen

[https://docs.expo.dev/tutorial/build-a-screen/](https://docs.expo.dev/tutorial/build-a-screen/)

### Use an image picker

[https://docs.expo.dev/tutorial/image-picker/](https://docs.expo.dev/tutorial/image-picker/)

### Create a modal

[https://docs.expo.dev/tutorial/create-a-modal/](https://docs.expo.dev/tutorial/create-a-modal/)

### Add gestures

[https://docs.expo.dev/tutorial/gestures/](https://docs.expo.dev/tutorial/gestures/)

> In this chapter, we are going to add two different gestures using the React Native Gesture Handler library:
>
> - Double tap to scale the size of the emoji sticker.
>
> - Pan to move the emoji sticker around the screen so that the user can place the sticker anywhere on the image.

### Take a screenshot

[https://docs.expo.dev/tutorial/screenshot/](https://docs.expo.dev/tutorial/screenshot/)

### Handling platform differences

[https://docs.expo.dev/tutorial/platform-differences/](https://docs.expo.dev/tutorial/platform-differences/)

> Android, iOS, and the web have different capabilities. In our case, Android and iOS both are able to capture a screenshot with the react-native-view-shot library, however web browsers cannot.

### Configure status bar, splash screen and app icon

[https://docs.expo.dev/tutorial/configuration/](https://docs.expo.dev/tutorial/configuration/)
