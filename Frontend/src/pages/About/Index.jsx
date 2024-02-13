import React from "react";
import AboutTopContent from "./AboutTopContent";
import DeviceDetails from "./DeviceDetails";
import "../../styles/about.css";
import ExperienceSection from "./ExperenceSection/ExperienceSection";
import AboutUsBanner from "./AboutUsBanner";

function Index() {
  return (
    <div>
      <AboutUsBanner
        title="Glad to see you here !"
        description={" I'm Dibya Jena."}
      />
      <AboutTopContent />
      <ExperienceSection />
      <DeviceDetails />
    </div>
  );
}

export default Index;
