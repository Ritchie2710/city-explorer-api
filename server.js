const express = require("express");

const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors());

const data = require("./data/weather.json");

app.get("/weather", (request, response) => {
  const weather = response.json("weather!");
});

function findweatherByName(lat, lon) {
  return data.filter(
    (weather) => (weather.lat == lat && weather.lon == lon) || lat,
    lon
  );
}

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
