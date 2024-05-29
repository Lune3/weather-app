const weather = (function () {

    async function getWeather(url){
        const response = await fetch(`${url}`,{mode: 'cors'});
        const countryWeather = await response.json();
        console.log(countryWeather);
    }
    return {getWeather};
})();

function currentWeather(country){
    let url = `https://api.weatherapi.com/v1/current.json?key=7c1111326cb1491784f125003242905&q=`;
    url = url+`${country}`;
    weather.getWeather(url);
}


export{currentWeather};