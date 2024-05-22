import sunny from "../assets/images/sunny.png";
import cloudy from "../assets/images/cloudy.png";
import rainy from "../assets/images/rainy.png";
import snowy from "../assets/images/snowy.png";
import loadingGif from "../assets/images/loading.gif";
import { useState, useEffect } from "react";

function WeatherApp() {
  const [location, setLocation] = useState("");
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const api_key = import.meta.env.VITE_API_KEY;

  const weatherImages = {
    Clear: sunny,
    Dust: sunny,
    Clouds: cloudy,
    Rain: rainy,
    Thunderstorm: rainy,
    Drizzle: rainy,
    Snow: snowy,
    Haze: cloudy,
    Mist: cloudy,
  };

  const weatherImage = data.weatherType
    ? weatherImages[data.weatherType]
    : null;

  const backgroundImages = {
    Clear: "linear-gradient(to right, #f3b07c, #fcd283)",
    Clouds: "linear-gradient(to right, #57d6d4, #71eece)",
    Rain: "linear-gradient(to right, #5bc8fb, #88eaff)",
    Drizzle: "linear-gradient(to right, #5bc8fb, #88eaff)",
    Thunderstorm: "linear-gradient(to right, #5bc8fb, #88eaff)",
    Snow: "linear-gradient(to right, #aff2ff, #fff)",
    Haze: "linear-gradient(to right, #57d6d4, #71eece)",
  };

  const backgroundImage = data.weatherType
    ? backgroundImages[data.weatherType]
    : "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)";
  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      search(location);
    }
  };

  const showDate = () => {
    const today = new Date();
    const options = {
      weekday: "short",
      month: "short",
      day: "numeric",
    };
    return today.toLocaleDateString("en-US", options);
  };

  const search = async (city) => {
    if (city !== "") {
      city = city.trim();
      setLoading(true);
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
      const response = await fetch(url);
      const result = await response.json();
      if (result.cod === "404") {
        setData({ notfound: true });
      } else {
        const {
          name: cityName,
          weather: [{ main: weatherType }],
          main: { temp, humidity },
          wind: { speed: windSpeed },
        } = result;
        setData({ cityName, weatherType, temp, humidity, windSpeed });
        setLocation("");
      }
      setLoading(false);
    }
  };

  const searchByCoords = async () => {
    setLoading(true);
    const position = await getUserLocation();
    const { latitude, longitude } = position.coords;
    if (latitude && longitude) {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`;
      const response = await fetch(url);
      const result = await response.json();
      if (result.cod === "404") {
        setData({ notfound: true });
      } else {
        const {
          name: cityName,
          weather: [{ main: weatherType }],
          main: { temp, humidity },
          wind: { speed: windSpeed },
        } = result;
        setData({ cityName, weatherType, temp, humidity, windSpeed });
      }
      setLoading(false);
    }
  };

  function getUserLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          console.log("Error getting location: ", error);
          reject(error);
        }
      );
    });
  }
  useEffect(() => {
    search("Tehran");
  }, []);

  return (
    <div className="container" style={{ backgroundImage }}>
      <div
        className="weather-app"
        style={{
          backgroundImage: backgroundImage
            ? backgroundImage.replace("to right", "to top")
            : null,
        }}
      >
        <div className="search">
          <div className="search-top">
            <div className="flex">
              <i className="fa-solid fa-location-dot"></i>
              <div className="location">
                {loading
                  ? "Loading..."
                  : data.cityName
                  ? data.cityName
                  : "Location..."}
              </div>
            </div>
            <div
              className="flex"
              style={{ cursor: "pointer" }}
              onClick={searchByCoords}
            >
              <i className="fa-solid fa-map-pin "></i>
              <p>My location</p>
            </div>
          </div>
          <div className="search-bar">
            <input
              value={location}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              type="text"
              placeholder="Enter Location ..."
            />
            <i
              className="fa-solid fa-magnifying-glass"
              onClick={() => search(location)}
            ></i>
          </div>
        </div>
        {!data.notfound ? (
          loading ? (
            <div>
              <img className="loading" src={loadingGif} alt="Loading..." />
            </div>
          ) : (
            <>
              <div className="weather">
                <img src={weatherImage} alt="sunny" />
                <div className="weather-type">{data.weatherType}</div>
                <div className="temp">{`${Math.round(data.temp)}°`}</div>
              </div>
              <div className="weather-date">
                <p>{showDate()}</p>
              </div>
              <div className="weather-data">
                <div className="humidity">
                  <div className="data-name">Humidity</div>
                  <i className="fa-solid fa-droplet"></i>
                  <div className="data">{`${data.humidity}%`}</div>
                </div>
                <div className="wind">
                  <div className="data-name">Wind</div>
                  <i className="fa-solid fa-wind"></i>
                  <div className="data">{`${Math.round(
                    data.windSpeed
                  )} km/h`}</div>
                </div>
              </div>
            </>
          )
        ) : (
          <div className="not-found">City Not Found 🤔</div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
