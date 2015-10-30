var objectAssign = require('object-assign');

var isObject = function (v) {
    return Object.prototype.toString.call(v) === '[object Object]';
};

var iterate = function (to, from) {
    for (var key in from) {
        if (!isObject(from[key])) {
            if (from[key]) {
                to[key] = from[key];
            }
        } else {
            if(to[key]) {
                iterate(to[key], from[key]);
            } else {
                to[key] = {};
                iterate(to[key], from[key]);
            }
        }
    }
    return to;
};

var extend = function (to, from) {
    var obj = {};
    objectAssign(obj, to);
    return iterate(obj, from);
};

module.exports = extend;
