'use strict';

angular.module('vegVisApp').
  config(['$locationProvider', '$routeProvider',
   function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
      when('/vegvis', {
        template: '<search-page></search-page>'
      }).
    otherwise('/vegvis');
  }
]);
