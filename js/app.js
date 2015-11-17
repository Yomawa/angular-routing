var app = angular.module('routeApp', ['ngRoute']);
//routeProvider
app.config(function($routeProvider, $locationProvider){
$routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'HomeController'
      })
      .when('/dogs', {
        templateUrl: 'partials/dogs.html',
        controller: 'DogsController'
      })

      .when('/dog/:name', {
        templateUrl: 'partials/dog.html',
        controller: 'DogController'
      })

      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController'
      })
      .when('/project', {
        templateUrl: 'partials/project.html',
        controller: 'ProjectController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController'
      })
      .otherwise({
        redirectTo:'/'
      });
  $locationProvider.html5Mode(true);
});