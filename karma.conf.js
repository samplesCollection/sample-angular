module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files:[
      //'src/**/*.js',
      //'src/**/test_*.js',
      //'node_modules/**/',
      'node_modules/angular/angular.js',
      //'node_modules/angular/angular-google-chart/ng-google-chart.js',
      'node_modules/angular-mocks/angular-mocks.js',
       //'node_modules/angular-route/angular-route.min.js',
      //'src/app/angular-components/google-chart/module.js',
      //'src/app/angular-components/google-chart/bussiness.js',
      //'src/app/angular-components/google-chart/linechart.js',
      //'src/app/angular-components/google-chart/chart.js',
      //'src/app/angular-components/google-chart/test_*.js',
      //'src/app/angular-basic-version-1/firstController.js',
      //'src/app/angular-basic-version-1/firstController.js',
      //'src/app/angular-basic-version-1/test_*.js',
      'src/app/angular-restangular/*.js'

    ],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    logLevel: config.LOG_INFO,
    logLevel: config.LOG_ERROR,
    logLevel: config.WARN



  });
};
