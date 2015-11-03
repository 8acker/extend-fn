var assert = require("assert");
var extend = require("../index");
var jsonfn = require('json-fn');

describe("Extend", function () {

    it("check real application usage", function () {

        var defaults = {
            screenshot: {
                make: false,
                condition: function () {
                    return true;
                }
            },
            page: {
                filter: function () {
                    return false;
                },
                extend: {}
            },
            sitemap: {
                filter: {
                    segment: function (segment) {
                        return false;
                    }
                },
                extend: function (sitemap) {
                    return;
                }
            }
        };

        var options = {
            screenshot: {
                condition: function () {
                    return false;
                }
            },
            page: {
                extend: {
                    logo: function () {
                        return "http://test-url.com/logo.gif";
                    }
                }
            },

            sitemap: {
                extend: function (sitemap) {
                    sitemap.forEachPage(function (page) {
                        sitemap.logo = page.getAdditionalAttribute("logo") ? page.getAdditionalAttribute("logo") : sitemap.logo;
                    });
                }
            }
        };

        var expected_result = {
            screenshot: {
                make: false,
                condition: function () {
                    return false;
                }
            },
            page: {
                filter: function () {
                    return false;
                },
                extend: {
                    logo: function () {
                        return "http://test-url.com/logo.gif";
                    }
                }
            },
            sitemap: {
                filter: {
                    segment: function (segment) {
                        return false;
                    }
                },
                extend: function (sitemap) {
                    sitemap.forEachPage(function (page) {
                        sitemap.logo = page.getAdditionalAttribute("logo") ? page.getAdditionalAttribute("logo") : sitemap.logo;
                    });
                }
            }
        };

        var result = extend(defaults, options);

        var result_string = jsonfn.stringify(result).replace(/\s/g, "");
        var expected_result_string = jsonfn.stringify(expected_result).replace(/\s/g, "");

        assert.equal(result_string, expected_result_string);
    });

    it("check null options", function () {

        var defaults = {
            x: {
                y: function () {
                    return 'Honk'
                }
            }
        };

        var options = null;

        var expected_result = {
            x: {
                y: function () {
                    return 'Honk'
                }
            }
        };

        var result = extend(defaults, options);
        var result_string = jsonfn.stringify(result).replace(/\s/g, "");
        var expected_result_string = jsonfn.stringify(expected_result).replace(/\s/g, "");

        assert.equal(result_string, expected_result_string);
    });

    it("check null defaults", function () {

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

    it('check extend with more than one object', function () {
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
        assert.equal(jsonfn.stringify(result), jsonfn.stringify(expected));
    });
});




