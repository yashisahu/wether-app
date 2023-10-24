const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?zip=273001&city=GORAKHPUR&state=UTTAR%20PRADESH&country=India';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bef2d7cd7dmsh0519f6294c6ffe3p17ed95jsn1f8d80f344cb',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather =(city)=>{
	cityName.innerHTML= city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
		console.log(response)
		Feels_like.innerHTML = response.feels_like
		Humidity2.innerHTML = response.humidity
		Humidity.innerHTML = response.humidity
		Max_temp.innerHTML = response.max_temp
		Min_temp.innerHTML = response.min_temp
		Sunrise.innerHTML = response.sunrise
		Sunset.innerHTML = response.sunset
		Temp.innerHTML = response.temp
		Temp2.innerHTML = response.temp
		Wind_degrees.innerHTML = response.wind_degrees
		Wind_speed.innerHTML = response.wind_speed
		Wind_speed2.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")