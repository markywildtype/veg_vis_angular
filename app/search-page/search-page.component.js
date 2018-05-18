'use strict';

angular.module('searchPage').
  component('searchPage', {
    templateUrl: 'search-page/search-page.template.html',
    controller: ['$http',
      function SearchPageController($http){
        var self = this;

        self.testText = "This is some goddamn test text"
      }
    ]
  });
