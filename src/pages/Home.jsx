import React from "react";
import PageLayout from "../layouts/PageLayout";
import HeroSection from "../components/HeroSection";
import OurClients from "../components/OurClients";
import Community from "../components/Community";
import Unlock from "../components/Unlock";
import PixelgradeStory from "../components/PixelgradeStory";
import Achievements from "../components/Achievements";
import CommunityUpdates from "../components/CommunityUpdates";

const Home = () => {
  return (
    <PageLayout>
      <HeroSection />
      <OurClients />
      <Community />
      <Unlock />
      <PixelgradeStory />
      <Achievements />
      <CommunityUpdates />
    </PageLayout>
  );
};

export default Home;
