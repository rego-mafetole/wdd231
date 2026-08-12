const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myAlertBanner = document.querySelector('#alert-banner');

const myKey = "39f9082eab16f45ab47967b1ffdc201e"
const myLat = "-25.758279"
const myLong = "28.199273"

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); 
            displayResults(data); 
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {

    const temp = `${Math.round(data.main.temp)}&deg;C`;
    const condition = data.weather[0].main;

    if (myTown) {
        myTown.innerHTML = data.name;
    }

    if (myDescription) {
        myDescription.innerHTML = data.weather[0].description;
    }

    if (myTemperature) {
        myTemperature.innerHTML = temp;
    }

    let studyMessage = "";
    if (condition === "Rain") {
        studyMessage = "Perfect indoor study weather.";
    }
    else if (condition === "clear") {
        studyMessage = "Bright day! Grab your laptop near a window.";
    }
    else {
        studyMessage = "Great day to focus. Log some study hours!";
    }

    if (myAlertBanner) {
        myAlertBanner.innerHTML = `It's currently ${temp} and ${condition} in your area. ${studyMessage}`;
    }
}

// START THE PROCESS
apiFetch();