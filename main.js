const searchForm = document.getElementById("search-form");
searchForm.addEventListener("submit", start);

async function start(e) {
	e.preventDefault();
	await googleNews();
	await timeZone();
	await weather();

	document.getElementById("results").style.display = "block";
}

async function googleNews() {
	const cityInput = document.getElementById("cities").value;
	const newsKey = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "de4299dbc8mshebf85f46aa18f61p113476jsne430c829d59e",
			"X-RapidAPI-Host": "google-news1.p.rapidapi.com",
		},
	};
	const newsResponse = await fetch(
		`https://google-news1.p.rapidapi.com/geolocation?geo=$${cityInput}&country=US&lang=en&limit=15`,
		newsKey
	);
	const newsData = await newsResponse.json();
	console.log(newsData);
	document.getElementById("info").innerHTML = "<h2>Current News - Top 15</h2>";
	newsData.articles.forEach((article) => {
		document.getElementById("info").innerHTML += `
        <h3>${article.title.link(article.link)}</h3>
        `;
	});
}

async function timeZone() {
	const dropDown = document.getElementById("countries").value;
	const cityInput = document.getElementById("cities").value;
	const timeKey = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "de4299dbc8mshebf85f46aa18f61p113476jsne430c829d59e",
			"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
		},
	};
	const timeResponse = await fetch(
		`https://weatherapi-com.p.rapidapi.com/timezone.json?q=${cityInput}%20${dropDown}`,
		timeKey
	);
	const timeData = await timeResponse.json();

	document.getElementsByClassName("location-time")[0].innerHTML =
		renderTimeZone(timeData);
}

function renderTimeZone(currentTime) {
	return `
            <h1>${
							"Local Date/Time" +
							"<br>" +
							currentTime.location.name +
							", " +
							currentTime.location.country +
							"<br>" +
							currentTime.location.localtime
						}<h1>
        `;
}

async function weather() {
	const dropDown = document.getElementById("countries").value;
	const cityInput = document.getElementById("cities").value;
	const weatherKey = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "de4299dbc8mshebf85f46aa18f61p113476jsne430c829d59e",
			"X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
		},
	};

	const weatherResponse = await fetch(
		`https://weatherapi-com.p.rapidapi.com/current.json?q=${cityInput}%3A${dropDown}`,
		weatherKey
	);
	const weatherData = await weatherResponse.json();

	document.getElementsByClassName("location-weather")[0].innerHTML =
		renderWeather(weatherData);
}

function renderWeather(currentWeather) {
	return `
        <h1>${
					"Current Temperature" +
					"<br>" +
					"Celsius: " +
					currentWeather.current.temp_c +
					"<br>" +
					"Fahrenheit: " +
					currentWeather.current.temp_f
				}</h1>

    `;
}
