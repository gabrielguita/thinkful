angular.module('tweetful', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'templates/home.html',
    controller: 'HomeController'
  })
  .when('/follows', {
    templateUrl: 'templates/follows.html',
    controller: 'FollowsController'
  })
  .when('/tweets', {
    templateUrl: 'templates/tweets.html',
    controller: 'TweetsController'
  })
  .when('/about', {
    templateUrl: 'templates/about.html',
    controller: 'AboutController'
  })
  .when('/team', {
    templateUrl: 'templates/team.html',
    controller: 'TeamController'
  })
  .otherwise('/');
}])
