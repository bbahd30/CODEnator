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

const H2Form = () =>
{
  const paperStyle = {
    padding: "10px 20px",
    width: "25vw",
  };
  const initial = {
    text: "",
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
    return errors;
  };

  const saveToData = (formValues) =>
  {
    const data = formValues;
    const url = Links.post_h2_api;
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
            Heading2 successfully added
          </Button>
        ) : (
          <div></div>
        )}

        <Grid>
          <form onSubmit={handleSubmit} alignitem={"center"}>
            <TextField
              id="outlined-basic"
              label="Heading2 Text"
              placeholder="Enter Heading2 Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="text"
              value={formValues.text}
              error={Boolean(formErrors.text)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.text}
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

export default H2Form;
