import React, { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Box, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "./AppNavbar/appNavbar.css";

function AppNavbar({ menu = [] }) {
  const location = useLocation();
  const [activeLink, setActiveLink] = React.useState("");
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);
  return (
    <Navbar
      style={{
        position: "fixed",
        top: "0",
        width: "100%",
        zIndex: "1000",
      }}
      expand="lg"
      className="p-0"
      variant="dark"
    >
      <Container
        fluid
        style={{
          backdropFilter: "blur(12px) saturate(159%)",
          WebkitBackdropFilter: "blur(12px) saturate(159%)",
          backgroundColor: "rgba(17, 25, 40, 0.45)",
          border: "1px solid rgba(255, 255, 255, 0.125)",
          overflow: "hidden",
        }}
      >
        <Box
          className="nav-logo"
          sx={{
            marginLeft: {
              xs: "1rem",
              sm: "1rem",
              md: "1rem",
              lg: "1rem",
            },
          }}
        >
          <div data-text="DRJ">DRJ</div>
        </Box>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center w-100">
            {menu.map((item) => (
              <Link
                className={
                  "nav-link " + (activeLink === item.link ? "active" : "")
                }
                to={item.link}
                key={item.link}
              >
                {item.title}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
