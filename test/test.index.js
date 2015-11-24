var assert = require("assert");
var extend = require("../index");
var jsonfn = require('json-fn');

describe("Index", function () {

    it("#extend() check null defaults", function () {

        var defaults = null;

        var options = {
            a: "bla"
        };

        var expected_result = {
            a: "bla"
        };

        var result = extend(defaults, options);
        var result_string = jsonfn.stringify(result).replace(/\s/g, "");
        var expected_result_string = jsonfn.stringify(expected_result).replace(/\s/g, "");

        assert.equal(result_string, expected_result_string);
    });

});