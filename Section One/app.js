// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope','$filter', function($scope,$filter) {
    
    $scope.handle = '';
    $scope.characters = 5;  
    
    $scope.lowercasehandle = function(){
      return $filter('lowercase')($scope.handle);
    }
    
    $scope.rules = [
      
      {rulename: "Must be 5 characters"},
      {rulename: "Must not be used elesewhere"},
      {rulename: "Must be cool"}
    ];
  
    $scope.alertme = function(){
        alert("Alert Clicked!");
    };
  
}]);



