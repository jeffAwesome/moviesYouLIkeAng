(function() {
  var app = angular.module("MoviesYouLike", ['ui.router']);
  app.constants("movieConfig", {
    apiKey: "8e7c67585fa149a56537b63fe68776",
    api: "http://api.themoviedb.org/3"
  });
})();
