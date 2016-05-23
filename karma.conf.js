module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files:[
      //'src/**/*.js',
      //'src/**/test_*.js',
      'node_modules/angular/angular.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'src/app/angular-components/google-chart/module.js',
      'src/app/angular-components/google-chart/bussiness.js',
      'src/app/angular-components/google-chart/linechart.js',
      'src/app/angular-components/google-chart/chart.js',
      'src/app/angular-components/google-chart/test_*.js',
    ],
    reporters: ['spec'],
    browsers: ['PhantomJS']



  });
};
