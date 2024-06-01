import { extractData} from "./weatherCard";
import { extractDataForecast } from "./forecast";

const weather = (function () { 

    let country = "";

    async function getWeather(url,countrySelected){
        try{
            const response = await fetch(`${url}`,{mode: 'cors'});
            const countryWeather = await response.json();
            const currentWeather = countryWeather.current;
            const forecast = countryWeather.forecast;
            console.log(countryWeather);
            let inputCountry = `${countryWeather.location.name}, ${countryWeather.location.country}`;
            extractData(currentWeather,inputCountry);
            extractDataForecast(forecast);
            country = countrySelected;
        }
        catch(error){
            alert("Wrong Country");
            currentWeather(country);
        }
    }

    function giveCountry(){
        return country;
    }

    return {getWeather,giveCountry};
})();

function getCountry(){
    return weather.giveCountry();
}

function currentWeather(country){
    let url = `https://api.weatherapi.com/v1/forecast.json?key=e6cd629d32c24ad8941174840240106&q=${country}&days=4`;
    weather.getWeather(url,country);
}

export{currentWeather,getCountry};