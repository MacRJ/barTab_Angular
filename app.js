var app = angular.module("barTab", [
  'factory'
])

app.controller("header", function($scope) {
  $scope.hello = {};
  $scope.hello.test = "hello World"
});
//
app.controller("tabSection", function($scope, tabs) {
   tabs.list(function(tabs) {
    $scope.tabs = tabs;
  })
  $scope.selectTab = function(id) {
    console.log(id)
  }
})
 // app.controller('test', function(id) {
 //   console.log(id)
 // })
