(function() {
  
  
  var movieSearchFactory = ['$http', '$location', 'movieConfig', 'movieFactory', function($http, $location, movieConfig, movieFactory) {
     var movie = movieFactory;
     var movieSearch = {};
    
      movieSearch.searchResults = [];
    
      
      movieSearch.searchMovie = function() {
         return $http.get(movieConfig.search+movie.title+'&type=movie&r=json')
         /*.then(function(response) {
            // this callback will be called asynchronously
            // when the response is available
            
         }, function(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log("there was an error");
         }); */
        
      }; 
    
      return movieSearch;
  }];
  
  
  var app = angular.module('MoviesYouLike');
  app.factory('movieSearchFactory', movieSearchFactory);
  
})();