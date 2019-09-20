import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchAPIResponse } from "../actions/fetch_api_data.js";

const Main = props => {
  const [value, updateValue] = useState("");

  useEffect(() => {
    props.fetchAPIResponse("Paris");
  }, []);

  const search = () => {
    props.fetchAPIResponse(value);
  };

  const changeHandler = ({ target: { value } }) => {
    updateValue(value);
  };

  const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const getWeekDay = (str = "2020-01-01") => {
    const day = new Date(
      str
        .slice(0, 10)
        .split("-")
        .map(Number)
    );
    return day.getDay();
  };

  return (
    <div>
      <div className="form">
        <input
          name="city"
          placeholder="Enter a city or zip code"
          onChange={changeHandler}
        />
        <button onClick={search}>
          {" "}
          <i className="fas fa-search" />{" "}
        </button>
      </div>
      <h2>
        <i className="far fa-compass" /> Location: {props.apiLocation[0]},{" "}
        {props.apiLocation[1]}, {props.apiLocation[2]}
      </h2>
      <h2>
        <i className="fas fa-tint" /> Current Conditions
      </h2>
      <div className="flex-container-main">
        <div className="flex-container-top">
          <div className="flex-item-top">
            <div className="flex-item-top-big">
              <span style={{ fontSize: "2em", color: "#888" }}>
                Conditions:
              </span>
              <br />
              <img
                src={props.apiConditions[1]}
                height="125px"
                width="125px"
                style={{ display: "inline" }}
                alt="current weather condition icon"
              />
            </div>
            <p className="flex-item-top-small" style={{ marginTop: "45px" }}>
              <br />
              {props.apiConditions[0]}
            </p>
            <div>
              Wind: {props.apiResponse[5]}mph {props.apiResponse[8]}
            </div>
          </div>
          <div className="flex-item-top">
            <div className="flex-item-top-big">
              <span style={{ fontSize: "2em", color: "#888" }}>
                Temperature:
              </span>
              <br />
              <br />
              <span className="current-temp">{props.apiResponse[3]}°F</span>
            </div>
            <div style={{ marginTop: "65px" }}>
              Feels like {props.apiResponse[16]}°F
              <br />
              <div style={{ marginTop: "15px" }}>
                Humidity: {props.apiResponse[13]}%{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-container-bottom">
          <div className="flex-item-bottom-container">
            <div className="flex-box-item-sub1">
              {daysOfWeek[(getWeekDay(props.apiLocation[7]) + 1) % 7]}
            </div>
            <div className="flex-box-item-sub2">
              <img
                src={props.apiDay1Conditions[1]}
                height="50px"
                width="50px"
                style={{ display: "inline" }}
                alt="current weather condition icon"
              />
            </div>
            <div className="flex-box-item-sub3">
              {props.apiDay1Response[1]}°F / {props.apiDay1Response[3]}°F
            </div>
            <div className="flex-box-item-sub3">
              {props.apiDay1Conditions[0]}
            </div>
            <div>Humidity: {props.apiDay1Response[12]}% </div>
          </div>

          <div className="flex-item-bottom-container">
            <div className="flex-box-item-sub1">
              {daysOfWeek[(getWeekDay(props.apiLocation[7]) + 2) % 7]}
            </div>
            <div className="flex-box-item-sub2">
              {" "}
              <img
                src={props.apiDay2Conditions[1]}
                height="50px"
                width="50px"
                style={{ display: "inline" }}
                alt="current weather condition icon"
              />
            </div>
            <div className="flex-box-item-sub3">
              {props.apiDay2Response[1]}°F / {props.apiDay2Response[3]}°F
            </div>
            <div className="flex-box-item-sub3">
              {props.apiDay2Conditions[0]}
            </div>
            <div>Humidity: {props.apiDay2Response[12]}% </div>
          </div>
          <div className="flex-item-bottom-container">
            <div className="flex-box-item-sub1">
              {daysOfWeek[(getWeekDay(props.apiLocation[7]) + 3) % 7]}
            </div>
            <div className="flex-box-item-sub2">
              {" "}
              <img
                src={props.apiDay3Conditions[1]}
                height="50px"
                width="50px"
                style={{ display: "inline" }}
                alt="current weather condition icon"
              />
            </div>
            <div className="flex-box-item-sub3">
              {props.apiDay3Response[1]}°F / {props.apiDay3Response[3]}°F
            </div>
            <div className="flex-box-item-sub3">
              {props.apiDay3Conditions[0]}
            </div>
            <div>Humidity: {props.apiDay3Response[12]}% </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  apiResponse: state.FetchWeatherReducer.weatherData,
  apiLocation: state.FetchWeatherLocation.location,
  apiConditions: state.FetchWeatherConditions.conditions,
  apiDay1Response: state.FetchWeatherReducerDay1.weatherDay1,
  apiDay1Conditions: state.FetchWeatherConditionsDay1.conditionsDay1,
  apiDay2Response: state.FetchWeatherReducerDay2.weatherDay2,
  apiDay2Conditions: state.FetchWeatherConditionsDay2.conditionsDay2,
  apiDay3Response: state.FetchWeatherReducerDay3.weatherDay3,
  apiDay3Conditions: state.FetchWeatherConditionsDay3.conditionsDay3
});

const matchDispatchToProps = {
  fetchAPIResponse
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Main);
