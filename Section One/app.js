// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope','$filter', function($scope,$filter) {
    
    $scope.name = "Fahad Qazi";
    $scope.occupation = "Coder";
    $scope.bio = function(){
      console.log($scope.name + ": " + $scope.occupation);
    };
  
    
    $scope.lowercasehandle = function(){
      return $filter('lowercase')($scope.handle);
    }
  
}]);



