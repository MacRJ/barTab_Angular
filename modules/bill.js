var bill = angular.module('billMod', [
  'factoryMod'
])

bill.controller('bill_items', function($scope, bill){
  bill.list(function(bill) {
    $scope.bill = bill;
  })

  $scope.checkfulfilled = function() {
    console.log('checkfulfilled heard')
  }
})
