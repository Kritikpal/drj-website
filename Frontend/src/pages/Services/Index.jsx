import React from "react";
import PriceCard from "../../components/layout/PriceCard";
import PriceSection from "./PriceSection";
import "../../styles/servicepage.css";
import ServiceSection from "../Home/ServiceSection";
import AboutUsBanner from "../About/AboutUsBanner";
function ServicePage() {
  return (
    <div>
      <div className="service-page-content">
        <AboutUsBanner
          title="My Services"
          description="I Provide All Kind Of Services."
        />
        <PriceSection />
        <ServiceSection />
      </div>
    </div>
  );
}

export default ServicePage;
