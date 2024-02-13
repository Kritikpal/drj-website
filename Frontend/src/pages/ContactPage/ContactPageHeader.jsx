import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Col, Row } from "react-bootstrap";
import { addresses, phoneDetails, socialLinks } from "../../api/addresses";
import AppCard from "../../components/Elements/AppCard.jsx";

function ContactPageHeader() {
  const AddressCard = ({ icon, title, description }) => {
    return (
      <AppCard
        sx={{
          padding: "2rem",
          borderRadius: "10px",
          overflow: "hidden",
          marginBottom: "2rem",
        }}
      >
        <Row className="align-items-center">
          <Col xs={3}>
            <AppCard
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "yellow",
              }}
            >
              <i className={"fas " + icon + ""}></i>
            </AppCard>
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
      </AppCard>
    );
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <Box sx={{ width: "100%" }}>
        {[1, 2, 3].map((a) => {
          return (
            <AddressCard
              icon={addresses.icon}
              title={addresses.title}
              description={addresses.description}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default ContactPageHeader;
