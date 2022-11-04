import React, { useEffect, useState } from "react";
import * as Links from "../../Links";
import axios from "axios";
import {
  Grid,
  Paper,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import TextField from "@mui/material/TextField";

const navbarForm = () => {
  const paperStyle = {
    padding: "10px 20px",
    width: "25vw",
  };
  const initial = {
    navlink1_text: "",
    navlink1: "",
    navlink2_text: "",
    navlink2: "",
    navlink3_text: "",
    navlink3: "",
  };
  const [formValues, setFormValues] = useState(initial);
  const [formErrors, setFormErrors] = useState([]);
  const [added, setAdded] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    setIsSubmitClicked(true);
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) => {
    const errors = {};
    const linkRegex =
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    if (!values.navlink1_text) {
      if (!values.navlink1_text) {
        errors.navlink1_text = "Link Text is required";
      }
      if (!values.navlink1) {
        errors.navlink1 = "Link is required";
      } else if (!linkRegex.test(values.navlink1)) {
        errors.navlink1 = "Enter a valid link";
      }
    }
    if (!values.navlink2_text) {
      if (!values.navlink2_text) {
        errors.navlink2_text = "Link Text is required";
      }
      if (!values.navlink2) {
        errors.navlink2 = "Link is required";
      } else if (!linkRegex.test(values.navlink2)) {
        errors.navlink2 = "Enter a valid link";
      }
    }
    if (!values.navlink3_text) {
      if (!values.navlink3_text) {
        errors.navlink3_text = "Link Text is required";
      }
      if (!values.navlink3) {
        errors.navlink3 = "Link is required";
      } else if (!linkRegex.test(values.navlink3)) {
        errors.navlink3 = "Enter a valid link";
      }
    }

    return errors;
  };

  const saveToData = (formValues) => {
    const data = formValues;
    const url = Links.post_navbar_api;
    axios
      .post(url, data)
      .then((response) => {
        if (response.status == 200 || response.status == 201) {
          setAdded(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitClicked) {
      saveToData(formValues);
      setFormValues(initial);
      setTimeout(() => {
        setAdded(false);
      }, 4000);
    }
  }, [formErrors]);
  return (
    <Grid textAlign={"center"} width="75%">
      <Paper elevation={0} style={paperStyle}>
        {added ? (
          <Button
            variant="text"
            type="submitClicked"
            sx={{ marginBottom: "30px" }}
            transition="all .2s"
          >
            Navbar successfully added
          </Button>
        ) : (
          <div></div>
        )}

        <Grid>
          <form onSubmit={handleSubmit} alignitem={"center"}>
            <TextField
              id="outlined-basic"
              label="navLink1 Text"
              placeholder="Enter navLink1 Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="navlink1_text"
              value={formValues.navlink1_text}
              error={Boolean(formErrors.navlink1_text)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.navlink1_text}
            />
            <TextField
              id="outlined-basic"
              label="navLink1"
              placeholder="Enter navLink1"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="navlink1"
              value={formValues.navlink1}
              error={Boolean(formErrors.navlink1)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.navlink1}
            />
            <TextField
              id="outlined-basic"
              label="navLink2 Text"
              placeholder="Enter navLink2 Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="navlink2_text"
              value={formValues.navlink2_text}
              error={Boolean(formErrors.navlink2_text)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.navlink2_text}
            />
            <TextField
              id="outlined-basic"
              label="navLink2"
              placeholder="Enter navLink2"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="navlink2"
              value={formValues.navlink2}
              error={Boolean(formErrors.navlink2)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.navlink2}
            />
            <TextField
              id="outlined-basic"
              label="navLink3 Text"
              placeholder="Enter navLink1 Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="navlink3_text"
              value={formValues.navlink3_text}
              error={Boolean(formErrors.navlink3_text)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.navlink3_text}
            />
            <TextField
              id="outlined-basic"
              label="navLink3"
              placeholder="Enter navLink1"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="navlink3"
              value={formValues.navlink3}
              error={Boolean(formErrors.navlink3)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.navlink3}
            />
            <Button
              variant="contained"
              onClick={handleSubmit}
              type="submitClicked"
              sx={{ marginTop: "30px" }}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default navbarForm;
