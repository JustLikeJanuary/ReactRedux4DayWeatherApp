const fetchWeatherDay3 = (
  state = {
    weatherDay3: []
  },
  action
) => {
  if (action.type === "FETCH_WEATHER_DAY_3") {
    state = { ...state, weatherDay3: action.payload };
  }
  return state;
};

export default fetchWeatherDay3;
