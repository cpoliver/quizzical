# Quizzical

![responsive preview](https://raw.githubusercontent.com/cpoliver/quizzical/master/public/preview.png)

## Overview

This repo is my submission for the code challenge. The main implementation (views, routing, data fetching) was completed within a couple of hours, but I kept iterating on the designs and tooling to give you a more realistic idea of how I like to develop.

## Deployed App

The app is deployed to github pages, and available to demo here: https://cpoliver.github.io/quizzical

## Tested On

- Arch Linux: Chromium
- Android: Chrome

## Considerations

### Things I Like

These are some of the things I like about the app/code as it currently is:

- The app is accessibile with only keyboard input
- Use of hooks and functional components
- Storybook for rapid development, and MDX for "living" documentation
- Custom question count component with animation
- Rebass for theme-driven, primitive component bootstrapping
- Themed using company colors
- Ramda to harness the benefits of functional programming (point-free where appropriate)
- Use of TDD to write the store logic
- useReducer instead of Redux (new territory for me, useState would have probably being sufficient in several places)

### Things to Improve

Here are some things I intended to implement when first planning the app, but decided to leave out for an MVP:

- Cross device/browser testing and fixes
- Add ability to skip questions and page through them
- Improve accessibility
- Internationalisation
- Mulitple themes
- Add a settings view/page for theme, language, etc
- Module aliases instead of relative paths everywhere
- Stricter eslinting rules (import order, no mutation etc.)
- Husky for pre-commit/pre-push code quality checks (eslint, prettier, tsc, jest)

## Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn storybook`

Runs storybook.
Open [http://localhost:9009](http://localhost:9009) to view it in the browser.

The page will reload if you make edits.

### `yarn test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
