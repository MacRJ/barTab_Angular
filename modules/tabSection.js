const tabSection = angular.module('tabSectionMod', [
  'factoryMod'
])
 var count = 0;
 tabSection.controller('tabSectionController', function($scope, tabs) {
   tabs.list(function(tabs) {
     $scope.tabs = tabs;
   })

   $scope.displayTab = function(selected){

     var colors = ['#33a1fd','#52dbaf','#fdca40','#f79824','#33a1fd','#52dbaf','#fdca40','#f79824','#33a1fd','#52dbaf','#fdca40','#f79824','#2176ff','#32ffd2'];


     if(count === 14){
       count = 0
     } else {
       count++
     }

     let notSelectedCss = {
       "height": "40px",
       "padding-top": "5px",
       "margin-left": "40px",
       "margin-top": "5px",
       "background-color": colors[count]

     };
     let selectedCss = {
       "height": "40px",
       "padding-top": "5px",
       "margin-left": "15px",
       "margin-top": "5px",
       "background-color": colors[count]

     };
    return selected ? selectedCss : notSelectedCss
  }
})
