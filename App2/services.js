//Custom service
weatherApp.service('cityService', function(){
  
  this.city = "London, UK";
  
});

weatherApp.service('weatherService',['$resource', function($resource){
  
  this.getWeather = function(city, days){
    
  var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily?APPID=35ab16ce21b847a36ece6eaba0df9244",
                                 {callback: "JSON_CALLBACK"}, {get: {method: "JSONP" }});
                                             
                                             
  return weatherAPI.get({q:city, cnt: days});
    
  }
  
}]);