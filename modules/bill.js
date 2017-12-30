var bill = angular.module('billMod', [
  'factoryMod'
])


bill.controller('bill_items', function($scope, bill){
  bill.list(function(bill) {
    $scope.bill = bill;
  })

  $scope.bill_body_description = function(fulfilled) {
    let fulfilledVar = {
      "height": "20px",
      "padding-top" : "5px"
    };
    let notFulfilledVar = {
      "background-color": "red",
      "height": "20px"
    }
    return fulfilled ? fulfilledVar : notFulfilledVar
  }
})
