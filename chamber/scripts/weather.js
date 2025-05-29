const currentTemp = document.querySelector('#current-temp');
const highTemp = document.querySelector('#hGrades');
const lowTemp = document.querySelector('#lGrades');

const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const humidity = document.querySelector('#humidity');
const sunriseDate = document.querySelector('#sunrise');
const sunsetDate = document.querySelector('#sunset');

const todayGrades = document.querySelector('#todayGrades');
const tomorrow = document.querySelector('#tomorrow');
const afterTomorrow = document.querySelector('#afterTomorrow');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-12.03&lon=-77.04&units=imperial&appid=d0271fe8ae8e6abe5134eb6cd30b5084';
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=-12.03&lon=-77.04&units=imperial&appid=d0271fe8ae8e6abe5134eb6cd30b5084';

async function apiFetch() {
    try {
        let response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayCurrentResults(data);
        } else {
            throw Error(await response.text());
        }

        response = await fetch(urlForecast);
        if (response.ok) {
            const forecastData = await response.json();
            console.log(forecastData);
            displayForecastResults(forecastData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayCurrentResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg; F`;
    highTemp.innerHTML = `${data.main.temp_max}&deg; F`;
    lowTemp.innerHTML = `${data.main.temp_min}&deg; F`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    captionDesc.textContent = `${desc}`;

    humidity.innerHTML = `${data.main.humidity} %`

    sunriseDate.innerHTML = new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-US');
    sunsetDate.innerHTML = new Date(data.sys.sunset * 1000).toLocaleTimeString('en-US');

    ////////////// FORECAST ////////////

    todayGrades.innerHTML = `Today: ${data.main.temp}&deg; F`;

}

function displayForecastResults(data) {
    const Today = new Date();
    const tomo = new Date(Today.getFullYear(), Today.getMonth(), Today.getDate() + 1);
    const tomoDayWeek = tomo.getDay();
    const afterTomo = new Date(Today.getFullYear(), Today.getMonth(), Today.getDate() + 2);
    const afterTomoDayWeek = afterTomo.getDay();

    let tomoName;
    switch (tomoDayWeek) {
        case 0:
            tomoName = "Sunday";
            break;
        case 1:
            tomoName = "Monday";
            break;
        case 2:
            tomoName = "Tuesday";
            break;
        case 3:
            tomoName = "Wednesday";
            break;
        case 4:
            tomoName = "Thursday";
            break;
        case 5:
            tomoName = "Friday";
            break;
        case 6:
            tomoName = "Saturday";
            break;
    }

    let afterTomoName;
    switch (afterTomoDayWeek) {
        case 0:
            afterTomoName = "Sunday";
            break;
        case 1:
            afterTomoName = "Monday";
            break;
        case 2:
            afterTomoName = "Tuesday";
            break;
        case 3:
            afterTomoName = "Wednesday";
            break;
        case 4:
            afterTomoName = "Thursday";
            break;
        case 5:
            afterTomoName = "Friday";
            break;
        case 6:
            afterTomoName = "Saturday";
            break;
    }

    tomorrow.innerHTML = `${tomoName}: ${data.list[8].main.temp}&deg; F`;
    afterTomorrow.innerHTML = `${afterTomoName}: ${data.list[16].main.temp}&deg; F`;

}
