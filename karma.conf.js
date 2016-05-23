module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    //files:['src/app/angular-components/google-chart/']
    files:[
      'src/**/*.js',
      'src/**/test_*.js',
  ]


  });
};
