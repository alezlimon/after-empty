# 📱 DancerRenderer: React Native Physics Engine

An interactive mobile experiment built with React Native. This project uses the device's accelerometer to manipulate the gravity and bouncing entities in real-time.

## ✨ Key Features

* **Accelerometer Control:** Tilt your phone to change the direction and force of gravity in the game.
* **Realistic Physics:** Collision simulation, friction, restitution (bounce), and density powered by `matter-js`.
* **Custom Rendering:** Complete separation between the physics logic and the visual layer using `react-native-game-engine`, with independent renderers for the static environment and dynamic entities (emojis).
* **Systems Architecture:** Logic divided into pure systems (gravity and physics) injected into the game engine's main loop.

## 🛠️ Technologies Used

* **React Native / Expo:** 
* **Matter.js:** 
* **React Native Game Engine:** 

## 🚀 How to run it on your device

To test this project, you need a physical mobile device (PC simulators lack an accelerometer).

1. Download the **Expo Go** app on your iOS or Android device.
2. Clone this repository to your computer:
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

3. Navigate to the project folder and install dependencies:
   npm install

4. Start the local development server:
   npx expo start -c

5. Scan the QR code that appears in the terminal using your phone's camera (iOS) or directly from the Expo Go app (Android).