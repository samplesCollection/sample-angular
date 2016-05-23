describe('linechartCtrl', function() {

  beforeEach(angular.mock.module('googlechartapp'));

  var linechartCtrl, scope;

  beforeEach(inject(function($rootScope, $controller) {
    console.log($rootScope);
    scope = $rootScope.$new();
    linechartCtrl = $controller('linechartCtrl',{
      $scope:scope
    });
  }));

  //beforeEach(inject(function(_$controller_) {
  //  $controller = _$controller_
  //}));


  it("should return hello", function() {
    console.log("test hello variable");
    //expect(scope.hello).toEqual("Welcome to play with googlechart");
    //expect("hello").toEqual("hello");
  });

});
