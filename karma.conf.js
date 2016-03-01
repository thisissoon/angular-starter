// Karma configuration
// Generated on Tue Mar 01 2016 11:30:27 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      './node_modules/angular/angular.js',
      './node_modules/angular-route/angular-route.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './app/js/html5-locations/html5Locations.js',
      './app/js/search/search.js',
      './app/js/search/controllers/SearchCtrl.js',
      './app/js/results/results.js',
      './app/js/results/controllers/ResultsCtrl.js',
      './app/js/version/version.js',
      './app/js/version/directives/appVersion.js',
      './app/js/app.js',
      './tests/unit/*.js',
      './tests/unit/**/*.js',
      './tests/unit/**/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/js/**/*.js': 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    coverageReporter: {
      dir : 'coverage/',
      reporters: [
        { type: 'text' },
        { type: 'json' },
        { type: 'html' }
      ]
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    plugins : [
      'karma-jasmine', 
      'karma-phantomjs-launcher', 
      'karma-chrome-launcher', 
      'karma-coverage'
    ],


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
      'PhantomJS' 
      // 'Chrome'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
