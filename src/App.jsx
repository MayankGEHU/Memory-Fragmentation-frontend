import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AlgorithmUse from "./components/AlgorithmUse";
import TemplatesShowcase from "./components/TemplatesShowcas";
import Footer from "./components/Footer";
import MemoryPage from "./pages/MemoryPage";
import NavBar from "./components/NavBar"; // ✅ Add this
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* ✅ Add this here */}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <TemplatesShowcase />
                <AlgorithmUse />
              </>
            }
          />
          <Route path="/memory" element={<MemoryPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
