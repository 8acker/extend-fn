# Extend Objects for Node.js 

extend-fn is sel written method to extend objects recursively 

These objects can only have functions as properties

## Installation

This package will available on [npm][npm-url] as: extend-fn

``` sh
npm install extend-fn
```

## Usage

**Syntax:** extend **(** [`deep`], `target`, `object1`, [`objectN`] **)**

*Extend one object with an other, returning the result object.*

**Example:**

``` js
var extend = require('extend-fn');
var result = extend(target, object);
```

Keep in mind that the result if the object, that will be returned from extend().