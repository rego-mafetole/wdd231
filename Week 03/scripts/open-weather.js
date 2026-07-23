// SELECT HTML ELEMENTS IN THE DOCUMENT
const myTown = document.querySelector('#town')
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

// CREATE REQUIRED VARIABLES FOR THE URL
const myKey = "39f9082eab16f45ab47967b1ffdc201e"
const myLat = "49.75017104071407"
const myLong = "6.636585097421277"

// CONSTRUCT A FULL PATH USING TEMPLATE LITERALS
const myURL = `//api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

// TRY TO GRAB THE CURRENT WEATHER DATA

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // testing only
            displayResults(data); // uncomment when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// DISPLAY THE JSON DATA ONTO MY WEB PAGE
function displayResults(data) {
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description
    myTemperature.innerHTML = `${data.main.temp}&deg;F`
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC', iconsrc)
    myGraphic.setAttribute('alt', data.weather[0].description)
}

// START THE PROCESS
apiFetch();