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
  
 $scope.people = [
   {
   name: 'John Doe',
   address: '555 Main St.',
   city: 'New York,',
   state: 'NY,',
   zip: '1111'
  },{
   name: 'Jane Doe',
   address: '21 jump St.',
   city: 'Los Angeles,',
   state: 'CA,',
   zip: '222'
  },{
   name: 'Jim Doe',
   address: '85 Baton St.',
   city: 'Miami,',
   state: 'FL,',
   zip: '333'
  }
   ]
 
 $scope.formattedAddress = function(person){
    
   return person.address + " " + person.city + " " + person.state + " " + person.zip;
   
 };
  
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
      personObject: "=",
      formattedAddressFunction: "&"
    }, //isolates the scope
    link: function(scope, elements, attrs){
      console.log("Linking...");
      
      console.log(scope);
      
      if(scope.personObject.name = "John Doe"){
        elements.removeAttr('class');
      }
      console.log(elements);
    }
  }
});





