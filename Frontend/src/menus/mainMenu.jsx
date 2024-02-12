import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const ServicePage = lazy(() => import("../pages/Services/Index"));
const AboutUs = lazy(() => import("../pages/About/Index"));
const ContactPage = lazy(() => import("../pages/ContactPage"));

export const mainMenu = [
  {
    link: "/",
    title: "Home",
    component: <Home />,
  },
  {
    link: "/aboutMe",
    title: "About Me",
    component: <AboutUs />,
  },
  {
    link: "/services",
    title: "Services",
    component: <ServicePage />,
  },
  {
    link: "/contactMe",
    title: "Contact Me",
    component: <ContactPage />,
  },
];
