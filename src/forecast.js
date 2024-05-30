import {format} from 'date-fns';
import { createDiv,createH1,createH2,createP,createimg } from './create';

const weatherHourCard = document.querySelector(".hourForecast");

function extractDataForecast(forecast){
    const weatherHourForecast = forecast.forecastday;
    console.log(weatherHourForecast);
    displayHourForecast(weatherHourForecast);
}

function displayHourForecast(weatherHourForecast){
    const currentHour = parseInt(format(new Date(),"h")) + 12;
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
    div.append(createP(currHour),createimg(icon),createP(temp),createP(rainChance));
    weatherHourCard.append(div);
}

export {extractDataForecast};