import React from "react";
import HeroSection from "./HeroSection";
import Navigation from "./Navigation";
import Footer from "./Footer";
import OurClients from "./OurClients";
import Community from "./Community";
import Unlock from "./Unlock";
import PixelgradeStory from "./PixelgradeStory";
import Achievements from "./Achievements";
import CommunityUpdates from "./CommunityUpdates";

const Home = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <OurClients />
      <Community />
      <Unlock />
      <PixelgradeStory />
      <Achievements />
      <CommunityUpdates />
      <Footer />
    </>
  );
};

export default Home;
