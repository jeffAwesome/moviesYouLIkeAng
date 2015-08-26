(function() {
  
  var homeController = ['$scope', 'movieFactory', function($scope, movieFactory) {  
    $scope.movie = movieFactory;
  }]
  
  
  var app = angular.module('MoviesYouLike');
  app.controller('homeController', homeController);
})();