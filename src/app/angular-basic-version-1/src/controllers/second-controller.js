angular.module('secondmodule', [])
  .controller('secondcontroller', ['$scope', 'myService', function($scope, myService) {
    $scope.mycontroller = "mycontroller";
    console.log(myService);
    console.log("service");
    $scope.myservice = myService;
  }])
  .factory('myService', ['$http', function($http) {
    return $http.jsonp("https://api.blinktrade.com/api/v1/BRL/ticker?crypto_currency=BTC&callback=JSON_CALLBACK").then(function(response) {});
  }]);
