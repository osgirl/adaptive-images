// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-01-06 using
// generator-karma 0.8.3

module.exports = function(config) {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        files: [
          'bower_components/angular/angular.js',
          'bower_components/angular-mocks/angular-mocks.js',
          'src/**.js',
          'tests/unit/**/*.js'
        ],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
          'PhantomJS'
        ],

        // Which plugins to enable
        plugins: [
          'karma-phantomjs-launcher',
          'karma-jasmine',
          'karma-junit-reporter',
          'karma-story-reporter',
          'karma-coverage'
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        reporters: ['coverage', 'junit', 'story'],

        preprocessors: {
            'src/*.js': ['coverage']
        },

        junitReporter: {
            outputDir: 'tests/test-reports/',
            outputFile: 'karma-results.xml',
            useBrowserName: false
        },

        coverageReporter: {
            instrumenterOptions: {
                istanbul: { noCompact: true }
            },
            reporters: [
                { type: 'clover', dir: 'tests/test-reports/', subdir: '.', file: 'clover.xml' },
                { type: 'cobertura', dir: 'tests/test-reports/', subdir: '.', file: 'cobertura.xml' },
                { type: 'html', dir: 'tests/test-reports/', subdir: '.' },
                { type: 'text' },
                { type: 'text-summary' },
                { type: 'lcovonly', dir: 'tests/test-reports/', subdir: '.',  file: 'lcov.info'}
            ]
        }

    });
};
