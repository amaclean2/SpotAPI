import React from "react";
import "./App.scss";
import Router from "./Router";
import { Provider } from "react-redux";
import configureStore from "./Redux/configureStore";

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
