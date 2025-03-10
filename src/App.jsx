import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Event from "./pages/Event";
import ReactGA from 'react-ga4';

// Initialize Google Analytics
ReactGA.initialize('G-83V4DLQ0HQ');

// Component to track page views
const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
};

const App = () => {
  return (
    <BrowserRouter>
      <TrackPageView /> 
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
