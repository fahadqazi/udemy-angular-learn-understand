// MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);


//ROUTES
angularApp.config(function($routeProvider){
    
  $routeProvider
  
  .when('/',{
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
  
  .when('/second',{
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })
  
});

// CONTROLLERS
angularApp.controller('mainController', ['$scope','$location','$log', function($scope,$log) {
    
  $scope.name = "Main";
  
}]);


angularApp.controller('secondController', ['$scope','$log', function($scope,$log){
  
  $scope.name = "new page";
  
}]);
