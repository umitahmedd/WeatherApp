import React from 'react'
import TodayDetails from './TodayDetails'
import WeatherFor7Days from './WeatherFor7Days'
import "../style/Bottom.css"

const Bottom = () => {
  return (
    <div className='BottomGlobal'>
        <div className='Bottom'>
            <WeatherFor7Days/>  
            <TodayDetails/>
        </div>
    </div>
  )
}

export default Bottom
