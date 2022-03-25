import React, { useState, useEffect, Suspense } from "react";
import service1Routes from "../services/routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "../components/general/loading";
import ScrollToTop from "../components/general/scrollToTop";
import ErrorBoundary from "../components/general/errorBoundry";
import { WidthF } from "../utilities/getWidth";
const allRoutes = [...service1Routes];

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <ScrollToTop>
          <ErrorBoundary>
            <div className="w-full m-0 p-0" style={{ height: "100vh" }}>
              <Routes>
                {allRoutes.map((item, index) => (
                  <Route
                    key={index}
                    path={item.path}
                    element={
                      WidthF().width > 500
                        ? item.WebComponent
                        : item.MobileComponent
                    }
                  />
                ))}
              </Routes>
            </div>
          </ErrorBoundary>
        </ScrollToTop>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouterProvider;
