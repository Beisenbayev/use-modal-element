<p align="center">
  <img src="./src/assets/logotype.svg" width="400px">
</p>
<h2 align="center">Modal window for React applications</h2>

<!-- ![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/hivedb/hive/Dart%20CI/nndb?label=tests&labelColor=333940&logo=github)
![Codecov branch](https://img.shields.io/codecov/c/github/hivedb/hive/nndb?labelColor=333940&logo=codecov&logoColor=white)
![Pub Version](https://img.shields.io/pub/v/hive?label=pub.dev&labelColor=333940&logo=dart)
![gzip size](http://img.badgesize.io/https://unpkg.com/react-modal/dist/react-modal.min.js?compression=gzip) -->

A simple to use hook for creating a modal-window for [react-applications](https://reactjs.org/)

## Quick start

- [Installation](#installation)
- [Documentation](#documentation)
- [Usage](#usage)
- [Example](#example)
- [Demos](#demos)
  <br><br>

## Documentation

The [documentation](#) will be ready soon. Until then, you can use [demo](#demos) codes or see an [example](#usage).

## Installation

To install, you can use [npm](https://npmjs.org/) or [yarn](https://yarnpkg.com):

    $ npm install --save use-modal-element
    $ yarn add use-modal-element

## Features

- ❤️ Beautiful design
- 🚀 Responsive screen: desktop, tablet, mobile
- ⚡ Great performance
- 🔒 Easy configuration
- 🎈 **NO** dependencies

## Usage

After installation, import the `useModal` file.<br>
`useModal` is a hook (function) that returns a modal component and a toggle function

```javascript
import useModal from "use-modal-element";

const [Modal, toggleModal] = useModal();
```

- `Modal` - jsx component
- `toggleModal` - the function that opens and closes the modal window

### Configuration

All these configurations are set by default. But if you want to configure it yourself, here is a list of all available options. Configure it the way you want.

```js
const [Modal, toggleModal] = useModal({
  withBackground: {
    closable: true,
    scrollable: false,
    customClassName: "my-background",
  },
  withCloseButton: {
    type: "default", // 'default', 'rounded', 'text'
    text: "",
    customClassName: "my-close-button",
  },
  withControlButton: {
    type: "default", // 'default', 'outlined', 'text'
    text: "Submit",
    customClassName: "my-control-button",
    action: () => console.log("your handler"),
  },
  additional: {
    customWrapperClassName: "",
    fullyShieldedMobile: true,
  },
});
```

- `withBackground` - [bool / Object] if you need a dark background
  - <i>closable</i> - [bool] if true, outside click will close the modal
  - <i>scrollable</i> - [bool] if true, the background of the modal window will scroll
  - <i>customClassName</i> - [string] your custom class for the background design
- `withCloseButton` - [bool / Object] if you need a close button
  - <i>type</i> - [string] default styled buttons
  - <i>text</i> - [string] text button content (if type is 'text')
  - <i>customClassName</i> - [string] your custom class for the close button design
- `withControlButton` - [bool / Object] if you need a button
  - <i>type</i> - [string] default styled buttons
  - <i>text</i> - [string] button's text value
  - <i>customClassName</i> - [string] your custom class for the button design
  - <i>action</i> - [Function] on click handler
- `additional` - [Object] additional settings
  - <i>customWrapperClassName</i> - [string] your custom class for the modal content design
  - <i>fullyShieldedMobile</i> - [bool] if true, the modal will be fully shielded in the mobile screen

### Finally

Once configured, you can add the `Modal` component anywhere in your code. And add the `toggleModal` to one of the event listeners <br>
Also, the modal window has `title` and `subtitle` attributes with beautiful styles. They are **not required**, just use them if you want

```js
return (
  <div className="home-page">
    <h2>Some title</h2>
    <p>Some text</p>

    <Modal title="Some title" subtitle="subtitle">
      <div>
        <span>here must be you content</span>
      </div>
    </Modal>

    <button value="click" onClick={toggleModal} />
  </div>
);
```

## Example

```js
import useModal from "use-modal-element";

const App = (props) => {
  const [Modal, toggleModal] = useModal({
    withBackground: {
      closable: true,
      scrollable: false,
    },
    withCloseButton: {
      type: "rounded",
    },
    withControlButton: true,
  });

  return (
    <div className="home-page">
      <AnotherComponent />
      <Modal title="Modal window">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer arcu
          orci, mollis in est accumsan, ullamcorper rhoncus orci. In porttitor
          lorem magna, nec dictum.
        </p>
      </Modal>
      <button onClick={toggleModal} />
    </div>
  );
};
```

## Demos
[Example demo](https://codesandbox.io/s/use-modal-element-min-example-ykeyc)