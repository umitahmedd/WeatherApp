import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import Weather from './Weather';
import Loading from './Loading';
import store from '../store';
import "../style/Global.css";

const App = () => {
  const conditionRef = useSelector(state => state.condition);
  const condition = conditionRef.toLowerCase();
  console.log(condition + ": condition");

  let weatherClass = " ";

  if (condition.includes("light rain")) {
    weatherClass = "lightRain";
  } else if (condition.includes("rain")) {
    weatherClass = "rainy";
  } else if (condition.includes("cloudy")) {
    weatherClass = "cloudy";
  } else if (condition.includes("sunny")) {
    weatherClass = "sunny";
  } else{
    weatherClass = "bgNon";
  }

  return (
    <div className={`globalDiv ${weatherClass}`} id='globalDiv'>
      <Loading />
      <Weather />
    </div>
  );
};
const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;
