const API_key = `71253ad3914ede8963e352f7239f8512`
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather")

const getWeather = async (city) => {
    weather.innerHTML = `<h2>Loading..<h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}
const showWeather = (data)=>{
    if (data.cod== "404"){
        weather.innerHTML = `<h2>City not found<h2>`
        return;
    }
    weather.innerHTML = `
        <div>
            
            <img src="${data.weather[0].main.icon}" alt=""></img>
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    `
}

form.addEventListener(
    "submit",
    function(event){
        getWeather(search.value)
        event.preventDefault();
    }
)