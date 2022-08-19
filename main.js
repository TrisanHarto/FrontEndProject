
async function googleNews(e) {
    e.preventDefault()
    const dropDown = document.getElementById("countries").value 
    const newsKey = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'de4299dbc8mshebf85f46aa18f61p113476jsne430c829d59e',
            'X-RapidAPI-Host': 'google-news1.p.rapidapi.com'
        }
    };
	const newsResponse = await fetch(`https://google-news1.p.rapidapi.com/top-headlines?country=${dropDown}&lang=en&limit=10`, newsKey)
	const newsData = await newsResponse.json();	
<<<<<<< HEAD
	const newsArticles = newsData.articles.map((article) => {
		return {title: article.title, link: article.link}
		  })
		console.log(newsArticles);
    //document.getElementsByClassName("info-container")[0].innerHTML =renderNews(newsData.articles)
=======
    const newsArticles = newsData.articles.map((article) => {
        return {Title: article.title, Link: article.link}
          })
    document.getElementsByClassName("info-container")[0].innerHTML =renderNews(newsArticles)
>>>>>>> main
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
    const currentTime = function timeDetail() {
        return {LocalTime: timeData.location.localtime, City: timeData.location.name, Country: timeData.location.country}
        
    }
    
    console.log(currentTime());
    // console.log(timeData);
    // console.log(timeData.location.localtime);
    // console.log(timeData.location.name);
	// console.log(timeData.location.country)
}

console.log(timeZone())

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
    const currentWeather = function weatherDetail() {
        return {C: weatherData.current.temp_c, F: weatherData.current.temp_f}
        
    }
	console.log(currentWeather());
    // console.log(weatherData.current.temp_c);
	// console.log(weatherData.current.temp_f);
}

console.log(weather())

const searchForm = document.getElementById("search-form")
searchForm.addEventListener("submit", googleNews)
// searchForm.addEventListener("submit", timeZone)
// searchForm.addEventListener("submit", weather)


// function createCountryList(list) {
//     document.getElementById("countries").innerHTML = `
//     <option> </option>
//     ${Object.keys(list).map(function(countrylist) {
//         return `<option value=${countrylist}>${countrylist}</option>`
//     }).join("")}  
//   </select>
//     `
// }



function renderNews(newsDataArray) {
   
    const newsArray = newsDataArray.map(function(data){
        console.log(data)
        const info = JSON.stringify(data)
        return `
        <div class="col">
        <li>${info}</li>
        </div>
        `
    })
    return newsArray.join("")
}
