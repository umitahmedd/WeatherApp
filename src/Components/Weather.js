import React from 'react'
import WeatherToday from "./WeatherToday"
import WeatherFor7Days from './WeatherFor7Days';
import WeatherHours from './WeatherHours';
import "../style/WeatherHours.css"
import "../style/Weather.css"
import Bottom from './Bottom';
import Search from './Search';

const Weather = () => {

  return (
    <div className='WeatherGlobal'>
      <div>
        <Search/>
        <WeatherToday/>
        <WeatherHours/>
        <Bottom/>
      </div>
    </div>
  )
}

export default Weather
