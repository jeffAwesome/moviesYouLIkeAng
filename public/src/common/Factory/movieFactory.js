(function() {
  
  var app = angular.module('MoviesYouLike');
  app.factory('movieFactory', ['$http', 'movieConfig', function($http, movieConfig) {
    var movie = {};
    if (!movie.title) {
      movie.title = 'The Matrix';
    }
    
    movie.searchResults = [];
    
    return movie
  }]);
  
})();