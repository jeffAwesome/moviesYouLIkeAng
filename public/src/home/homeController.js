(function() {
  var app = angular.module('MoviesYouLike');
  app.controller('homeController', ['$scope', 'movieFactory', function($scope, movieFactory) {  
    $scope.movie = movieFactory;
  }]);
})();