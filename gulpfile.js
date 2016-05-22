var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('test',function(done){

  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
  }, done).start();

  console.log("Test Karma-Gulp");
});


gulp.task('default',function(done){
  console.log("Gulp default using test");
});
