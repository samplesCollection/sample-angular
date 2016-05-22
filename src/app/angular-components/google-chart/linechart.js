var firstController = function($scope, bussiness,chartservice ){
  $scope.hello = 'Welcome to play with googlechart';
  $scope.helloWorld = bussiness;
  $scope.chart = chartservice;
};

app.controller('firstController',['$scope','bussiness','chartservice',firstController] );
