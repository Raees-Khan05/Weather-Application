 
// const apiKey = '4fca510e603afb8f14a08ba90625ad48'
// const city = "Pune"


// async function fetchWeatherData () {
//   const response =  await fetch(`https://api.openweathermap.org/data/2.5/weather?q${city}&units=metric&appid=${apiKey}`);

//   var data = await response.json()
//    console.log(data);
//   console.log(data.main.temp);
//  }

//  fetchWeatherData();



var inputBox = document.getElementById('Input_box')
var searchBtn = document.getElementById('searchBtn')
var cloudImg = document.getElementById('cloudImg')
var temperature = document.getElementById('temperature')
var description = document.getElementById('description')
// var cloudImg = document.getElementById('cloudImg')
var Humidity = document.getElementById('Humidity')
var wind_speed = document.getElementById('windSpeed')

async function checkWeather(city){
   const apiKey = '4fca510e603afb8f14a08ba90625ad48';
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
   const weatherData = await fetch(`${url}`).then(response => response.json());


   if (weatherData === "404") {
    console.log("error");
       return;
   }

//    console.log(weatherData);

 temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`;
 description.innerHTML = `${weatherData.weather[0].description}`
 Humidity.innerHTML = `${weatherData.main.humidity}%`
 wind_speed.innerHTML = `${weatherData.wind.speed}km/H`


 switch(weatherData.weather[0].main){
    case "Clouds":
        cloudImg.src = "/images/clouds.png";
        break;
        case "Clear":
            cloudImg.src = "/images/clear.png";
            break;
            case "Rain":
        cloudImg.src = "/images/rain.png";
        break;
        case "Mist":
        cloudImg.src = "/images/mist.png";
        break;
        case "Wind":
        cloudImg.src = "/images/wind.png"; 
        break;   
        case "Humidity":
        cloudImg.src = "/images/humidity.png";    
        break;
        case "Drizzle":
        cloudImg.src = "/images/drizzle.png";    
        break;
        case "Snow":
        cloudImg.src = "/images/snow.png";    
 }

//  console.log(weatherData);

}
searchBtn.addEventListener("click" , ()=>{
    checkWeather(inputBox.value)
})