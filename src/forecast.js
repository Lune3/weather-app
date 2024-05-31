import {format,getHours,add} from 'date-fns';
import { createDiv,createH1,createH2,createP,createimg } from './create';
import { currentWeather } from './weatherAPI';

const weatherHourCard = document.querySelector(".hourForecast");
const dayForecast = document.querySelector(".daysForecast");

function extractDataForecast(forecast){
    const weatherHourForecast = forecast.forecastday;
    displayHourForecast(weatherHourForecast);
    displayDayForecast(weatherHourForecast);
}

function displayHourForecast(weatherHourForecast){
    let currentHour = parseInt(format(new Date(),'H'));
    for(let i = 0;i < 6;i++){
        if(currentHour + i > 23){
            buildCard(weatherHourForecast,currentHour + i - 24,1);
        }
        else{
            buildCard(weatherHourForecast,currentHour + i,0);
        }

    }
}

function buildCard(weatherHourForecast,currHour,day){
    const hourForecast = weatherHourForecast[day].hour[currHour];
    const icon = hourForecast.condition.icon;
    const temp = hourForecast.temp_c;
    const rainChance = hourForecast.chance_of_rain;
    
    const div = createDiv("weatherCard");
    div.append(createP(`${currHour}:00`),createimg(icon),createP(temp),createP(rainChance));
    weatherHourCard.append(div);
}

function displayDayForecast(forecast){
    console.log(forecast);
    for(let i = 1;i < 4;i++){
        let day = format(add(new Date(),{days:i}),'EEEE');
        // buildDayCard(day,i,forecast);
    }
}

function buildDayCard(day,date,forecast){
    const icon = forecast[date];
    const maxTemp = forecast[date].day.maxtemp_c;
    const minTemp = forecast[date].day.mintemp_c;   
    const div = createDiv(`dayForecastCard`);
    div.append(createP(`${day}`),createimg(icon),createP(`${maxTemp}/${minTemp}`));
    div.append(dayForecast);
}


export {extractDataForecast};