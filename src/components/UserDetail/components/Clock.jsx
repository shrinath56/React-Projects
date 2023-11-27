import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Clock.css";

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isClockPaused, setIsClockPaused] = useState(false);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "http://worldtimeapi.org/api/timezone"
        );
        setCountries(response.data);
        setSelectedCountry(response.data[0]);
      } catch (error) {
        console.error("Error fetching countries: ", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    let timerId;

    const fetchCurrentTime = async () => {
      try {
        const response = await axios.get(
          `http://worldtimeapi.org/api/timezone/${selectedCountry}`
        );
        setCurrentTime(new Date(response.data.utc_datetime));
      } catch (error) {
        console.error("Error fetching current time: ", error);
      }
    };

    const startClock = () => {
      timerId = setInterval(() => {
        setCurrentTime((prevTime) => new Date(prevTime.getTime() + 1000));
      }, 1000);
    };

    fetchCurrentTime();

    if (!isClockPaused) {
      startClock();
    }

    return () => {
      clearInterval(timerId);
    };
  }, [isClockPaused, selectedCountry]);

  const toggleClock = () => {
    setIsClockPaused((prevIsClockPaused) => !prevIsClockPaused);
  };

  const handleCountryChange = (event) => {
    const selectedCountryId = event.target.value;
    setSelectedCountry(selectedCountryId);
  };

  return (
    <>
      <div className='clock-content'>
        <label className='country-dropdown'>Select Country: </label>
        <select
          className='country-dropdown'
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
        <div className='timer-container'>
          <p className='timer'>{currentTime.toLocaleTimeString()}</p>
        </div>
        <button className='start-pause-button' onClick={toggleClock}>
          {isClockPaused ? "Start" : "Pause"}
        </button>
      </div>
    </>
  );
};

export default Clock;
