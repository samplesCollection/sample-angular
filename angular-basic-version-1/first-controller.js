var app = angular.module('app',[])

var bussiness = function(){
  return "Hello World";
}

app.factory('bussiness', bussiness);

var firstController = function($scope, bussiness){
  $scope.hello = 'hello';
  $scope.helloWorld = bussiness;
};

app.controller('firstController',['$scope','bussiness',firstController] );
