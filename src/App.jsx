import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import AlgorithmUse from "./components/AlgorithmUse";
import TemplatesShowcase from "./components/TemplatesShowcas";
import Footer from "./components/Footer";
import MemoryPage from "./pages/MemoryPage"; // ← New component for memory visualizer
import "./App.css";
function App() {
  return (
    <Router>
      <div className="App">
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

        {/* Footer will now appear on all pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;