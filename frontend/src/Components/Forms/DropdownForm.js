/* Upto 4 dropdown menus */

import React, { useEffect, useState } from "react";
import * as Links from "../../Links";
import axios from "axios";
import { Textarea } from 'evergreen-ui'
import TextField from "@mui/material/TextField";

import
{
  Grid,
  Paper,
  Button,

} from "@mui/material";

const DropdownForm = () =>
{
  const validate = (values) =>
  {
    const errors = {};
    return errors;
  };
  const paperStyle = {
    padding: "10px 20px",
    width: "25vw",
  };
  const initial = {
    options: "",
    field: ""
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
              label="Field Name"
              placeholder="Enter Field Name"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="field"
              value={formValues.field}
              error={Boolean(formErrors.field)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.field}
            />
            <Textarea
              id="outlined-basic"
              label="link_text"
              placeholder="Enter Options"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="options"
              value={formValues.options}
              error={Boolean(formErrors.options)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.options}
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
