import React from "react";
import "./styles/App.scss";
import { ContactPage, HomePage, HomeTour, RentalPage, SalePage, ShopPage } from "./views";
import { Navbar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rentals" element={<RentalPage />} />
          <Route path="/sales" element={<SalePage />} />
          <Route path="/home-tour" element={<HomeTour />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
