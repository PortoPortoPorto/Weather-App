class Cities {

	constructor(name, lat, lon,) {
		this.name = name; 
		this.lat = lat;
		this.lon = lon; 
	}
}
const melb = new Cities('Melbourne', 37.81, 144.96); 
const pert = new Cities('Perth', 31.9, 115.86);
const edin = new Cities('Edinburgh', 55.95, 3.18);
const norw = new Cities('Norwich', 52.62, 1.29);
const kunm = new Cities('Kunming', 24.87, 102.83);
const taic = new Cities('Taichung', 24.14, 120.67); 

document.addEventListener("DOMContentLoaded", () => {
	const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}&units=metric';
	const apiKey  = 'b4b558caac03a615ae12d402d91ffc58';
	console.log(edin.lat); 
	console.log(edin.lon);

	const melbBox = document.querySelector('#Mel-weather');
	const pertBox = document.querySelector('#Per-weather'); 
	const edinBox = document.querySelector('#Edi-weather'); 
	const norwBox = document.querySelector('#Nor-weather'); 
	const kunmBox = document.querySelector('#Kun-weather'); 
	const taicBox = document.querySelector('#Tai-weather');  

	function loadWeather () {
		var xhr = new XMLHttpRequest ();
		xhr.open('GET',`https://api.openweathermap.org/data/2.5/weather?lat=${melb.lat}&lon=${melb.lon}&appid=b4b558caac03a615ae12d402d91ffc58&units=metric`, true); 
	
		xhr.onload = function () {
			if(this.status === 200) {
				console.log(this.responseText);
				var weather = JSON.parse(this.responseText); 
			
				var tempOutput = `
					<div class = "Temperature">
						<h5>Temp:</h5><h1>${weather.main.temp_max}°C</h1>
					</div>`; 

				var description = ` 
					<h1>${weather.weather[0].description}</h1>`;

				var icon = `
					<img src = "http://openweathermap.org/img/w/${weather.weather[0].icon}.png">
				`;
				 
				 console.log(tempOutput); 
				 console.log(description); 
				document.querySelector('#melb-temp').innerHTML = tempOutput; 
				document.querySelector('#melb-description-box').innerHTML = description; 
				document.querySelector('#melb-weather-box').innerHTML = icon;  
			}
		}; 
		xhr.send(); 
	}

	loadWeather();
}); 