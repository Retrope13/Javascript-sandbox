# Javascript-sandbox

Recently I've been playing a game that was developed in JS with a very nice UI. I've been looking for a language or library that will help me develop a satisfying and attractive UI. This is a place to let me test stuff.

## To package and distribute this application

This will install electron forge which is the easiest way to distribute a new app
`npm install --save-dev @electron-forge/cli`

This will import electron forge duh:
`npx electron-forge import`

This creates a distributable using forge:
`npm run make`

# To make a live development build:

`npx electron main.js`

## To push changes

`view -> force reload`

# At the end of the creation of the distributable you can go to:

### `Desktop\Coding\JSApp Sandbox\Javascript-sandbox\my-electron-app\out\make\squirrel.windows\x64\my-electron-app-1.0.0 Setup.exe`

Once you click on the .exe it'll install and run the offline app. It uses an offline system of React to generate the app assets
