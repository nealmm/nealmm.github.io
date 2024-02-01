---
title: "How to Use React Server Components (without Next.js)"
description: "Setup a project using React Server Components without a framework"
publishDate: "25 Jan 2024"
tags: ["react", "server components", "tutorial", "javascript"]
draft: true
---

## Create a Client-Side Rendered React Application

Let's begin by setting up the file structure for our application. Make a `react-counter` directory with two subdirectories: `src`, which will contain the source code, and `dist`, from which we'll serve the application.

```
$ mkdir react-counter
$ cd react-counter
$ mkdir src
$ mkdir dist
```

### Spin Up a Server with Express

Install Express by running the following command; this will also generate a minimal `package.json` file for us.

```
$ npm install express
```

Now, let's implement a basic Express server by creating a `src/server.js` file with the following code.

```js
const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.resolve(__dirname, '../dist')));

server.listen(3003, () => console.log('Running server...'));
```

This will serve any static assets that we put in `dist`. So, let's give the server something to serve by creating a `dist/index.html` file with the following markup.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>React Counter</title>
  <script src="/main.js" defer></script>
</head>
<body>
</body>
</html>
```

Notice that this page references a `main.js` file; ultimately this script will be responsible for rendering our React application, but for now we'll just use a little "hello world" script as a placeholder.

Create a `dist/main.js` file with the following code.

```js
console.log('Hello, world!');
```

For convenience, add a `start` script that will run the server to the `package.json` file.

```json
{
  "scripts": {
    "start": "node src/server.js"
  },
  "dependencies": {
    "express": "…"
  }
}
```

We can test out the server by running `npm start` and opening a browser tab at `localhost:3003`. You should see a blank page and the `Hello, world!` message logged in the JavaScript console. Go ahead and stop the server for now.

### Write a Couple of React Components

Let's turn that blank page into a React application. We'll write two React components: `App`, which will be the rendered at the root of the application, and `Counter`, which will be a child of `App` that renders an interactive button.

First, install React and make a `src/components` directory to contain the components.

```
$ npm install --save-exact react@canary react-dom@canary
$ mkdir src/components
```

Next, we'll write the `App` component. Create a `src/components/App.jsx` file with the following code.

```jsx
import Counter from './Counter.jsx';

export default function App() {
  console.log('Rendering App component');

  return (
    <>
      <h1>A Simple Counter</h1>
      <Counter />
    </>
  );
}
```

Then, write the `Counter` component by creating a `src/components/Counter.jsx` file with the following code.

```jsx
import { useState } from 'react';

export default function Counter() {
  console.log('Rendering Counter component');

  const [count, setCount] = useState(0);

  return (
    <button onClick={ () => setCount(count + 1) }>
      { count }
    </button>
  );
}
```

Now that we have a couple of React components, we need to write some code to actually render them on the client. Create a `src/client.js` file with the following code.

```js
import { createRoot } from 'react-dom/client';
import { createElement } from 'react';

import App from './components/App.jsx';

createRoot(document.body).render(createElement(App));
```

This code will turn the body element of the `index.html` page into a root where React will render the `App` component.

### Bundle with Webpack

The placeholder script in `dist/main.js` will be replaced by the code we just wrote in `src/client.js`; but because this code depends on other code (from the `react` and `react-dom` packages as well as our components), we need to pack all that code together into one big bundle for it to run in the browser. We'll also need to compile the JSX code in our components into plain JavaScript that the browser can understand. We'll use Webpack to build the client bundle and Babel to compile the JSX code.

First, install Webpack and Babel.

```
$ npm install webpack webpack-cli
$ npm install @babel/core @babel/preset-react babel-loader
```

Then, we'll configure Webpack by creating a `webpack.config.js` file with the following code.

```js
const path = require('path');

module.exports = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
```

This configuration tells Webpack to bundle all the code needed to run `src/client.js` and output it to `dist/main.js`, using Babel to handle any `.jsx` files it needs.

Next, we'll add a build script that runs Webpack to our `package.json`. We also need to add a `babel` entry in our `package.json` to configure Babel.

```json
{
  "scripts": {
    "build": "webpack",
    "start": "node src/server.js"
  },
  "babel": {
    "presets": [
      [
        "@babel/preset-react",
        {
          "runtime": "automatic"
        }
      ]
    ]
  },
  "dependencies": {
    "@babel/core": "…",
    "@babel/preset-react": "…",
    "babel-loader": "…",
    "express": "…",
    "react": "…",
    "react-dom": "…",
    "webpack": "…",
    "webpack-cli": "…",
  }
}
```

Now, run `npm run build` and give Webpack a moment to do its thing; once it finishes, open up `dist/main.js` and you should see the bundle it produced—a bunch of cryptic JavaScript. If you run `npm start` again and refresh your browser tab, you should see that React rendered the application. Take a look at your browser's JavaScript console and you'll see the two messages logged by the components when they rendered.

## Modify the Application to Incorporate RSCs

Now that we have a simple React application rendering client-side, let's see how we can leverage RSCs to move (some of) the rendering process to the server. Notice how the `Counter` component is interactive and relies on the `useState` hook; in the new React paradigm, this should be a *client component*. Whereas `Counter` should continue to render on the client, the `App` component itself is not interactive and could be rendered on the server as a *server component*.

To use RSCs, we need to install a special package first.

```
$ npm install --save-exact react-server-dom-webpack@canary
```

Although you won't find any reference to it in the React documentation, this package is actively developed by the React team and holds the "secret sauce" needed to incorporate RSCs in our application. It might seem a little odd that Webpack appears in the package's name, but this is because RSCs require integration with a bundler.

### Modify the Client Code

Before continuing, let's add the `use client` directive to the top of the `src/components/Counter.jsx` file to mark `Counter` as a client component.

```jsx
'use client';

