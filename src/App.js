import React from "react";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import "./App.css";
import Footer from "./components/Footer";
import OurClients from "./components/OurClients";
import Community from "./components/Community";
import Unlock from "./components/Unlock";
import PixelgradeStory from "./components/PixelgradeStory";
import Achievements from "./components/Achievements";
import CommunityUpdates from "./components/CommunityUpdates";
function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroSection />
      <OurClients />
      <Community />
      <Unlock />
      <Achievements />
      <CommunityUpdates />
      <Footer />
    </div>
  );
}

export default App;
