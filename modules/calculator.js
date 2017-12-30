var calculator = angular.module('calculatorMod', [
  'factoryMod'
])


calculator.controller('calculatorController', function($scope, bill) {
  bill.list(function(bill) {
    $scope.findTotal = function() {
      var total = 0;
      total = total + parseFloat(bill[0].price);
      $scope.total = total.toFixed(2);
      return total.toFixed(2)
    }
    $scope.findTax = function() {
      let total = $scope.total;
      tax = total * .055;
      $scope.tax = tax.toFixed(2);
      return tax.toFixed(2);

    };
    $scope.findGrandTotal = function() {
      let total = $scope.total;
      let grandTotal = total * 1.055
      return grandTotal.toFixed(2)
    }
  })
})