import { useState } from 'react';

export default function Counter() {
  console.log('Rendering Counter component');

  const [count, setCount] = useState(0);

  return (
    <button onClick={ () => setCount(count + 1) }>
      { count }
    </button>
  );
}
```

Then, we'll replace the code in `src/client.js` with the following.

```js
import { createRoot } from 'react-dom/client';
import { createFromFetch } from 'react-server-dom-webpack/client';

createRoot(document.documentElement).render(await createFromFetch(fetch('/react')));
```

Now, instead of importing the `App` component and passing it to `createElement`, we're fetching some data from a `/react` endpoint on the server and passing it to `createFromFetch`. The data fetched from the server will encode all the information that React needs to render our application. We'll see how to implement that endpoint in a moment, but let's tweak our Webpack configuration a bit first.

### Modify the Webpack Configuration

As I mentioned above, RSCs require integration with a bundler. The `react-server-dom-webpack` package includes a Webpack plugin that we'll need to add to our configuration. Go ahead and modify `webpack.config.js` like so.

```js
const path = require('path');
const ReactServerPlugin = require('react-server-dom-webpack/plugin');

module.exports = {
  entry: './src/client.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ReactServerPlugin({ isServer: false })
  ]
};
```

Go ahead and run `npm run build` again with this new configuration and let's see what Webpack outputs. In addition to `main.js`, you should now see another JavaScript file and a couple of JSON files sitting in `dist`. What's going on here?

Well, one of the benefits that RSCs confer is *automatic code splitting*. Now, instead of one big bundle containing your entire React application, your code is split into multiple smaller bundles. This additional JavaScript file actually contains the code for `Counter`; because we declared it to be a client component, it was split off into its own bundle. The JSON files generated by this new Webpack configuration help React keep track of the bundles it produced; for our purposes here, we'll only need the `react-client-manifest.json` file.

### Modify the Server Code

The only thing left to do is implement the `/react` endpoint that our client-side code needs. The `react-server-dom-webpack` package provides the functionality to render server components, but we'll need to install two more packages in order to translate our component code into a form that can be used by our server.

```
$ npm install @babel/register @babel/plugin-transform-modules-commonjs
```

We've already seen how to configure Webpack to compile JSX code via Babel in order to build our client-side code, but we'll also have to use Babel to compile JSX code into plain JavaScript for our server-side code. The `@babel/register` package exports a function that, when called, modifies Node's `require` function to pass imports through Babel. Note that our components are written as ES modules, whereas our server is a CommonJS module. The `@babel/plugin-transform-modules-commonjs` package enables Babel to transform ES modules into CommonJS modules. Using these packages, we can now import our component code into our server.

Then, modify `src/server.js` like so.

```js
const express = require('express');
const path = require('path');
const { renderToPipeableStream } = require('react-server-dom-webpack/server');
const { createElement } = require('react');

const reactRegister = require('react-server-dom-webpack/node-register');
const babelRegister = require('@babel/register');

reactRegister();
babelRegister({
  ignore: [/node_modules/],
  plugins: ['@babel/transform-modules-commonjs']
});

const App = require('./components/App.jsx').default;
const manifest = JSON.parse(readFileSync(path.resolve(__dirname, '../dist/react-client-manifest.json'), 'utf-8'));

const server = express();

server.use(express.static(path.resolve(__dirname, '../dist')));

server.get('/react', (_, response) => {
    const { pipe } = renderToPipeableStream(createElement(App), manifest);
    pipe(response);
});

server.listen(3003, () => console.log('Running server...'));
```

There's a few changes to unpack here. Notice the `babelRegister` function call that allows us to import JSX and ES modules as described above; in addition, we're also importing a `reactRegister` function from the `react-server-dom-webpack` package that works similarly. When called, `reactRegister` modifies `require` to properly import server/client components. Then, we can import our `App` component.

The most important change though is the call to `renderToPipeableStream` inside the route handler for the `/react` endpoint. This function takes our `App` component and the contents of `react-client-manifest.json` as parameters and returns an object with a function named `pipe`. When passed a Node stream (like `response`), `pipe` will write the rendering data to it.

There's just one small change left to make: modify `package.json` to set the `react-server` condition when starting the server. This condition is required to properly configure React to use RSCs.

```json
{
  "scripts": {
    "build": "webpack",
    "start": "node --conditions react-server src/server.js"
  },
  "babel": {
    "presets": [
      [
        "@babel/preset-react",
        {
          "runtime": "automatic"
        }
      ]
    ]
  },
  "dependencies": {
    "@babel/core": "…",
    "@babel/plugin-transform-modules-commonjs": "…",
    "@babel/preset-react": "…",
    "@babel/register": "…",
    "babel-loader": "…",
    "express": "…",
    "react": "…",
    "react-dom": "…",
    "react-server-dom-webpack": "…",
    "webpack": "…",
    "webpack-cli": "…",
  }
}
```

Alright! Now, if you run `npm start` again and refresh the page, you should see the application works as before. But notice how only the `Rendering Counter component` message is logged in your browser's JavaScript console. If you look at your terminal, you'll see the `Rendering App component` 
