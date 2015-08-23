(function() {
  
  var app = angular.module('MoviesYouLike');
  app.config(function($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
      .state('home', {
        url: "/",
        controller: 'homeController',
        templateUrl: "src/home/home.html"
      });
  });
  
  
})();


