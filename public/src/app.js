(function() {
  var app = angular.module("MoviesYouLike", ['ui.router']);
  app.constant("movieConfig", {
    search: 'http://www.omdbapi.com/?s='
  });
})();
