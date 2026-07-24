// SELECT HTML ELEMENTS IN THE DOCUMENT
const myTown = document.querySelector('#town')
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const myForecast = document.querySelector('.forecast');
const dayCards = document.querySelectorAll('.day-card')

// CREATE REQUIRED VARIABLES FOR THE URL
const myKey = "39f9082eab16f45ab47967b1ffdc201e"
const myLat = "-25.761124"
const myLong = "28.219923"

// CONSTRUCT A FULL PATH USING TEMPLATE LITERALS
const myURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;


// TRY TO GRAB THE CURRENT WEATHER DATA

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// DISPLAY THE JSON DATA ONTO MY WEB PAGE
function displayResults(data) {
    myTown.innerHTML = data.city.name;
    myDescription.innerHTML = data.list[0].weather[0].description;
    myTemperature.innerHTML = `${data.list[0].main.temp}&deg;C`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
    myGraphic.setAttribute('SRC', iconsrc);
    myGraphic.setAttribute('alt', data.list[0].weather[0].description);

    const dailyForecasts = data.list.filter((item, index) => index % 8 === 0 && index > 0);

    dailyForecasts.forEach((day, i) => {
        if (dayCards[i]) {
        const date = new Date(day.dt * 1000);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        
            dayCards[i].querySelector('.day-name').textContent = dayName;
            dayCards[i].querySelector('.day-desc').textContent = day.weather[0].description;
            dayCards[i].querySelector('.day-temp').innerHTML = `${day.main.temp}&deg;C`;

            const iconUrl = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;
            const dayImg = dayCards[i].querySelector('.day-icon');
            dayImg.setAttribute('src', iconUrl);
            dayImg.setAttribute('alt', day.weather[0].description);
        }
    });

}

// START THE PROCESS
apiFetch();