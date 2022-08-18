

async function googleNews(e) {
    e.preventDefault()
    let newsDataArray = []
    const newsKey = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'de4299dbc8mshebf85f46aa18f61p113476jsne430c829d59e',
            'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
        }
    };
	const newsResponse = await fetch(`https://google-news1.p.rapidapi.com/top-headlines?country=US&lang=en&limit=10`, newsKey)
	const newsData = await newsResponse.json();	
    newsDataArray.push(newsData.articles)
    console.log(newsDataArray)
    document.getElementsByClassName("info-container")[0].innerHTML =renderNews(newsDataArray)
}



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

const searchForm = document.getElementById("search-form")
searchForm.addEventListener("submit", googleNews)
// searchForm.addEventListener("submit", timeZone)
// searchForm.addEventListener("submit", weather)




function renderNews(newsDataArray) {
    
    const newsArray = (newsDataArray).map(function(data){
        return `
        <div class="col-sm-4">
        <li>${JSON.stringify(data[0])}</li>
        </div>
        `
    })
    return newsArray.join("")
}
