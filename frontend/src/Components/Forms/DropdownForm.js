/* Upto 4 dropdown menus */

import React, { useEffect, useState } from "react";
import * as Links from "../../Links";
import axios from "axios";
import
{
  Grid,
  Paper,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import TextField from "@mui/material/TextField";

const DropdownForm = () =>
{
  const paperStyle = {
    padding: "10px 20px",
    width: "25vw",
  };
  const initial = {
    dropDownlink1_text: "",
    dropDownlink1: "",
    dropDownlink2_text: "",
    dropDownlink2: "",
    dropDownlink3_text: "",
    dropDownlink3: "",
    dropDownlink4_text: "",
    dropDownlink4: "",
  };
  const [formValues, setFormValues] = useState(initial);
  const [formErrors, setFormErrors] = useState([]);
  const [added, setAdded] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const handleChange = (e) =>
  {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) =>
  {
    setIsSubmitClicked(true);
    e.preventDefault();
    setFormErrors(validate(formValues));
  };

  const validate = (values) =>
  {
    const errors = {};
    const linkRegex =
      /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    if (!values.dropDownlink1_text)
    {
      if (!values.dropDownlink1_text)
      {
        errors.dropDownlink1_text = "Link Text is required";
      }
      if (!values.dropDownlink1)
      {
        errors.dropDownlink1 = "Link is required";
      } else if (!linkRegex.test(values.dropDownlink1))
      {
        errors.dropDownlink1 = "Enter a valid link";
      }
    }
    if (!values.dropDownlink2_text)
    {
      if (!values.dropDownlink2_text)
      {
        errors.dropDownlink2_text = "Link Text is required";
      }
      if (!values.dropDownlink2)
      {
        errors.dropDownlink2 = "Link is required";
      } else if (!linkRegex.test(values.dropDownlink2))
      {
        errors.dropDownlink2 = "Enter a valid link";
      }
    }
    if (!values.dropDownlink3_text)
    {
      if (!values.dropDownlink3_text)
      {
        errors.dropDownlink3_text = "Link Text is required";
      }
      if (!values.dropDownlink3)
      {
        errors.dropDownlink3 = "Link is required";
      } else if (!linkRegex.test(values.dropDownlink3))
      {
        errors.dropDownlink3 = "Enter a valid link";
      }
    }
    if (!values.dropDownlink4_text)
    {
      if (!values.dropDownlink4_text)
      {
        errors.dropDownlink4_text = "Link Text is required";
      }
      if (!values.dropDownlink4)
      {
        errors.dropDownlink4 = "Link is required";
      } else if (!linkRegex.test(values.dropDownlink4))
      {
        errors.dropDownlink4 = "Enter a valid link";
      }
    }

    return errors;
  };

  const saveToData = (formValues) =>
  {
    const data = formValues;
    const url = Links.post_dropdowns_api;
    axios
      .post(url, data)
      .then((response) =>
      {
        if (response.status == 200 || response.status == 201)
        {
          setAdded(true);
        }
      })
      .catch((error) =>
      {
        console.log(error);
      });
  };

  useEffect(() =>
  {
    if (Object.keys(formErrors).length === 0 && isSubmitClicked)
    {
      saveToData(formValues);
      setFormValues(initial);
      setTimeout(() =>
      {
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
            Dropdown successfully added
          </Button>
        ) : (
          <div></div>
        )}

        <Grid>
          <form onSubmit={handleSubmit} alignitem={"center"}>
            <TextField
              id="outlined-basic"
              label="dropDownLink1 Text"
              placeholder="Enter dropDownLink1 Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="dropDownlink1_text"
              value={formValues.dropDownlink1_text}
              error={Boolean(formErrors.dropDownlink1_text)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.dropDownlink1_text}
            />
            <TextField
              id="outlined-basic"
              label="dropDownLink1"
              placeholder="Enter dropDownLink1"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="dropDownlink1"
              value={formValues.dropDownlink1}
              error={Boolean(formErrors.dropDownlink1)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.dropDownlink1}
            />
            <TextField
              id="outlined-basic"
              label="dropDownLink2 Text"
              placeholder="Enter dropDownLink2 Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="dropDownlink2_text"
              value={formValues.dropDownlink2_text}
              error={Boolean(formErrors.dropDownlink2_text)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.dropDownlink2_text}
            />
            <TextField
              id="outlined-basic"
              label="dropDownLink2"
              placeholder="Enter dropDownLink2"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="dropDownlink2"
              value={formValues.dropDownlink2}
              error={Boolean(formErrors.dropDownlink2)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.dropDownlink2}
            />
            <TextField
              id="outlined-basic"
              label="dropDownLink3 Text"
              placeholder="Enter dropDownLink1 Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="dropDownlink3_text"
              value={formValues.dropDownlink3_text}
              error={Boolean(formErrors.dropDownlink3_text)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.dropDownlink3_text}
            />
            <TextField
              id="outlined-basic"
              label="dropDownLink3"
              placeholder="Enter dropDownLink3"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="dropDownlink3"
              value={formValues.dropDownlink3}
              error={Boolean(formErrors.dropDownlink3)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.dropDownlink3}
            />
            <TextField
              id="outlined-basic"
              label="dropDownLink4 Text"
              placeholder="Enter dropDownLink4 Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="dropDownlink4_text"
              value={formValues.dropDownlink4_text}
              error={Boolean(formErrors.dropDownlink4_text)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.dropDownlink4_text}
            />
            <TextField
              id="outlined-basic"
              label="dropDownLink4"
              placeholder="Enter dropDownLink4"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="dropDownlink4"
              value={formValues.dropDownlink4}
              error={Boolean(formErrors.dropDownlink4)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.dropDownlink4}
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

export default DropdownForm;
