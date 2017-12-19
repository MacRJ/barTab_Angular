var app = angular.module("barTab", [])

app.controller("header", function($scope) {
  $scope.hello = {};
  $scope.hello.test = "hello World"
});

app.controller("tabSection", function($scope) {
  $scope.tabs = ["test1", "test2", "test3", "test4"]
})
