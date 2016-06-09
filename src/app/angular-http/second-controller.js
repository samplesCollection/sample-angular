var app = angular.module('app',[])

var bussiness = function($http){
  return "bussiness";
}

app.factory('bussiness', ['$http',bussiness]);

var secondController = function($scope, bussiness){
  $scope.bussiness = bussiness;

  $http.get("http://api.promasters.net.br/cotacao/v1/valores").then(function(response) {
     $scope.promasters = response.data;
  }, function(response){
    return "error";
  });

};

app.controller('secondController',['$scope','bussiness', secondController] );
