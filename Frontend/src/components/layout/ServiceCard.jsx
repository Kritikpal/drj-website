import React from "react";
import { Col } from "react-bootstrap";
import { Card, Paper } from "@mui/material";
import AppCard from "../Elements/AppCard";

function ServiceCard({
  heading = "",
  subheading = "",
  description = "",
  icon = "",
  className = "service-card",
}) {
  return (
    <Col lg={4} md={6} sm={12}>
      <AppCard
        sx={{
          padding: { xs: "1rem", sm: "1rem", md: "1.5rem", lg: "1.5rem" },
          margin: { xs: "0.5rem", sm: "0.5rem", md: "1rem", lg: "1rem" },
        }}
      >
        <div className="d-flex flex-row align-items-center mb-3">
          <AppCard
            sx={{
              borderRadius: "50%",
              height: "50px",
              width: "50px",
            }}
            style={{
              color: "var(--app-highlight-color)",
            }}
            className="p-3 d-flex align-items-center justify-content-center"
          >
            <i className={"fas " + icon + " "}></i>
          </AppCard>
          <div className="d-flex flex-column mx-2">
            <span>{heading}</span>
            <span className="text-black-50">{subheading}</span>
            <span className="text-warning ratings">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </span>
          </div>
        </div>
        <h6
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "3",
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </h6>
        <div className="d-flex justify-content-between mt-3">
          <span className="app-text-color">
            View&nbsp;<i className="fa fa-angle-right"></i>
          </span>
        </div>
      </AppCard>
    </Col>
  );
}

export default ServiceCard;
