import {createP, createH1,createimg,createH2, createDiv} from './create.js'

function extractData(currentWeather){
    const currTemp = currentWeather.temp_c;
    const feelsLike = currentWeather.feelslike_c;
    const icon = currentWeather.condition.icon;
    const text = currentWeather.condition.text;
    const humidity = currentWeather.humidity;
    const uv = currentWeather.uv;
    const wind = currentWeather.wind_kph;
    
    setTemp(currTemp,feelsLike);
    setIcon(icon,text);   
    setExtraParameter(humidity,uv,wind);  
}
const currentWeatherCard = document.querySelector(".currentWeather");

function setTemp(currTemp,feelsLike){
    const div = createDiv("tempDiv");
    const temp = createH1(currTemp,currTemp);
    const pFeels = createP(`feels like ${feelsLike}`,"feels");
    div.append(temp,pFeels);
    currentWeatherCard.append(div);
}

function setIcon(icon,text){
    const div = createDiv("iconDiv");
    const img = createimg(icon);
    const p = createP(text);
    div.append(img,p);
    currentWeatherCard.append(div);
}

function setExtraParameter(humidity,uv,wind){
    const div = createDiv("parameter");
    div.append(createP(`Humidity ${humidity}`),createP(`UV index ${uv}`),createP(`Wind speed ${wind} kph`));
    currentWeatherCard.append(div);
}


export {extractData}