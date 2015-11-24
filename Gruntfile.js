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
                    reporter: 'spec'
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
        },

        mochacov: {
            coverage: {
                options: {
                    coveralls: true
                }
            },
            test: {
                options: {
                    reporter: 'spec'
                }
            },
            options: {
                files: 'test/**/*.js',
                coveralls: {
                    repoToken: 'EoKkudrBvR55F6dno8qxmCz5h1FN6V92H'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-mocha-cov');

    grunt.registerTask('lint', ['jshint']);
    grunt.registerTask('travis', ['mochacov:coverage']);
    grunt.registerTask('test', ['mochaTest']);

    grunt.registerTask('default', ['lint', 'test', 'travis']);


};