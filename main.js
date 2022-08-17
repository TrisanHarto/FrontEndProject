
async function googleNews() {
    const newsKey = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'de4299dbc8mshebf85f46aa18f61p113476jsne430c829d59e',
            'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
        }
    };
	const newsResponse = await fetch(`https://google-news1.p.rapidapi.com/top-headlines?country=US&lang=en&limit=10`, newsKey)
	const newsData = await newsResponse.json();
	console.log(newsData)
}

googleNews()

async function timeZone() {
    const timeKey = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'de4299dbc8mshebf85f46aa18f61p113476jsne430c829d59e',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
	const timeResponse = await fetch("https://weatherapi-com.p.rapidapi.com/timezone.json?q=London%20GB", timeKey)
	const timeData = await timeResponse.json();
	console.log(timeData)
}

timeZone()



async function weather() {
	const weatherKey = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': 'de4299dbc8mshebf85f46aa18f61p113476jsne430c829d59e',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};

	const weatherResponse = await fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=London%3AGB", weatherKey)
	const weatherData = await weatherResponse.json();
	console.log(weatherData)
}

weather()


