import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Col, Row, Stack } from "react-bootstrap";
import { addresses, phoneDetails, socialLinks } from "../../api/addresses";
import "../../styles/gradiant.css";

function ContactPageHeader() {
  const AddressCard = ({ icon, title, description, type = "address" }) => {
    return (
      <Paper
        sx={{
          padding: "2rem",
          marginTop: "2rem",
          borderRadius: "10px",
          overflow: "hidden",
        }}
        className={
          type == "address"
            ? "bg-cherry"
            : type == "phone"
            ? "bg-cyan"
            : "bg-green"
        }
      >
        <Row className="align-items-center">
          <Col xs={3}>
            <Box
              sx={{
                padding: {
                  xs: "1rem",
                  sm: "1rem",
                  md: "1.5rem",
                  lg: "2rem",
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="app-bg-glass-gradient rounded-circle"
            >
              <i className={"fas " + icon + ""}></i>
            </Box>
          </Col>
          <Col xs={9}>
            <Box item xs={9} sm={10}>
              <Box spacing={1}>
                <Typography variant="h5">{title}</Typography>
                {description.map((d) => {
                  return <Typography variant="body1">{d}</Typography>;
                })}
              </Box>
            </Box>
          </Col>
        </Row>
      </Paper>
    );
  };

  return (
    <Box
      sx={{ padding: { xs: "1rem", sm: "1rem", md: "2rem", lg: "3rem" } }}
      className="address-layout add-bg-dark-gradient"
    >
      <Row xs={1} md={2} lg={3} gutter={2}>
        <Col xs={12} sm={6} md={4}>
          <AddressCard
            type="address"
            icon={addresses.icon}
            title={addresses.title}
            description={addresses.description}
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <AddressCard
            type="phone"
            icon={phoneDetails.icon}
            title={phoneDetails.title}
            description={phoneDetails.description}
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <AddressCard
            type="social"
            icon={socialLinks.icon}
            title={socialLinks.title}
            description={socialLinks.description}
          />
        </Col>
      </Row>
    </Box>
  );
}

export default ContactPageHeader;
