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
  
  .when('/third',{
    templateUrl: 'pages/third.html',
    controller: 'thirdController'
  })
  
  .when('/third/:num', {
    templateUrl: 'pages/third.html',
    controller: 'thirdController'
  })
  
});

//SERVICE
angularApp.service('nameService', function(){
  
  var self = this;
  this.name = 'john doe';
  
  this.namelength = function(){
    return self.name.length;
  }
});

// CONTROLLERS
angularApp.controller('mainController', ['$scope','$log','nameService', function($scope,$log,nameService) {
  
 $scope.person = {
   name: 'John Doe',
   address: '555 Main St. New York, NY 1111'
 }
  
}]);


angularApp.controller('secondController', ['$scope','$log','nameService', function($scope,$log,nameService){
  
 
  
}]);

angularApp.controller('thirdController', ['$scope','$log','$routeParams', function($scope,$log,$routeParams){
  $scope.num = $routeParams.num || 1;
}]);

//CUSTOM DIRECTVE
angularApp.directive('searchResult', function(){
  return {
    restrict: 'AECM',
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope:{
      personName: "@",
      personAddress: "@"
    } //isolates the scope
  }
});





