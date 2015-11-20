module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'index.js', 'lib/**/*.js', 'test/**/*.js'],
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            }
        },
        watch: {
            gruntfile: {
                files: 'Gruntfile.js',
                tasks: ['jshint']
            },
            test: {
                files: 'test/*js',
                tasks: ['test']
            }
        },
        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    require: 'coverage/blanket'
                },
                src: ['test/**/*.js']
            },
            "html-cov": {
                options: {
                    reporter: 'html-cov',
                    quiet: true,
                    captureFile: 'coverage.info'
                },
                src: ['test/**/*.js']
            },
            "travis-cov": {
                options: {
                    reporter: 'travis-cov'
                },
                src: ['test/**/*.js']
            }
        },

        coveralls: {
            options: {
                force: false
            },

            target: {
                src: 'coverage.info'
            }
        }
    });

    grunt.loadTasks('tasks');

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-coveralls');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('test', ['jshint', 'mochaTest']);
    grunt.registerTask('cover', ['coveralls']);
    grunt.registerTask('default', ['test']);

};