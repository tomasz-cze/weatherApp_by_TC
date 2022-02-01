const input = document.querySelector('input')
const btn = document.querySelector('button')
const weatherImg = document.querySelector('.weatherImg')
const cityName = document.querySelector('.cityName')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temp')
const humid = document.querySelector('.humidity')

const API_LINK = 'https://api.openweathermap.org/data/2.5/weather?q='
const API_KEY = '&appid=5b61511832775aa861c9d464a8fef32f'
const API_UNITS = '&units=metric'

const getWeather = () => {
	const city = input.value || 'poznań'
	const URL = API_LINK + city + API_KEY + API_UNITS

	axios.get(URL).then(res => {
		// const weat = res.data.main.weather
		const hum = res.data.main.humidity
		const temp = res.data.main.temp

        temperature.textContent = Math.floor(temp) + '°C'
        cityName.textContent = res.data.name
	})
}

getWeather()
