import React from "react";
import urls from "./urls";
import mobileComponents from "./mobile/mobileComponents";
import webComponents from "./web/webComponents";

export default [
  {
    path: urls.home,
    WebComponent: <webComponents.WebPage1 />,
    MobileComponent: <mobileComponents.MobilePage1 />,
  },
];
