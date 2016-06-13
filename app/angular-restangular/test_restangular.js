describe('My test with angular', function() {

  var $controller;

  beforeEach(module('restangularApp'));
  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
    console.log("Variable parameter controller " + _$controller_);
    console.log("Local Variable controller " + $controller);
  }));

  describe('My firstTest', function() {
    it('First it', function() {
      console.log("Mother Fucker");
      var $scope = {};
      var controller = $controller('firstController', {$scope:$scope});
      var hello = $scope.hello;
      console.log(hello);
    });
  });


});
