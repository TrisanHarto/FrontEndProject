const searchForm = document.getElementById("search-form")
searchForm.addEventListener("submit", googleNews)
searchForm.addEventListener("submit", timeZone)
searchForm.addEventListener("submit", weather)


async function googleNews(e) {
    e.preventDefault()
    const dropDown = document.getElementById("countries").value 
    const cityInput = document.getElementById("cities").value
    const newsKey = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'de4299dbc8mshebf85f46aa18f61p113476jsne430c829d59e',
            'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
        }
    };
	const newsResponse = await fetch(`https://google-news1.p.rapidapi.com/geolocation?geo=$${cityInput}&country=${dropDown}&lang=en&limit=10`, newsKey)
	const newsData = await newsResponse.json();	
    const newsArticles = newsData.articles.map((article) => {
        return {Title: article.title, Link: article.link}
          })
    document.getElementsByClassName("info-container")[0].innerHTML =renderNews(newsArticles)
}


function renderNews(newsDataArray) {
   
    const newsArray = newsDataArray.map(function(data){
        console.log(data)
        const info = JSON.stringify(data)
        return `
        <div class="info-container">
        <div class="col h3">
        <li>${info}</li>
        </div>
          <div class="info">
        
        `
    })
    return newsArray.join("")
}


async function timeZone() {
    const dropDown = document.getElementById("countries").value 
    const cityInput = document.getElementById("cities").value
    const timeKey = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'de4299dbc8mshebf85f46aa18f61p113476jsne430c829d59e',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
	const timeResponse = await fetch(`https://weatherapi-com.p.rapidapi.com/timezone.json?q=${cityInput}%20${dropDown}`, timeKey)
	const timeData = await timeResponse.json();
    const currentTime = function timeDetail() {
        return {LocalTime: timeData.location.localtime, City: timeData.location.name, Country: timeData.location.country}
        
    }
    document.getElementsByClassName("location-time")[0].innerHTML = renderTimeZone(currentTime())
    // console.log(currentTime());
    // console.log(timeData);
    // console.log(timeData.location.localtime);
    // console.log(timeData.location.name);
	// console.log(timeData.location.country)
}

function renderTimeZone(currentTime) {
    const timeInfo = JSON.stringify(currentTime) 
    return `
        <div class="col h1">
        <li>${timeInfo}</li>
        </div>
    `
}

async function weather() {
    const dropDown = document.getElementById("countries").value 
    const cityInput = document.getElementById("cities").value
	const weatherKey = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'de4299dbc8mshebf85f46aa18f61p113476jsne430c829d59e',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};

	const weatherResponse = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${cityInput}%3A${dropDown}`, weatherKey)
	const weatherData = await weatherResponse.json();
    const currentWeather = function weatherDetail() {
        return {C: weatherData.current.temp_c, F: weatherData.current.temp_f}
        
    }
    document.getElementsByClassName("location-weather")[0].innerHTML = renderWeather(currentWeather())
	console.log(currentWeather());
    // console.log(weatherData.current.temp_c);
	// console.log(weatherData.current.temp_f);
}

function renderWeather(currentWeather) {
    const weatherInfo = JSON.stringify(currentWeather) 
    return `
        <div class="col h1">
        <li>${weatherInfo}</li>
        </div>
        
    `
}