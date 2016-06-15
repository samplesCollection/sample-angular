angular.module('secondmodule', [])
  .controller('secondcontroller', ['$scope', 'myService', function($scope, myService) {
    $scope.mycontroller = "mycontroller";
    console.log(myService);
    console.log("service");
    var data = myService.data;
    $scope.myservice = myService.data;
    console.log("Here is my data "+data);

  }])
  .factory('myService', ['$http', function($http) {
    return new Promise(function(error,sucess){
      return $http.jsonp("https://api.blinktrade.com/api/v1/BRL/ticker?crypto_currency=BTC&callback=JSON_CALLBACK").then(function(response) {
        console.log("Inside Response " + response.data.toString());
        return response.data;
      });
    });
  }]);
