const API_KEY = "19a2e35c04daac61fea3c256241723de";


function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)");
        const city = document.querySelector("#weather span:last-child");
        weather.innerText = `Weather: ${data.weather[0].main}`;
        temp.innerText = `Temp: ${data.main.temp}℃`;
        city.innerText = `Location: ${data.name}`;
    });
}


function onGeoError() {
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);

