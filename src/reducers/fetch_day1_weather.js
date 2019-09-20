const fetchWeatherDay1 = (
  state = {
    weatherDay1: []
  },
  action
) => {
  if (action.type === "FETCH_WEATHER_DAY_1") {
    state = { ...state, weatherDay1: action.payload };
  }
  return state;
};

export default fetchWeatherDay1;
