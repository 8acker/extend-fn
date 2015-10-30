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
            a : "bla"
        };

        var expected_result = {
            a : "bla"
        };

        var result = extend(defaults, options);
        var result_string = jsonfn.stringify(result).replace(/\s/g, "");
        var expected_result_string = jsonfn.stringify(expected_result).replace(/\s/g, "");

        assert.equal(result_string, expected_result_string);
    });
});




