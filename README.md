Under Construction Now

## Table of contents

- [Overview](#overview)
  - [What I learned](#what-i-learned)
  - [The problems I encountered](#the-problems-i-encountered)
  - [Links](#links)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview
The exercise is from the course - Learn React for free created by Bob Ziroll from [Scriba](https://scrimba.com/).

In the website, an user can play a quiz game with 5 random questions provided by [Open Trivia](https://opentdb.com/)

### What I learned
In this exercise, I learned:
- Use `useState` to create variables, mutate them and let variables reactively change on web page.
- Use `useEffect` to call external APIs to avoid side effects in React.js

### The problems I encountered
#### `StrictMode`
- When using `useEffect` to fetch API's data, it will call API twice. It's because I turned on the "StrictMode". It will render components twice. Fortunately, it only runs in development mode.
- Discussion on stackoverflow: [React Hooks: useEffect() is called twice even if an empty array is used as an argument](https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar)

### Links
- Solution URL: [tenzies-game](https://github.com/12cassie34/quizzical)
- Live Site URL: [Live Demo](#) - Under Construction
- The Layout Design URL: [Quizzical App](https://www.figma.com/file/E9S5iPcm10f0RIHK8mCqKL/Quizzical-App?node-id=0%3A1)

### Screenshot
To be added.


## My process

### Built with

- Use [vite](https://vitejs.dev/) to create the project. 
- Semantic HTML5 markup
- [React](https://reactjs.org/) - JS library
- [tailwindcss](https://tailwindcss.com/) - the utility-first CSS framework

## Author

- Medium - [Cassie，來學]](https://medium.com/@cassiecoding)
- Cake Resume - [@SHANYU LIN](https://www.cakeresume.com/me/shanyu-lin)
