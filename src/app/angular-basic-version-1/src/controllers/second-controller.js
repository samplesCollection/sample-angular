angular.module('secondmodule',[])
.controller('secondcontroller', ['myService', function($scope){} ])
.factory('myService', function(){return "myService"});
