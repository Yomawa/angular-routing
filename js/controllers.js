app.controller('HomeController', function($scope, $location) {
  $scope.message = "Home";
  $scope.movieSearch = function(title){
    $http.get('http://www.omdbapi.com/?s='+title).then(function (res) {
      //debugger
      $scope.movies = res.data.Search;
    });
  $location.url('/?title='+title);
  };
  //console.log($location.url());
  
});

app.controller('MovieController', function($scope, $http, $routeParams) {
  if($routeParams.id){
    $http.get('http://www.omdbapi.com/?i='+$routeParams.id).then(function (res){
     $scope.movies = res.data; 
    });
  }
});

app.controller('DogsController', function($scope) {
  $scope.message = "Bow wow";
});

app.controller('DogController', function($scope, $routeParams) {
  //debugger
  //$scope.name = $routeParams.name;
  //$scope.message = "Bow wow";
  if ($routeParams.name){
    $scope.dog = $routeParams;
  }
});

app.controller('BioController', function($scope) {
  $scope.message = "Hi, my name is Maja";
});
app.controller('ProjectController', function($scope) {
  $scope.message = "Chek out my projects";
});
app.controller('ResumeController', function($scope) {
  $scope.message = "My resume";
});