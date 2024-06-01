import {currentWeather} from "./weatherAPI";
import './styleSheet.css';

currentWeather("New Delhi");

const button = document.querySelector("button");
const input = document.querySelector("input");
const divs = document.querySelectorAll(".grid div");



button.addEventListener("click",() => {
    currentWeather(`${input.value}`);
    divs.forEach(div => {
        div.textContent = "";
    });
    input.value = "";
})

input.addEventListener("keydown",(e) =>{
    if(e.key === "Enter"){
        currentWeather(`${input.value}`);
        divs.forEach(div => {
            div.textContent = "";
        });
        input.value = "";
    }
})



