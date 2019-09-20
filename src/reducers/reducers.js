import { combineReducers } from "redux";
import fetchWeatherData from "./fetch_weather.js";
import fetchLocation from "./fetch_location.js";
import fetchConditions from "./fetch_conditions.js";
import fetchDay1Conditions from "./fetch_day1_conditions.js";
import fetchWeatherDay1 from "./fetch_day1_weather.js";
import fetchDay2Conditions from "./fetch_day2_conditions.js";
import fetchWeatherDay2 from "./fetch_day2_weather.js";
import fetchDay3Conditions from "./fetch_day3_conditions.js";
import fetchWeatherDay3 from "./fetch_day3_weather.js";

const reducers = combineReducers({
  FetchWeatherReducer: fetchWeatherData,
  FetchWeatherLocation: fetchLocation,
  FetchWeatherConditions: fetchConditions,
  FetchWeatherReducerDay1: fetchWeatherDay1,
  FetchWeatherConditionsDay1: fetchDay1Conditions,
  FetchWeatherReducerDay2: fetchWeatherDay2,
  FetchWeatherConditionsDay2: fetchDay2Conditions,
  FetchWeatherReducerDay3: fetchWeatherDay3,
  FetchWeatherConditionsDay3: fetchDay3Conditions
});

export default reducers;
