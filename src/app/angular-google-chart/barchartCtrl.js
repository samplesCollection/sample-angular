var barchartCtrl = function($scope, barchartservice ){
  $scope.chart = barchartservice;
};

app.controller('barchartCtrl',['$scope','barchartservice', barchartCtrl] );
