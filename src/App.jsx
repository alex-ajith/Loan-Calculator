import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Exchange from "./pages/ExchangeRates";
import PageNotFound from "./components/PageNotFound";


function App() {
 
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange-rates" element={<Exchange />} />
        <Route path="/about" element={<About />} />
        <Route path="/error-page" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
