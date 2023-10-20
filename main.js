class City {

	constructor(lat, lon) {
		this.lat = lat;
		this.lon = lon; 
	}
}
const melb = new City(37.81, 144.96); 
const pert = new City(31.9, 115.86);
const edin = new City(55.95, 3.18);
const norw = new City(52.62, 1.29);
const kunm = new City(24.87, 102.83);
const taic = new City(24.14, 120.67); 

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
		xhr.open('GET',`https://api.openweathermap.org/data/2.5/weather?lat=${melb.lat}&lon=${melb.lon}&appid=b4b558caac03a615ae12d402d91ffc58`, true); 
	
		xhr.onload = function () {
			if(this.status === 200) {
				console.log(this.responseText);
			}
		}; 
		xhr.send(); 
	}

	loadWeather();
}); 