(function() {
  
  
  var app = angular.module('MoviesYouLike');
  app.directive('movieSearch', ['movieSearchFactory', movieSearch]);
  
  
  function movieSearch(movieSearchFactory) {
    
    // This is my scope not angular scope
    var controller = ['$scope', function ($scope) {
      $scope.searchMovie = function () {
        var results = movieSearchFactory.searchMovie();
         /*results.then(function(response) {
            // this callback will be called asynchronously
            // when the response is available
            location.href = '#/movies';
         }, function(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log("there was an error");
         }); */
        results.success(function() {
            alert("we've got the results back");
        });
      };
    }];
    
    
    return {
      templateUrl: 'src/common/movieSearch/movieSearch.html',
      scope: {
        movie: "="
      },
      controller: controller
    };
    
    
  }
  
})();