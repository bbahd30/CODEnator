//Implementing 3X3 Table.

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

const TableForm = () =>
{
  const paperStyle = {
    padding: "10px 20px",
    width: "25vw",
  };
  const initial = {
    text11: "",
    text12: "",
    text13: "",
    text21: "",
    text22: "",
    text23: "",
    text31: "",
    text32: "",
    text33: "",
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
    const url = Links.post_table_api;
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
            Table successfully added
          </Button>
        ) : (
          <div></div>
        )}
        <Grid>
          <form onSubmit={handleSubmit} alignitem={"center"}>
            <TextField
              id="outlined-basic"
              label="Row1 Column1 Text"
              placeholder="Enter Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="text11"
              value={formValues.text11}
              error={Boolean(formErrors.text11)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.text11}
            />
            <TextField
              id="outlined-basic"
              label="Row1 column2 Text"
              placeholder="Enter Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="text12"
              value={formValues.text12}
              error={Boolean(formErrors.text12)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.text12}
            />
            <TextField
              id="outlined-basic"
              label="Row1 Column3 Text"
              placeholder="Enter Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="text13"
              value={formValues.text13}
              error={Boolean(formErrors.text13)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.text13}
            />
            <TextField
              id="outlined-basic"
              label="Row2 Column1 Text"
              placeholder="Enter Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="text21"
              value={formValues.text21}
              error={Boolean(formErrors.text21)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.text21}
            />
            <TextField
              id="outlined-basic"
              label="Row2 column2 Text"
              placeholder="Enter Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="text22"
              value={formValues.text22}
              error={Boolean(formErrors.text22)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.text22}
            />
            <TextField
              id="outlined-basic"
              label="Row2 Column3 Text"
              placeholder="Enter Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="text23"
              value={formValues.text23}
              error={Boolean(formErrors.text23)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.text23}
            />
            <TextField
              id="outlined-basic"
              label="Row3 Column1 Text"
              placeholder="Enter Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="text31"
              value={formValues.text31}
              error={Boolean(formErrors.text31)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.text31}
            />
            <TextField
              id="outlined-basic"
              label="Row3 column2 Text"
              placeholder="Enter Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="text32"
              value={formValues.text32}
              error={Boolean(formErrors.text32)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.text32}
            />
            <TextField
              id="outlined-basic"
              label="Row3 Column3 Text"
              placeholder="Enter Text"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="text33"
              value={formValues.text33}
              error={Boolean(formErrors.text33)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.text33}
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

export default TableForm;
