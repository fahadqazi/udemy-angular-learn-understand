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
  
  $scope.name = nameService.name;
  
  $log.log(nameService.name);
  $log.log(nameService.namelength());
  
  $scope.$watch('name', function(){
    nameService.name = $scope.name;
  });
  
}]);


angularApp.controller('secondController', ['$scope','$log','nameService', function($scope,$log,nameService){
  
  $scope.name = nameService.name;
  
  $scope.$watch('name', function(){
    nameService.name = $scope.name;
  });
  
}]);

angularApp.controller('thirdController', ['$scope','$log','$routeParams', function($scope,$log,$routeParams){
  $scope.num = $routeParams.num || 1;
}]);