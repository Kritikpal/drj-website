import React, { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "./AppNavbar/appNavbar.css";
import second from "../Elements/AppCard";
import AppCard from "../Elements/AppCard";
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
        <Navbar.Brand
          className="drjlogo my-1 mx-2 mx-sm-3 mx-md-4 mx-lg-5"
          href="#home"
        >
          DRJ
        </Navbar.Brand>
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
