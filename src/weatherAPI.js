import { extractData } from "./weatherCard";

const weather = (function () {

    async function getWeather(url){
        const response = await fetch(`${url}`,{mode: 'cors'});
        const countryWeather = await response.json();
        const currentWeather = countryWeather.current;
        const forecast = countryWeather.forecast;
        extractData(currentWeather);
        console.log(currentWeather);
    }
    return {getWeather};
})();

function currentWeather(country){
    let url = `https://api.weatherapi.com/v1/forecast.json?key=7c1111326cb1491784f125003242905&q=${country}&days=3`;
    weather.getWeather(url);
}


export{currentWeather};