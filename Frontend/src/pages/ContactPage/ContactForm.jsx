import { Typography } from "@mui/material";
import { useState } from "react";
import CustomInputField from "../../components/Elements/CustomInputField";
import "./contactform.css";
import { Col, Row } from "react-bootstrap";
import AppCard from "../../components/Elements/AppCard";
import GradiantBox from "../../components/Elements/GradiantBox";
import AppGlassMorphButton from "../../components/Elements/AppGlassMorphButton";
import ContactPageHeader from "./ContactPageHeader";

function ContactForm() {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isEverthigValid = () => {
    for (const key in data) {
      if (!data[key]) {
        return false;
      }
    }
    for (const key in errors) {
      if (errors[key]) {
        return false;
      }
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (!value) {
      setErrors({ ...errors, [name]: `${name} is required` });
    } else if (name == "email" && !isValidEmail(value)) {
      setErrors({ ...errors, [name]: "Invalid email address" });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <AppCard
      sx={{
        padding: { xs: "1rem", sm: "1rem", md: "2rem", lg: "3rem" },
        margin: { xs: "1rem", sm: "1rem", md: "2rem", lg: "3rem" },
      }}
    >
      <Row>
        <Col lg={8} md={6} sm={12}>
          <Typography mb={"2rem"} variant="h3">
            Contact Me
          </Typography>
          <form
            className="mb-2 contact-from"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(e);
            }}
          >
            <Row className="w-100">
              <Col md={6} sm={12}>
                <CustomInputField
                  name="firstName"
                  label="First Name"
                  error={Boolean(errors.firstName)}
                  helperText={errors.firstName && "First name is required"}
                  value={data.firstName}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Col>
              <Col md={6} sm={12}>
                <CustomInputField
                  name="lastName"
                  label="Last Name"
                  error={Boolean(errors.lastName)}
                  helperText={errors.lastName && "Last name is required"}
                  value={data.lastName}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Col>
            </Row>
            <Row className="w-100">
              <Col md={6} sm={12}>
                <CustomInputField
                  name="email"
                  label="Email"
                  error={Boolean(errors.email)}
                  helperText={errors.email && errors.email}
                  value={data.email}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Col>
              <Col md={6} sm={12}>
                <CustomInputField
                  name="subject"
                  label="Subject"
                  error={Boolean(errors.subject)}
                  helperText={errors.subject && "Subject is required"}
                  value={data.subject}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </Col>
            </Row>
            <Row className="w-100">
              <CustomInputField
                name="message"
                label="Message"
                error={Boolean(errors.message)}
                helperText={errors.message && "Message is required"}
                value={data.message}
                onChange={(e) => {
                  handleChange(e);
                }}
                multiline
                rows={4}
              />
            </Row>
            <AppGlassMorphButton
              style={{ marginTop: "1rem" }}
              size="lg"
              type="submit"
              variant="contained"
              color={isEverthigValid() ? "primary" : "error"}
            >
              Submit
            </AppGlassMorphButton>
          </form>
        </Col>
        <Col lg={4} md={6} sm={12}>
          <ContactPageHeader />
        </Col>
      </Row>
    </AppCard>
  );
}

export default ContactForm;
