import React from "react";
import { Box, FormGroup, TextField } from "@mui/material";
import { FormControl, FormLabel, InputGroup } from "react-bootstrap";
import { getIconForForm } from "../../api/getIcons";

function CustomInputField({
  name,
  id = "",
  label,
  value,
  error,
  onChange,
  // type = "bootstrap",
  type = "material",
  ...props
}) {
  const icon = getIconForForm(name);

  return (
    <>
      {type === "material" ? (
        <Box sx={{ paddingTop: "1rem", width: "100%" }}>
          <TextField
            id={id}
            name={name}
            fullWidth
            variant="filled"
            // color="white"
            label={label}
            value={value}
            onChange={onChange}
            error={error}
            helperText={error}
            {...props}
            sx={{
              color: "white",
            }}
          />
        </Box>
      ) : (
        <FormGroup className="mb-3" style={{ width: "100%" }}>
          <FormLabel>{label}</FormLabel>
          <InputGroup>
            <InputGroup.Text id="inputGroupPrepend" className="border-0">
              <div className="m-1">
                <i className={"fas " + icon} />
              </div>
            </InputGroup.Text>
            <FormControl
              className="border-0"
              as={name == "message" ? "textarea" : "input"}
              // as={"textarea"}
              name={name}
              id={id}
              value={value}
              onChange={onChange}
            />
          </InputGroup>
          {error && <div style={{ color: "red" }}>{props.helperText}</div>}
        </FormGroup>
      )}
    </>
  );
}

export default CustomInputField;
