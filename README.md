# karma-coverage-webpack-istanbul

## Synopsis

Basic project that attempts a coverage with Webpack, Karma, Jasmine, Istanbul. Getting a mapping of the original sourcecode instead of the webpack transpiled huge files.

## Installation

To install all packages

    npm install

Run test

    npm test

## Setup

A one point entry is provided to all the test files which in this case is index.js within the test folder, it scans the folder at runtime and includes the spec files, the regex pattern can be altered as needed to include the files as per the project.

That is provided in the files and preprocessors as shown below. preprocessors need to include webpack since the files needs to be transpiled before serving and sourcemap to map to the orignal files.

    karma.conf.js

    files: [
      'test/index.js'
    ],


    preprocessors: {
      'test/index.js': ['webpack','sourcemap'],
    },
  
We don't have to include 'coverage' in test files if we are using webpack, that could possibly end up running into 'dependency to an entry point not allowed' errors.

Next we need to include the istanbul instrumenter to get code coverage for the original source files. Also the devtool needs to be set as 'inline-source-map', these settings needs to be done in the karma.conf.js

    karma.conf.js
    
    webpack:{
      devtool: 'inline-source-map',
      module:{
        preLoaders: [
          {
              test: /\.js$/,
              exclude: /(test|node_modules)\//,
              loader: 'istanbul-instrumenter'
          }
        ]
      }
    },

#Coverage
Coverage files are generated withing the test/coverage folder as per the settings in coverageReporter. 

text-summary for console logs when running the test
html for generated files to traverse and verify which part of the code is not covered

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
