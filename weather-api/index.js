// Weather API using package axios and open source weather url LINK
//https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto

const http = require("http");
const { getWeather } = require("./weather");
const { formatDate } = require("./dateFormatter");

http
  .createServer(async (req, res) => {
    const { sunrise, sunset } = await getWeather();
    const sunriseDate = formatDate(sunrise);
    const sunsetDate = formatDate(sunset);

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      `Today's Sunrise will be at ${sunriseDate} and sunset will be at ${sunsetDate}`
    );
  })
  .listen(3777);
console.log("App is running");
