var header = angular.module('headerMod', [
])

header.controller("headerController", function($scope) {
  $scope.hello = {};
  $scope.hello.test = "hello World"
});
