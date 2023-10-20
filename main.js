class Cities {

	constructor(lat, lon) {
		this.lat = lat;
		this.lon = lon; 
	}
}
const melb = new Cities(37.81, 144.96); 
const pert = new Cities(31.9, 115.86);
const edin = new Cities(55.95, 3.18);
const norw = new Cities(52.62, 1.29);
const kunm = new Cities(24.87, 102.83);
const taic = new Cities(24.14, 120.67); 

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
		console.log(xhr); 
		xhr.open('GET',`https://api.openweathermap.org/data/2.5/weather?lat=${melb.lat}&lon=${melb.lon}&appid=b4b558caac03a615ae12d402d91ffc58&units=metric`, true); 
	
		xhr.onload = function () {
			if(this.status === 200) {
				console.log(this.responseText);
				var weather = JSON.parse(this.responseText); 
			
				var tempOutput = `
					<div class = "max">
						<h3>Max:</h3><h1>${weather.main.temp_max}</h1>
					</div>
					<div class = "min">
						<h3>Min:</h3><h1>${weather.main.temp_min}</h1>
					</div>`; 
				 
				 console.log(tempOutput); 

			}

		}; 
		xhr.send(); 
	}

	loadWeather();
}); 