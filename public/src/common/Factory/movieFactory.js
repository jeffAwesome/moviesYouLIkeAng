(function() {
  
  var app = angular.module('MoviesYouLike');
  app.factory('movieFactory', [function() {
    var movie = {};
    movie.title = 'The Matrix';
    return movie;
  }]);
  
})();