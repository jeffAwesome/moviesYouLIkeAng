(function() {
  
  var app = angular.module('MoviesYouLike');
  app.directive('movieSearch', [function() {
    return {
      templateUrl: 'src/common/movieSearch/movieSearch.html',
      scope: {
        
      }
    }
  }]);
  
})();