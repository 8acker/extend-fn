# Grunt Mocha Test Coverage
[![Build Status][travis-image]][travis] [![Coverage Status](https://coveralls.io/repos/tbouchnafa/extend-fn/badge.svg?branch=master&service=github)](https://coveralls.io/github/tbouchnafa/extend-fn?branch=master) [![Dependency Status][david-image]][david] [![devDependency Status][david-dev-image]][david-dev]

extend-fn is self written method to extend objects recursively.

These objects can also have functions as properties.

This implementation of this extend method is due to a personal use in a project i am working on. All other extend node modules could not extend an object with other that has functions as properties. 

# extend() objects for Node.js 

## Installation

This package is availabe on [npm][npm-url] as: extend-fn

``` sh
npm install extend-fn
```

## Usage

**Syntax:** extend **(** `to_extend`, `object1`, [`objectN`] **)**

*Extend one object with one or more other objects, returning the result object.*

**Example:**

``` js
var extend = require('extend-fn');
var result = extend(to_be_extended, obj1, obj2, objX);
```

Keep in mind that the result is the object, that will be returned from extend().

### Arguments

* `to_extend`	*Object*
The object to extend.
* `object1`	*Object*
The object that will be merged into the first.
* `objectN` *Object* (Optional)
More objects to merge into the first.

## Example

```js
var extend = require('extend-fn');

var to = {
    property_x: function () {
        return true;
    }
};

var obj1 = {
    property_x: function() {
        return false;
    },
    property_y: {
        i: function() {
            return true;
        }
    }
};

var obj2 = {
    property_x: function() {
        return "hello world";
    },
    property_z: 1
};

var obj3 = {
    property_x: function() {
        return "i am final";
    },
    property_z: 2,
    property_y: {
        i: function() {
            return false;
        },
        j: 23
    },
    property_w: 'i am a word'
};

var expected = {
    property_x: function() {
        return "i am final";
    },
    property_y: {
        i: function() {
            return false;
        },
        j: 23
    },
    property_z: 2,
    property_w: 'i am a word'
};

var result = extend(to, obj1, obj2, obj3);

// result is deep equal to expected
```

## License

`extend-fn` is licensed under the [MIT License][mit-license-url].

[npm-url]: https://npmjs.org/package/extend-fn
[mit-license-url]: http://opensource.org/licenses/MIT
[github-tbouchnafa]: https://github.com/tbouchnafa
[Mocha]: http://mochajs.org/
[Grunt]: http://gruntjs.com/
[Blanket]: http://blanketjs.org/
[Coveralls]: https://coveralls.io
[Getting Started]: http://gruntjs.com/getting-started
[grunt-mocha-cli]: https://github.com/Rowno/grunt-mocha-cli
[travis]: https://travis-ci.org/tbouchnafa/extend-fn
[travis-image]: https://img.shields.io/travis/tbouchnafa/extend-fn/master.svg?style=flat
[coveralls]: https://coveralls.io/r/mmoulton/grunt-mocha-cov
[coveralls-image]: https://img.shields.io/coveralls/mmoulton/grunt-mocha-cov/master.svg?style=flat
[david]: https://david-dm.org/tbouchnafa/extend-fn
[david-image]: https://img.shields.io/david/tbouchnafa/extend-fn.svg?style=flat
[david-dev]: https://david-dm.org/tbouchnafa/extend-fn#info=devDependencies
[david-dev-image]: https://img.shields.io/david/dev/tbouchnafa/extend-fn.svg?style=flat