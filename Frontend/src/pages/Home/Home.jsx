import React from "react";
import IndividualIntervalsExample from "../../components/layout/Carosel";
import IntroSection from "./IntroSection";
import "../../styles/home.css";
import PortfolioSection from "./PortfolioSection";
import HomeBanner from "./HomeBanner";
import ServiceSection from "./ServiceSection";

function Home() {
  return (
    <>
      <HomeBanner />
      <IntroSection className={"mt-5"} />
      <ServiceSection />
      <PortfolioSection />
    </>
  );
}

export default Home;
