
		let countryCode = $("#countryCode").val();
		async function getNews() {
		const newsKey = {
				method: 'GET',
        		headers: {
					'X-RapidAPI-Key': 'de4299dbc8mshebf85f46aa18f61p113476jsne430c829d59e',
            		'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
        			}
    			};
			const response = await fetch(`https://google-news1.p.rapidapi.com/top-headlines?country=${countryCode}&lang=en&limit=10`, newsKey);
			const data = await response.json();
			let news = Object.values(data.articles); // variable to return articles and their information
			console.log(news);
			const newsArticles = data.articles.map((article) => {
			return {title: article.title, link: article.link}
 			 })
			console.log(newsArticles);
			
			}
			
		getNews();


function renderNews(newsDataArray) {
    
    const newsArray = (newsDataArray).map(function(data){
        return `
        <div class="col-sm-4">
        <li>${JSON.stringify(data[0])}</li>
        </div>
        `
    })
    return newsArray.join("")}


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
	const timeZone = timeData.map(() => {
		return {name, country, localtime}
		  });
		console.log(timeZone);
}
//console.log(timeData);
	// the below returns City, Country and local time
	// console.log(timeData.location.name);
	// console.log(timeData.location.country);
	// console.log(timeData.location.localtime);
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
	//console.log(weatherData)
	// the below returns Celcius and Fahrenheit
	console.log(weatherData.current.temp_c);
	console.log(weatherData.current.temp_f);


}

weather()


