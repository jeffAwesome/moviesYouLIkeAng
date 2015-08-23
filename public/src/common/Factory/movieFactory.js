(function() {
  
  var app = angular.module('MoviesYouLike');
  app.factory('movieFactory', ['$http', 'movieConfig', function($http, movieConfig) {
    var movie = {};
    if (movie.title === "") {
      movie.title = 'The Matrix';
    }

   movie.searchResults = [];
    
      
    movie.searchMovie = function() {
      $http.get(movieConfig.search+movie.title+'&type=movie&r=json')
      .success(function(response){
       movie.searchResults = response.Search;
        console.log(movie.searchResults);
      });
    };
    
    return movie
  }]);
  
})();