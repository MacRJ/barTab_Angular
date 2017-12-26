var bill = angular.module('billMod', [
  'factory'
])

bill.controller('bill_items', function($scope, bill){
  bill.list(function(bill) {
    $scope.bill = bill
  })
})
