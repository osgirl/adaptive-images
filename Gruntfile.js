module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['src/{*,**/*}.js']
        },

        html2js: {
            dist: {
                options: {
                    module: null,
                    base: 'src',
                    htmlmin: {
                        collapseBooleanAttributes: true,
                        collapseWhitespace: true,
                        removeComments: true,
                        removeScriptTypeAttributes: true,
                        removeStyleLinkTypeAttributes: true
                    }
                },
                files: [{
                    expand: true,
                    src: ['src/**.html'],
                    ext: '.html.js'
                }]
            }
        },

        wiredep: {
            karmaConf: {
                devDependencies: true,
                src: 'tests/karma.conf.js',
                ignorePath: /\.\.\//,
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/\/\s*bower:*(\S*))(\n|\r|.)*?(\/\/\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\','
                        }
                    }
                }
            }
        },

        karma: {
            unit: {
                configFile: 'tests/karma.conf.js',
                singleRun: true
            }
        },

        jscs: {
            src: ['Gruntfile.js', 'src/{*,**/*}.js', 'tests/unit/{*,**/*}.js'],
            options: {
                config: '.jscsrc',
                esnext: true, // If you use ES6 http://jscs.info/overview.html#esnext
                verbose: true, // If you need output with rule names http://jscs.info/overview.html#verbose
                fix: true, // Autofix code style violations when possible.
                requireCurlyBraces: ['if']
            }
        }


    });

    // Load tasks
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-html2js');

    grunt.registerTask('default', ['jshint', 'jscs', 'html2js', 'karma:unit']);

};
