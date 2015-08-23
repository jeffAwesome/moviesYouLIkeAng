(function() {
  
  var app = angular.module('MoviesYouLike');
  app.directive('movieSearch', ['movieSearchFactory', function(movieSearchFactory) {
    return {
      templateUrl: 'src/common/movieSearch/movieSearch.html',
      scope: {
        movie: "="
      }
    }
  }]);
  
})();