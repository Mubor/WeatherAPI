let fill = (id, text) => document.getElementById(id).innerHTML = text;

let output = data => {
    let region = `${data.location.country}, ${data.location.region}, ${data.location.name}`;
    let img = `<img src="https:${data.current.condition.icon}" alt="cloud">`; 
    let windSpeed = `${data.current.wind_kph} kph`;  
    let humidity = `${data.current.humidity}%`;

    fill("geoinfo", region);
    fill("date", data.location.localtime);
    fill("temp", data.current.temp_c);
    fill("cloud-img", img);
    fill("cloudiness", data.current.condition.text);
    fill("feels", data.current.feelslike_c);
    fill("wind", windSpeed);
    fill("pressure", data.current.pressure_mb);
    fill("humidity", humidity);
}




let promise = fetch("http://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no");
debugger;
promise.then(response => response.json())
    .then(data => output(data));




