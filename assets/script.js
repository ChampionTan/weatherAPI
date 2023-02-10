// my api key 07ebbc07eb71efd6931662d229d381e5

//weather api 
//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}

var inputCity = document.getElementById('#search');
var apiKey = '07ebbc07eb71efd6931662d229d381e5';

function fetchWeather(currentCity) {
	var apiUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='+ {inputCity} +'&appid='+ {apiKey};

	fetch(apiUrl)
	.then(function(response){
		return response.json();
	})
	.then(function(data) {
		console.log(data);
	})
	.catch(function(error) {
		console.log(error);
	})
}