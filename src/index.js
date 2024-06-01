import {currentWeather} from "./weatherAPI";
import './styleSheet.css';

currentWeather("New Delhi");

const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click",() => {
    currentWeather(input.value);
    input.value = "";
});

