# extend() objects for Node.js 

extend-fn is self written method to extend objects recursively.

These objects can also have functions as properties.

This implementation of this extend method is due to a personal use in a project i am working on. All other extend node modules could not extend an object with other that has functions as properties. 

## Installation

This package will available on [npm][npm-url] as: extend-fn

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
    x: function () {
        return true;
    }
};

var obj1 = {
    x: function() {
        return false;
    },
    y: {
        i: function() {
            return true;
        }
    }
};

var obj2 = {
    x: function() {
        return "hello world";
    },
    z: 1
};

var obj3 = {
    x: function() {
        return "i am final";
    },
    z: 2,
    y: {
        i: function() {
            return false;
        },
        j: 23
    },
    w: 'i am a word'
};

var expected = {
    x: function() {
        return "i am final";
    },
    y: {
        i: function() {
            return false;
        },
        j: 23
    },
    z: 2,
    w: 'i am a word'
};

var result = extend(to, obj1, obj2, obj3);

// result is deep equal to expected
```

## License

`extend-fn` is licensed under the [MIT License][mit-license-url].

[npm-url]: https://npmjs.org/package/extend-fn
[mit-license-url]: http://opensource.org/licenses/MIT
[github-tbouchnafa]: https://github.com/tbouchnafa