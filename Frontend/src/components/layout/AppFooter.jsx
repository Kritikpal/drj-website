import React from "react";
import "../../styles/appFooter.css";
import { Link } from "react-router-dom";
import {
  Box,
  ImageList,
  ImageListItem,
  Typography,
  useTheme,
} from "@mui/material";
import { Col, Row } from "react-bootstrap";
import GradiantBox from "../Elements/GradiantBox";
import AppCard from "../Elements/AppCard";
import { mainMenu } from "../../menus/mainMenu";
const menuHeadderStyle = {
  marginBottom: "1rem",
  fontSize: {
    xs: "1.2rem",
    sm: "1.2rem",
    md: "1.5rem",
    lg: "1.6rem",
  },
  lineHeight: "1",
  fontWeight: "bold",
};
function AppFooter({}) {
  return (
    <>
      <Box className="bg-dark">
        <Box sx={{ p: { xs: "1rem", sm: "1rem", md: "2rem" } }}>
          <Row className="g-3">
            <Col sm={12} lg={4}>
              <Box
                sx={{
                  marginX: {
                    xs: "0rem",
                    sm: "1rem",
                    md: "2rem",
                    lg: "3rem",
                    xl: "4rem",
                  },
                }}
              >
                <FooterProfileCard />
              </Box>
            </Col>
            <Col sm={12} lg={4}>
              <FooterImageGridSection />
            </Col>
            <Col sm={12} lg={4}>
              <Tweets />
            </Col>
          </Row>
        </Box>
        <Coppyright />
      </Box>
      <BackToTop />
    </>
  );
}

function FooterProfileCard({}) {
  return (
    <AppCard
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
          lg: "100%",
        },
      }}
    >
      <Box>
        <Link to="/" className="">
          <img
            src="images/introSmall.jpg"
            alt="footer_logo"
            style={{
              width: "100%",
              // height: "250px",
              aspectRatio: "1/1",
            }}
          />
        </Link>
      </Box>
      <Box
        sx={{
          p: { xs: "1rem", sm: "1rem", md: "2rem", lg: "2rem" },
        }}
      >
        <Typography>
          Reference site about Lorem Ipsum, giving information on its origins,
          as well as a random Lipsum generator.
        </Typography>
        <SocialLinks />
      </Box>
    </AppCard>
  );
}

function SocialLinks({}) {
  const socialLinks = [
    {
      name: "insta",
      icon: "fa-instagram",
      url: "#",
    },
    {
      name: "FaceBook",
      icon: "fa-facebook",
      url: "#",
    },
    {
      name: "Twiter",
      icon: "fa-twitter",
      url: "#",
    },
  ];
  return (
    <div>
      <Typography variant="h6" color={useTheme().palette.primary.main}>
        Follow us
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
        }}
      >
        {socialLinks.map((social) => {
          return (
            <a className="glassIco" href="#">
              <i className={"fab " + social.icon}></i>
            </a>
          );
        })}
      </Box>
    </div>
  );
}

function Tweets({}) {
  const tweets = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam porro excepturi.",
      image: "images/tweet1.png",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam porro excepturi.",
      image: "images/tweet2.png",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere unde omnis veniam porro excepturi.",
      image: "images/tweet3.png",
    },
  ];
  return (
    <Box>
      <Typography sx={menuHeadderStyle}>Tweets</Typography>
      <ul className="list-unstyled ">
        {tweets.map((tweet) => (
          <li key={tweet.id}>
            <Box sx={{ marginTop: "1rem" }}>
              <Typography
                variant="body"
                sx={{ fontStyle: "italic", color: "GrayText" }}
              >
                {tweet.text}
              </Typography>
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
}

function FooterImageGridSection() {
  const imageData = [
    "images/aboutCamera1.jpg",
    "images/aboutCamera2.jpg",
    "images/aboutCamera3.jpg",
    "images/aboutCamera1.jpg",
    "images/aboutCamera1.jpg",
    "images/aboutCamera1.jpg",
  ];
  return (
    <Box>
      <Typography variant="h6" sx={menuHeadderStyle}>
        Instagram
      </Typography>
      <ImageList cols={3} gap={10}>
        {imageData.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={item}
              style={{
                aspectRatio: "1/1",
              }}
              alt={`Image ${index + 1}`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
function Coppyright({}) {
  return (
    <AppCard
      sx={{
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
          justifyContent: "space-between",
        }}
      >
        <Typography>Copyright © 2019, All Right Reserved Seobin</Typography>
        <FooterLinks />
      </Box>
    </AppCard>
  );
}

function FooterLinks({}) {
  return (
    <Box>
      <ul className="list-unstyled d-flex">
        {mainMenu.map((link) => (
          <li key={link.title}>
            <Link
              style={{ marginRight: "1rem" }}
              to={link.link}
              className="nav-link"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
}

function BackToTop({}) {
  return (
    <div
      onClick={() => {
        window.scrollTo(0, 0);
      }}
      className="back-to-top"
    >
      <button
        className="btn btn-dark"
        title="Back to Top"
        style={{ display: "block" }}
      >
        <i className="fa fa-angle-up" />
      </button>
    </div>
  );
}

export default AppFooter;
