import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { IntlProvider } from "react-intl";
import Router from "./routerProvider";
import messagesLoader from "../language";
const Intlprovider = ({ language }) => {
  const [message, setMessages] = useState({});
  useEffect(() => {
    messagesLoader[language.name]().then((messages) => {
      setMessages(messages.default);
    });
  }, [language.name]);
  return (
    <IntlProvider
      locale={language.name}
      key={language.name}
      messages={message}
      onError={() => {}}
    >
      <Router />
    </IntlProvider>
  );
};
const mapStateToProps = (state) => {
  let { language } = state;
  return { language };
};
export default connect(mapStateToProps)(Intlprovider);
