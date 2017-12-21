const tabSection = angular.module('tabSectionMod', [
  'factory'
])
 tabSection.controller('tabSectionController', function($scope, tabs) {
   tabs.list(function(tabs) {
     $scope.tabs = tabs;
   })
})
