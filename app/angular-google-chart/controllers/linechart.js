var linechartCtrl = function($scope, bussiness,chartservice ){
  $scope.hello = 'Welcome to play with googlechart';
  $scope.helloWorld = bussiness;
  $scope.chart = chartservice;
};

app.controller('linechartCtrl',['$scope','bussiness','chartservice', linechartCtrl] );
