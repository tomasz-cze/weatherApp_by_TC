// Data from html

const input = document.querySelector('input')
const btn = document.querySelector('button')
const weatherImg = document.querySelector('.weatherImg img')
const cityName = document.querySelector('.cityName')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temp')
const humid = document.querySelector('.humidity')
const pres = document.querySelector('.pressure')
const wind = document.querySelector('.wind')

// Api most important information needed to fetch
const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=5b61511832775aa861c9d464a8fef32f'
const API_UNITS = '&units=metric'

// main function with checking weather in OpenWeather API
const getWeather = () => {
	const city = input.value || 'Gdzie chcesz znać pogodę?'
	const URL = API_LINK + city + API_KEY + API_UNITS

    //used axios do get API data
	axios.get(URL).then(res => {
		const weat = res.data.weather[0].description
		const hum = res.data.main.humidity
		const temp = res.data.main.temp
		const icon = res.data.weather[0].icon
		const pressure = res.data.main.pressure
		const windSpeed = res.data.wind.speed

		pres.textContent = pressure + ' hPa'
		wind.textContent = windSpeed + ' m/s'
		weatherImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
		humid.textContent = hum + '%'
		weather.textContent = weat
		temperature.textContent = Math.floor(temp) + '°C'
		cityName.textContent = res.data.name
	})
}
// function on enter keydown
const enterKey = e => {
	if (e.key === 'Enter') {
		getWeather()
	}
}

// listeners
btn.addEventListener('click', getWeather)
input.addEventListener('keyup', enterKey)
