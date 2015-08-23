(function() {
  var app = angular.module('MoviesYouLike');
  app.controller('homeController', ['$scope', function($scope) {
    $scope.movie = '';
    console.log("were in the home controller");
  }]);
})();