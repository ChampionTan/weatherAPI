// my api key 07ebbc07eb71efd6931662d229d381e5

//weather api 
//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

var key = "07ebbc07eb71efd6931662d229d381e5";
var weatherApi = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=" + key;
var geoCoding = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid=" + key;

//function to display the current weather
