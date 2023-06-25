import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../style/WeatherToday.css"


const WeatherToday = () => {
  const dispatch = useDispatch();
  const dataWeatherToday = useSelector(state => state.dataOneDay);
  const activeCity = useSelector(state => state.activeCity);
  
  let condition = '';
  let temperature = '';
  let City=""

  if (dataWeatherToday.current && dataWeatherToday.current.condition) {condition = dataWeatherToday.current.condition.text;}
  if (dataWeatherToday.current) {temperature =  Math.round(dataWeatherToday.current.temp_c);}
  if (dataWeatherToday.location && dataWeatherToday.location.name ) {City= dataWeatherToday.location.name}

  useEffect(() => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=5aaa063702f3428780b74538231706&q=${activeCity}&days=1`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch({ type: 'GET_WEATHER_FOR_ONE_DAY', veriler: data });
        dispatch({ type: 'POST_BG_NAME', veriler: data.current.condition.text });
      })
      .catch(error => {
        console.error('Bir hata oluştu:', error);
      });
  }, [activeCity, dispatch]);

  return (
    <div className='WeatherTodayGlobal'>
        <div className='WeatherToday'>
            <div className='WeatherTodayCityName'><p>{City}</p></div>
            <div className='WeatherTodayCityTemp'><p>{temperature} <span className='deg'>&deg;</span></p></div>
            <div className='WeatherTodayCityCondition'><p>{condition}</p></div>
        </div>
    </div>
  );
};

export default WeatherToday;
