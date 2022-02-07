// eslint-disable-next-line no-return-assign
const fill = (id, text) => document.getElementById(id).innerHTML = text;

const output = (data) => {
  const region = `${data.location.country}, ${data.location.region}, ${data.location.name}`;
  const img = `<img src="https:${data.current.condition.icon}" alt="cloud">`;
  const windSpeed = `${data.current.wind_kph} kph`;
  const humidity = `${data.current.humidity}%`;

  fill('geoinfo', region);
  fill('date', data.location.localtime);
  fill('temp', data.current.temp_c);
  fill('cloud-img', img);
  fill('cloudiness', data.current.condition.text);
  fill('feels', data.current.feelslike_c);
  fill('wind', windSpeed);
  fill('pressure', data.current.pressure_mb);
  fill('humidity', humidity);
};

export default output;
