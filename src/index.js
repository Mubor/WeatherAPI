import output from './lib/output';
debugger;
const promise = fetch('https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no');
promise.then((response) => response.json()).then((data) => output(data.location, data.current));
