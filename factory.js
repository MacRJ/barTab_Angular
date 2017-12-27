var factoryVar = angular.module('factoryMod', [])


factoryVar.factory('tabs', function($http){
  return {
    list: function (callback){
      $http({
        method: 'GET',
        url: 'https://murmuring-tundra-40675.herokuapp.com/tabs',
        cache: true
      }).success(callback)
    }
  };
})
factoryVar.factory('bill', function($http){
  return {
    list: function(callback){
      $http({
        method: 'GET',
        url: 'https://murmuring-tundra-40675.herokuapp.com/bill',
        chache:true
      }).success(callback)
    }
  }
})
