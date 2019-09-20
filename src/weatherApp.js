import React from "react";
import Main from "./components/main.js";
import Store from "./store/store.js";
import { Provider } from "react-redux";

const WeatherApp = () => {
  return (
    <Provider store={Store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
};

export default WeatherApp;
