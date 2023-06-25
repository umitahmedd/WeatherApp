import React from 'react'
import { useSelector } from 'react-redux'
import "../style/TodayDetails.css"

const TodayDetails = () => {
    
    const dataWeatherToday = useSelector(state => state.dataOneDay);
    let todayDetails=[]
    let feelslike=""

    if (dataWeatherToday.forecast && dataWeatherToday.forecast.forecastday) {todayDetails = dataWeatherToday.forecast.forecastday;}
    if (dataWeatherToday.current && dataWeatherToday.current.feelslike_c) {feelslike = dataWeatherToday.current.feelslike_c;}

  return (
    <div className='TodayDetailsGlobal'>
        {
            todayDetails.map((day)=>(
            <div className='TodayDetails' key={day.date_epoch}>
                <div>
                    <div className='TodayDetail TodayDetailsSunRise'>
                        <div className='TodayDetailsTitle'><p>SUNRISE</p></div>
                        <div className='TodayDetailsValue'><p>{day.astro.sunrise}</p></div>
                    </div>
                    <div className='TodayDetail TodayDetailsSunSet'>
                        <div className='TodayDetailsTitle'><p>SUNSET</p></div>
                        <div className='TodayDetailsValue'><p>{day.astro.sunset}</p></div>
                    </div>
                </div>
                <div>
                    <div className='TodayDetail TodayDetailsFeelsLike'>
                        <div className='TodayDetailsTitle'><p>FEELS LIKE</p></div>
                        <div className='TodayDetailsValue'><p>{Math.round(feelslike)}&deg;</p></div>
                    </div>
                    <div className='TodayDetail TodayDetailsHumidity'>
                        <div className='TodayDetailsTitle'><p>HUMIDITY</p></div>
                        <div className='TodayDetailsValue'><p>{Math.round(day.day.avghumidity)}</p></div>
                    </div>
                </div>
            </div>
            ))
        }
    </div>
  )
}

export default TodayDetails
