import React, { useState, useEffect, Suspense } from "react";
import service1Routes from "../services/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../components/general/loading";
import ScrollToTop from "../components/general/scrollToTop";
import ErrorBoundary from "../components/general/errorBoundry";

const allRoutes = [...service1Routes];

const RouterProvider = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <ScrollToTop>
          <ErrorBoundary>
            <Routes>
              {allRoutes.map((item, index) => (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    width > 500 ? item.WebComponent : item.MobileComponent
                  }
                />
              ))}
            </Routes>
          </ErrorBoundary>
        </ScrollToTop>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouterProvider;
