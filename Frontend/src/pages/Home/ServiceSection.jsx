import React from "react";
import { services } from "../../api/myservices";
import ServiceCard from "../../components/layout/ServiceCard";
import { Row } from "react-bootstrap";
import "../../styles/servicesection.css";
import GradiantBox from "../../components/Elements/GradiantBox";

function ServiceSection() {
  return (
    <div className="py-lg-5 py-3 px-2 px-md-3 px-lg-5">
      <div>
        <h1 className="text-center mt-lg-3 mt-sm-2">Our Services</h1>
        <Row>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              heading={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </Row>
      </div>
    </div>
  );
}

export default ServiceSection;
