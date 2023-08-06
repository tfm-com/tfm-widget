# TFM Widget Examples
Welcome to the README for our React Widget Component! This Widget Component, built in React, offers a robust and easy way to incorporate our functionality into your project.

## Requirements

Before you get started, ensure you meet the following prerequisites:

- Node.js installed on your machine. The minimum version required is 18. You can check your current Node.js version by running 
```bash
node -v 
```
in your terminal.
- The following line must be present in your .npmrc file. If you don't have a .npmrc file in your project root, please create one and add the following line:

```bash
@buf:registry=https://buf.build/gen/npm/v1
```

## Installation

You can install the widget via npm:

```bash
npm install @0xtfm/widget-ibc
```

Or if you prefer using yarn:

```bash
yarn add @0xtfm/widget-ibc
```

## Usage

Once you've installed the widget, you can import it in your React application.

Here is a simple example of a React component utilizing our widget:

```ts
import { IBCWidget } from "@0xtfm/widget-ibc";
import "@0xtfm/widget-ibc/dist/index.css";

const Widget = () => {
  return <IBCWidget />;
};

export default Widget;
```
To use the Widget component in your application, simply import it into the desired file and place it within your component's JSX like so:

```ts
import Widget from './widget'

function MyApp() {
  return (
    <div>
      <Widget />
      // Other components...
    </div>
  );
}

export default MyApp;
```
That's it! You've now successfully integrated our widget into your React app. We hope you find it useful and enjoy using it. If you have any issues or questions, feel free to open an issue in this repository.
