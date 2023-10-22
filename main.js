class Cities {

	constructor(name, lat, lon,) {
		this.name = name; 
		this.lat = lat;
		this.lon = lon; 
	}
}
const cities = [

	new Cities('Melbourne', 37.81, 144.96), 
	new Cities('Perth', 31.9, 115.86),
	new Cities('Edinburgh', 55.95, 3.18),
	new Cities('Norwich', 52.62, 1.29),
	new Cities('Kunming', 24.87, 102.83),
	new Cities('Taichung', 24.14, 120.67), 
]; 
 

document.addEventListener("DOMContentLoaded", () => {
	const melbBox = document.querySelector('#Mel-weather');
	const pertBox = document.querySelector('#Per-weather'); 
	const edinBox = document.querySelector('#Edi-weather'); 
	const norwBox = document.querySelector('#Nor-weather'); 
	const kunmBox = document.querySelector('#Kun-weather'); 
	const taicBox = document.querySelector('#Tai-weather');  

	
	cities.forEach(city =>{
		loadWeather(city); 
	});



	function loadWeather (city) {
		var xhr = new XMLHttpRequest ();
		xhr.open('GET',`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=b4b558caac03a615ae12d402d91ffc58&units=metric`, true); 
	
		xhr.onload = function () {
			if(this.status === 200) {
				console.log(this.responseText);
				var weather = JSON.parse(this.responseText); 
			
				var tempOutput = `
					<div class = "Temperature">
						<h1>${weather.main.temp_max}°C</h1>
					</div>`; 

				var description = ` 
					<h2>${weather.weather[0].description}</h2>`;

				var icon = `
					<img class = "icons" src = "http://openweathermap.org/img/w/${weather.weather[0].icon}.png">
				`;
				 
				 console.log(tempOutput); 
				 console.log(description); 
				document.querySelector(`#${city.name}-temp`).innerHTML = tempOutput; 
				document.querySelector(`#${city.name}-description-box`).innerHTML = description; 
				document.querySelector(`#${city.name}-weather-box`).innerHTML = icon;  
			}
			else if (this.status === 404) {
				var errorMessage = "<h2> City weather not found </h2>"; 	
				document.querySelector(`#${city.name}-description-box`).innerHTML= errorMessage; 
			}
		}; 
		xhr.send(); 
	}
}); 