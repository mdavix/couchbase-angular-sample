module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'public/js/libs/angular/angular.js',
      'public/js/libs/angular-resource/angular-resource.js',
      'public/js/libs/angular-mocks/angular-mocks.js',
      'public/js/*.js',
      'test/unit/**/*.js',
      'test/socket.io.js' //Only for testing purposes
    ],

    preprocessors: {
      // (these files will be instrumented by Istanbul)
      'public/js/*.js': ['coverage']
    },

    autoWatch : true,
    singleRun: true,


    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine',
            'karma-coverage'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};