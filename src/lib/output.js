// eslint-disable-next-line no-return-assign
const fill = (id, text) => document.getElementById(id).innerHTML = text;

const output = (data) => {
  const { country, region, name, localtime} = data.location;
  const { wind_kph, condition, humidity, temp_c, feelslike_c, pressure_mb} = data.current;
  const reg = `${country}, ${region}, ${name}`;
  const img = `<img src="https:${condition.icon}" alt="cloud">`;
  const windSpeed = `${wind_kph} kph`;

  fill('geoinfo', reg);
  fill('date', localtime);
  fill('temp', temp_c);
  fill('cloud-img', img);
  fill('cloudiness', condition.text);
  fill('feels', feelslike_c);
  fill('wind', windSpeed);
  fill('pressure', pressure_mb);
  fill('humidity', humidity);
};

export default output;
