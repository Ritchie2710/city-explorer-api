const express = require("express");
const cors = require("cors");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());
const data = require("./data/weather.json");

app.get("/weather", (request, response) => {
  const lat = request.query.lat;
  const lon = request.query.lon;
  const searchQuery = request.query.searchQuery;

  const filteredCity = data.find((city) => {
    return city.city_name === searchQuery; //&& city.lat == lat && city.lon == lon;
  });
  const wrangledData = filteredCity.data.map((day) => {
    return {
      description: day.weather.description,
      Date: day.daytime,
    };
  });
  response.json(wrangledData);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
