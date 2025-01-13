const input= document.querySelector("input");
const btn=document.getElementById("btn");
const icon=document.querySelector(".icon");
const weather=document.querySelector(".weather");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description");
const speed=document.querySelector(".speed");


btn.addEventListener("click",()=>{
    let city=input.value;
    getWeather(city);
})
function getWeather(city){
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'2f2c3aa2bdc5c4559ffdf92e28688056'}`)
    .then(response=>response.json())
    .then(data=>{
        console.log(data);

        const iconCode=data.weather[0].icon;
        icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`

        const weatherCity=data.name;
        const weatherCountry=data.sys.country;
        weather.innerHTML=`${weatherCity},${weatherCountry}`;


        let weatherTemp=data.main.temp;
        weatherTemp=weatherTemp-273;
        const temp=weatherTemp.toFixed(2);
        temperature.innerHTML=`${temp}°C`;

        const weatherDesc=data.weather[0].description;
        description.innerHTML=weatherDesc;

        const weatherSpeed=data.wind.speed;
        speed.innerHTML=`${weatherSpeed} m/s`;
        
    });
}







// 2f2c3aa2bdc5c4559ffdf92e28688056
// const apikey='2f2c3aa2bdc5c4559ffdf92e28688056';
// Built in Api request by city name 
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


