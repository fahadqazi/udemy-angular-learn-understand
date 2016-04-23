//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//Route
weatherApp.config(function($routeProvider){
    
  $routeProvider
  
  .when('/', {
    templateUrl: 'pages/home.htm',
    controller: 'homeController'
  })
  .when('/forecast', {
    templateUrl: 'pages/forecast.htm',
    controller: 'forecastController'
  })
  .when('/forecast/:days', {
    templateUrl: 'pages/forecast.htm',
    controller: 'forecastController'
  })
  
});

//Custom service
weatherApp.service('cityService', function(){
  
  this.city = "London, UK";
  
});


//Controllers
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
  
  $scope.city = cityService.city;
  $scope.$watch('city', function(){
    cityService.city = $scope.city;
  });
  
}]);


weatherApp.controller('forecastController', ['$scope','$resource','$routeParams', 'cityService', function($scope, $resource, $routeParams,cityService){
  
  $scope.city = cityService.city;
  $scope.days = $routeParams.days || 2;                                           
  
  $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=35ab16ce21b847a36ece6eaba0df9244",
                                 {callback: "JSON_CALLBACK"}, {get: {method: "JSONP" }});
                                             
                                             
  $scope.weatherResult = $scope.weatherAPI.get({q: $scope.city, cnt:$scope.days});
                                             
  
  $scope.convertToCentigrade = function(degk){
    return Math.round(degk - 273.15);
  };
  
  $scope.convertToDate = function(dt){
    return new Date(dt*1000);
  }
  
}]);

//CUSTOM DIRECTIVE
weatherApp.directive("weatherReport", function(){
  return {
    restrict: 'E',
    templateUrl: 'directives/weatherReport.html',
    replace: true,
    scope: {
      weatherDay: "=",
      convertToStandard: "&",
      convertToDate: "&",
      dateFormat: "@"
    }
  }
});











