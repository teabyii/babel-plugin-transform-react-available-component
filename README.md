# babel-plugin-transform-react-available-component

A plugin for babel provides s simple way to control react component/element display by porps

## Example

**In**

```js
<div available="foo"></div>
```

**Out**

```js
available("foo") ? React.createElement("div", null) : null
```

## Installation

```sh
$ npm install babel-plugin-transform-react-available-component
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["transform-react-available-component"]
}
```

### Via CLI

```sh
$ babel --plugins transform-react-available-component script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["transform-react-available-component"]
});
```
