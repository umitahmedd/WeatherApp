import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../style/WeatherFor7Days.css"


const WeatherFor7Days = () => {

  const dispatch = useDispatch();
  const activeCity = useSelector(state => state.activeCity);
  const dataWeaterFor7Days= useSelector(state=> state.dataSevenDays);
  let days = [];

  if (dataWeaterFor7Days.forecast 
      && dataWeaterFor7Days.forecast.forecastday) {
      days = dataWeaterFor7Days.forecast.forecastday;
      console.log(days)
  }

  useEffect(() => {
      fetch(`http://api.weatherapi.com/v1/forecast.json?key=5aaa063702f3428780b74538231706&q=${activeCity}&days=10`)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          dispatch({ type: 'GET_WEATHER_FOR_SEVEN_DAYS', veriler: data })
        })
        .catch(error => {
          console.error('Bir hata oluştu:', error);
        });
  }, [activeCity, dispatch]);


  const convertDate = (dateString) => {
      const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
      const date = new Date(dateString);
      const dayOfWeek = date.getDay();
      const day = date.getDate();
      const year = date.getFullYear();
      const month = date.getMonth();
      const formattedDate = `${dayOfWeek}`;
      return `${daysOfWeek[formattedDate]}`;
  }


    

  return (
    <div className='WeatherFor7DaysGlobal'>
        <div className='WeatherFor7Days'>
            <div className='WeatherFor7DaysTitle'><p>10-DAY FORECAST</p></div>
            <div className='WeatherFor7DaysBoxs'>
            {
                days.map(day => (
                    <div key={day.date_epoch} className='WeatherFor7DaysDay'>
                        <div className='WeatherFor7DaysDayD'><p>{convertDate(day.date)}</p> <span className='WeatherFor7DaysDayDate'>{day.date}</span></div>
                        
                        <div className='WeatherFor7DaysDayIcon'>
                            <div><img src={day.day.condition.icon} alt="" /></div>
                            <div><p> %{day.day.daily_chance_of_rain}</p></div>
                        </div>

                        <div className='WeatherFor7DaysDayTemps'>
                            <div className='WeatherFor7DaysDayMinTemp'><p><span className='minMAxText'>min - </span>{Math.round(day.day.mintemp_c)}&deg;</p></div>
                            <div className='WeatherFor7DaysDayMaxTemp'><p><span className='minMAxText'>max - </span>{Math.round(day.day.maxtemp_c)}&deg;</p></div>
                        </div>
                    </div>
                    
                ))
            }
                
            </div>
        </div>
      
    </div>
  )
}

export default WeatherFor7Days
