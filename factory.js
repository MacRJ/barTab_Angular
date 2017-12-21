angular.module('factory', [])
       .factory('tabs', function($http){
  return {
    list: function (callback){
      $http({
        method: 'GET',
        url: 'https://murmuring-tundra-40675.herokuapp.com/tabs',
        cache: true
      }).success(callback);
    },
  };
});
