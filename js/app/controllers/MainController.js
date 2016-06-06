function MainController($scope) {
  $scope.name = "Colton";
  $scope.email = "colton.staab@iamatest.com";
  $scope.phone = "123.456.5678";
}

angular
  .module('app')
  .controller('MainController', MainController);