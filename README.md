<article ><a name="user-content-readme-top"></a></p>

<div align="center">
  <h1 align="center"></a>iconsax for React</h1>
  <p align="center">
    A total of 6000 icons in 6 different designs | <strong>Only supported for react vite</strong>
    <br>
    <br>
    <a href="https://react-iconsax.onrender.com"><strong> Browse icons</strong></a>
  </p>
</div>

# About the Project

the features of this package include the following:

- 1000 icons in 6 different types
- Perfectly balance
- 24px grid-based
- Lightweight, powerful and easy to use <g-emoji class="g-emoji" alias="smile" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png"><img class="emoji" alt="smile" src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png" width="20" height="20"></g-emoji>

<a href="https://react.dev/" rel="nofollow">
<svg width="100%" height="100%" viewBox="-10.5 -9.45 21 18.9" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-4 mb-3 text-link dark:text-link-dark w-24 lg:w-28 self-center text-sm me-0 flex origin-center transition-all ease-in-out"><circle cx="0" cy="0" r="2" fill="currentColor"></circle><g stroke="currentColor" stroke-width="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
</a>

# Installation

- Install Yarn package

```bash
yarn add react-iconsax
```

- Install NPM package

```bash
npm install react-iconsax
```

## Usage

Local registration:

```jsx
import { VsxIcon, Wallet } from "react-iconsax";

function App() {
  return (
    <div>
      // Dynamic imports - Use PascalCase for iconName prop
      <VsxIcon iconName="VolumeUp" />
      
      // Static imports
      <Wallet color="blue" size="50" type="linear" />
    </div>
  );
}

export default App;
```

## Props

| Prop       | Type                                                | Default        | Note                                                               |
| ---------- | --------------------------------------------------- | -------------- | ------------------------------------------------------------------ |
| `color`    | `string`                                            | `currentColor` | css color                                                          |
| `size`     | `number` `string`                                   | 24px           | size="24" or :size="24"                                            |
| `type`     | `Linear` `Outline` `TwoTone` `Bulk` `Broken` `Bold` | `Linear`       | icons styles                                                       |
| `iconName` | string                                              |                | iconName is only required with vsx-icon tag (Dynamic icon imports) |

## Contact

Emad Moghimi [jaxtheprime@gmail.com](jaxtheprime@gmail.com)

Project Link: [https://github.com/JaxThePrime/react-iconsax](https://github.com/JaxThePrime/react-iconsax)

</article >
