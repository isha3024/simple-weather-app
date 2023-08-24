const APIKEY = '0c80f5d76b5489937f633b198a6899a6';
const search = document.getElementById("search");
const form = document.querySelector("form");
const weatherHTML = document.querySelector(".weather");
//const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


const getWeather = async (city) => {
	weatherHTML.innerHTML = `<h2>Loading....</h2>`;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;
	const response = await fetch(url);
	const data = await response.json();
	return showWeather(data);
}

const showWeather = (data) => {
	//console.log(data);
	if(data.cod == "404"){
		weatherHTML.innerHTML = `<h2>City not found</h2>`;
		return;
	}
	else{
		weatherHTML.innerHTML = 
		`<h2 class="city">Weather in ${data.name}</h2>
		<h3 class="temp"></strong>${data.main.temp}&deg;C</strong></h3>
		<div class="weather-icon">
		<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Icon of weather" class="icon">
		<div class="description"><strong>${data.weather[0].main}</strong></div>
		</div>
		<div class="humidity">Humidity: <strong>${data.main.humidity}%</strong></div>
		<div class="wind">Wind speed: <strong>${data.wind.speed} km/h</strong></div>`	
	}
}

form.addEventListener("submit", function(event) {
	getWeather(search.value);
	event.preventDefault();	
})

window.onload = function(){
	weatherHTML.innerHTML = 
		`<h2 class="city">Weather in Vadodara</h2>
		<h3 class="temp">31.98°C</h3>
		<div class="weather-icon">
		<img src="https://openweathermap.org/img/wn/04d.png" alt="Icon of weather" class="icon">
		<div class="description"><strong>Clouds</strong></div>
		</div>
		<div class="humidity">Humidity: <strong>62%</strong></div>
		<div class="wind">Wind speed: <strong>6.17 km/h</strong></div>`	
}
