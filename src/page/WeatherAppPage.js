import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import './App.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

function App() {
  const API_KEY = process.env.REACT_APP_WEATHER_KEY;
  const [weather, setWeather] = useState(null);
  const cities = ["Australia", "Germany", "Bangkok", "Prague"];
  const [city, setCity] = useState(' ');
  const [loading, setLoading] = useState(false);
  const [apiError, setAPIError] = useState("");

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
      setCity('Here');
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon)  => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch(err) {
      setAPIError(err.message);
      setLoading(false);
    }
  }
  
  const getWeatherByCity = async() => {
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
      setLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch(err) {
      setAPIError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if(city == ' ') {
      setLoading(true);
      getCurrentLocation();
    } else if(city == 'Here'){
      setLoading(true);
      getCurrentLocation();
    } else {
      setLoading(true);
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div className="App">
      <div className="container">
        {loading ? (<ClipLoader size={100} loading={loading}/>) : !apiError ? (
          <div>
            <ClipLoader size={50} loading={loading}/>
            <WeatherBox weather={weather}/>
            <WeatherButton cities={cities} setCity={setCity} getCurrentLocation={getCurrentLocation} selectCity={city}/>
          </div>
        ) : (
          apiError
        )}
      </div>
    </div>
  );
}

export default App;
