// Karma configuration
// Generated on Wed Jul 13 2016 13:15:14 GMT-0400 (EDT)

var webpack = require('webpack');
module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '.',


    // frameworks to use
    // possible values: 'jasmine-jquery','jasmine','source-map-support','webpack','mocha','chai'
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine-jquery','jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'test/index.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/index.js': ['webpack','sourcemap'],
    },


    // karma watches the test entry points
    // (you don't need to specify the entry option)
    // webpack watches dependencies
    // webpack configuration

    webpackServer: {
      noInfo: true // please don’t spam the console when running in karma!
    },


    webpackMiddleware: {
      stats: 'errors-only',
      noInfo: true // webpack-dev-middleware configuration
    },

    webpack:{
      devtool: 'inline-source-map',
      resolve: {
          alias: {
              //"GlobVar" : "../etc/GlobVar.js",
          }
      },
      plugins: [
          new webpack.ProvidePlugin({
              //"GlobVar": "GlobVar",
          })
      ],
      module:{
        preLoaders: [
          {
              //Instrument all files that end in *.js
              test: /\.js$/,
              //Instrument all files except files that match moment or knockout
              //test: /^(.(?!moment|knockout))*.js$/,
              //Exclude Instrumentation of directories with name test/ and node_modules/
              exclude: /(test|node_modules)\//,
              loader: 'istanbul-instrumenter'
          }
        ]
      }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress', 'coverage', 'spec', 'karma-remap-istanbul'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec','progress','coverage'],


    coverageReporter: {

      reporters: [
        {
          type: 'text-summary'
        },
        {
          type: 'html',
          dir: 'test/coverage/'
        }
      ]
    },

    port: 9876, // web server port


    colors: true, // enable / disable colors in the output (reporters and logs)


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // possible values: 'PhantomJS', 'Chrome', 'Chrome_without_security'
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      }
    },


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,

    plugins: [
      require('jasmine-core'),
      require('karma-chrome-launcher'),
      require('karma-coverage'),
      require('karma-jasmine'),
      require('karma-jasmine-jquery'),
      require('karma-phantomjs-launcher'),
      require('karma-source-map-support'),
      require('karma-sourcemap-loader'),
      require('karma-spec-reporter'),
      require('karma-webpack'),
      require('webpack')
    ]

  })
}
