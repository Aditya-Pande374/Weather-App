const apikey = "ae12d3c13ecc8ae0faca5931b6d8732c";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents page from refreshing on submit.
    const cityValue = cityInputEl.value; // Fix typo: change 'ariaValueMax' to 'value'
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const details = [
            `Feels like ${Math.round(data.main.feels_like)}`,
            `Humidity ${data.main.humidity}%`,
            `Wind speed ${data.wind.speed} m/s`
        ];

        weatherDataEl.querySelector("#weather-icon").src = `http://openweathermap.org/img/wn/${icon}.png`;
        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;
        weatherDataEl.querySelector(".description").textContent = description;
        weatherDataEl.querySelector(".details").innerHTML = details.map((detail) => `<div>${detail}</div>`).join("");
    } catch (error) {
        console.error(error);
    }
}



/*
const apikey="ae12d3c13ecc8ae0faca5931b6d8732c";

const weatherDataEl=document.getElementById("weather-data");

const cityInputEl=document.getElementById("city-input");

const formEl=document.querySelector("form");

formEl.addEventListener("submit",(event)=>{
    event.preventDefault(); // prevents page from refreshing on submit.

    const cityValue = cityInputEl.ariaValueMax;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);

        if(!response.ok){
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const temperature = Math.round(data.main.temp);
        const description =  data.weather[0].description;
        const icon = data.weather[0].icon;

        const details=[
            `Feels like ${Math.round(data.main.feels_like)}`,
            `Humidity ${data.main.humidity}%`,
            `Wind speed ${data.wind.speed} m/s`,
        
    ]

    weatherDataEl.querySelector(".icon").innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;

    weatherDataEl.querySelector(".temperature")
        .textContent=`${temperature}°C`;

    weatherDataEl.querySelector(".description").textContent=description;

    weatherDataEl.querySelector(".details").innerHTML=details.map((detail) => `<div>${detail}</div>`).join("");

    }
    catch (error){
        
    }
}
*/