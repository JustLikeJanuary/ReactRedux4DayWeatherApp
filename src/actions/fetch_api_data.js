import axios from "axios";

export const fetchAPIResponse = city => {
  return dispatch => {
    axios
      .get(
        "https://api.apixu.com/v1/forecast.json?key=8d7440511a3a4d24908220557192008&q=" +
          city +
          "&days=4"
      )
      .then(response => {
        let arrLocation = [];
        for (var key in response.data.location) {
          arrLocation.push(response.data.location[key]);
        }
        dispatch({ type: "FETCH_LOCATION", payload: arrLocation });

        let arrCurrent = [];
        for (var key2 in response.data.current) {
          arrCurrent.push(response.data.current[key2]);
        }
        arrCurrent.splice(5, 1);
        dispatch({ type: "FETCH_WEATHER", payload: arrCurrent });

        let arrConditions = [];
        for (var key3 in response.data.current.condition) {
          arrConditions.push(response.data.current.condition[key3]);
        }
        dispatch({ type: "FETCH_CONDITIONS", payload: arrConditions });

        let arrWeatherDay1 = [];
        for (var key4 in response.data.forecast.forecastday["1"].day) {
          arrWeatherDay1.push(
            response.data.forecast.forecastday["1"].day[key4]
          );
        }
        arrWeatherDay1.pop();
        dispatch({ type: "FETCH_WEATHER_DAY_1", payload: arrWeatherDay1 });

        let arrConditionsDay1 = [];
        for (var key5 in response.data.forecast.forecastday["1"].day
          .condition) {
          arrConditionsDay1.push(
            response.data.forecast.forecastday["1"].day.condition[key5]
          );
        }
        dispatch({
          type: "FETCH_CONDITIONS_DAY_1",
          payload: arrConditionsDay1
        });

        let arrWeatherDay2 = [];
        for (var key6 in response.data.forecast.forecastday["2"].day) {
          arrWeatherDay2.push(
            response.data.forecast.forecastday["2"].day[key6]
          );
        }
        arrWeatherDay2.pop();
        dispatch({ type: "FETCH_WEATHER_DAY_2", payload: arrWeatherDay2 });

        let arrConditionsDay2 = [];
        for (var key7 in response.data.forecast.forecastday["2"].day
          .condition) {
          arrConditionsDay2.push(
            response.data.forecast.forecastday["2"].day.condition[key7]
          );
        }
        dispatch({
          type: "FETCH_CONDITIONS_DAY_2",
          payload: arrConditionsDay2
        });

        let arrWeatherDay3 = [];
        for (var key8 in response.data.forecast.forecastday["3"].day) {
          arrWeatherDay3.push(
            response.data.forecast.forecastday["3"].day[key8]
          );
        }
        arrWeatherDay3.pop();
        dispatch({ type: "FETCH_WEATHER_DAY_3", payload: arrWeatherDay3 });

        let arrConditionsDay3 = [];
        for (var key9 in response.data.forecast.forecastday["3"].day
          .condition) {
          arrConditionsDay3.push(
            response.data.forecast.forecastday["3"].day.condition[key9]
          );
        }
        dispatch({
          type: "FETCH_CONDITIONS_DAY_3",
          payload: arrConditionsDay3
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
