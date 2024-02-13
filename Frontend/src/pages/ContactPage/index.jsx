import React from "react";
import { Box, Typography } from "@mui/material";
import ContactPageHeader from "./ContactPageHeader";
import ContactForm from "./ContactForm";
import { TestForm } from "./MyContactTest";
import AboutUsBanner from "../About/AboutUsBanner";

function ContactPage() {
  return (
    <Box>
      <AboutUsBanner title="Contact Me" description=" Let's get in touch" />
      {/* <ContactPageHeader /> */}
      <ContactForm />
      {/* <TestForm /> */}
    </Box>
  );
}

export default ContactPage;
