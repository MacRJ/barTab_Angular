const billMenuSection = angular.module('billMenuMod', [
  'factory'
])
var billSelected = true;


billMenuSection.controller('selectorController', function($scope) {
  $scope.billSectionSelector = function() {
    let billSelectedCss = {
      "grid-column": '1/3',
      "grid-row": '1/8',
      "background-color": "lightgreen",
    };
    let billNotSelectedCss = {
      "grid-column": '1/3',
      "grid-row": '8/10',
      "background-color": "lightgreen",
    }

    return billSelected ? billSelectedCss : billNotSelectedCss
  };
  // Button to toggle to Menu Section
  $scope.selectBill = function() {
    if(billSelected) {
      null
    } else {
      billSelected = !billSelected
    }
  };

  // Menu Section
  $scope.menuSectionSelector = function() {
    let menuSelectedCss = {
      "grid-column": '1/3',
      "grid-row": '1/8',
      "background-color": 'lightyellow',
    };
    let menuNotSelectedCss = {
      "grid-column": '1/3',
      "grid-row": '8/10',
      "background-color": 'lightyellow',
    };

    return billSelected ? menuNotSelectedCss : menuSelectedCss
  };

  // Click Action to toggle Bill Section
  $scope.selectMenu = function() {
    if(billSelected) {
      billSelected = !billSelected
    } else {
      null
    }
  };
})
.directive('theBill', function() {
    return {
      restrict: 'A',
      templateUrl: 'theBill.html'
  }
})
