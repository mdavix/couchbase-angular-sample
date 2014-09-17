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

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['PhantomJS'],

    plugins : [
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};