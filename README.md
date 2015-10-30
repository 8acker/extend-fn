# extend() objects for Node.js 

extend-fn is self written method to extend objects recursively.

These objects can also have functions as properties.

This implementation of this extend method is due to a personal use in a project i am working on. All other extend node modules could not extend an object with other tha includes functions as properties. 

## Installation

This package will available on [npm][npm-url] as: extend-fn

``` sh
npm install extend-fn
```

## Usage

**Syntax:** extend **(** `target`, `object1`, [`objectN`] **)**

*Extend one object with one or more other objects, returning the result object.*

**Example:**

``` js
var extend = require('extend-fn');
var result = extend(target, object);
```

Keep in mind that the result is the object, that will be returned from extend().


[travis-svg]: https://travis-ci.org/justmoon/node-extend.svg
[travis-url]: https://travis-ci.org/justmoon/node-extend
[npm-url]: https://npmjs.org/package/extend-fn
[mit-license-url]: http://opensource.org/licenses/MIT
[github-justmoon]: https://github.com/justmoon
[github-insin]: https://github.com/insin
[github-ljharb]: https://github.com/ljharb
[npm-version-png]: http://versionbadg.es/justmoon/node-extend.svg
[deps-svg]: https://david-dm.org/justmoon/node-extend.svg
[deps-url]: https://david-dm.org/justmoon/node-extend
[dev-deps-svg]: https://david-dm.org/justmoon/node-extend/dev-status.svg
[dev-deps-url]: https://david-dm.org/justmoon/node-extend#info=devDependencies