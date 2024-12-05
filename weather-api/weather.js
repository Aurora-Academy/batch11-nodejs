const axios = require("axios");

const getWeather = async () => {
  try {
    const { data } = await axios.get(
      "https://api.open-meteo.com/v1/forecast?latitude=27.70&longitude=85.32&hourly=temperature_2m&daily=sunrise,sunset&forecast_days=1&timezone=auto"
    );
    const { daily } = data;
    const { sunrise, sunset } = daily;
    return { sunrise: sunrise.toString(), sunset: sunset.toString() };
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getWeather };
