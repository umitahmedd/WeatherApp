import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const WeatherHours = () => {

    const dataWeaterToday= useSelector(state=> state.dataOneDay);
    let hours = [];

    if (dataWeaterToday.forecast 
        && dataWeaterToday.forecast.forecastday 
        && dataWeaterToday.forecast.forecastday[0]
        && dataWeaterToday.forecast.forecastday[0].hour) {
            hours = dataWeaterToday.forecast.forecastday[0].hour;
            console.log(hours)
    }
    const convertTime=(timestamp)=>{
        const date = new Date(timestamp * 1000);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        return formattedTime;
    }

  return (
    <div className='WeatherHours' >
        <div className='WeatherHoursBox'>
            {
                hours.map(hour => (
                    <div key={hour.time_epoch} className='WeatherHour'>
                        <div className='WeatherHoursHour'><p>{convertTime(hour.time_epoch)}</p></div>
                        <div className='WeatherHoursIcon'>
                        <div><img src={hour.condition.icon} alt="" /></div>
                        <div className='WeatherHourCahngeOfRain'><p> %{hour.chance_of_rain}</p></div></div>
                        <div className='WeatherHoursTemp'><p>{Math.round(hour.temp_c)}&deg;</p></div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default WeatherHours
