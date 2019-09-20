const fetchWeatherDay2 = (
  state = {
    weatherDay2: []
  },
  action
) => {
  if (action.type === "FETCH_WEATHER_DAY_2") {
    state = { ...state, weatherDay2: action.payload };
  }
  return state;
};

export default fetchWeatherDay2;
