import React from "react";
import { myplans } from "../../api/myplans";
import PriceCard from "../../components/layout/PriceCard";
import { Col, Row } from "react-bootstrap";
// import "../../styles/plans.css";
import { Box } from "@mui/material";

function PriceSection() {
  return (
    <Box sx={{ padding: { xs: "1rem", sm: "1rem", md: "2rem", lg: "3rem" } }}>
      <h1 className="text-center">My Plans</h1>
      <Row className="mt-lg-5 mt-sm-3">
        {myplans.map((plan, index) => (
          <Col key={index} xs={12} sm={12} md={6} lg={4}>
            <PriceCard
              title={plan.title}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              className={plan.class}
            />
          </Col>
        ))}
      </Row>
    </Box>
  );
}

export default PriceSection;
