import React from "react";
import { Provider } from "react-redux";
import store from "../redux";
import IntlProvider from "./intlProvider";

const Redux = () => {
  return (
    <Provider store={store}>
      <IntlProvider />
    </Provider>
  );
};

export default Redux;
