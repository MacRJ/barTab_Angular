var app = angular.module("barTab", [
  'mainFactory'
])

app.controller("header", function($scope) {
  $scope.hello = {};
  $scope.hello.test = "hello World"
});

app.controller("tabSection", function($scope, tabs) {
  tabs.list(function(tabs) {
    $scope.tabs = tabs;
  })
})

app.controller("billSection", function($scope) {

})
