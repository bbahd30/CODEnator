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
  TextareaAutosize,
} from "@mui/material";
import { Textarea } from "evergreen-ui";
import TextField from "@mui/material/TextField";

const TableForm = () =>
{
  const paperStyle = {
    padding: "10px 20px",
    width: "25vw",
  };
  const initial = {
    head_col: "",
    row_data: "",
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
    const url = Links.post_tables_api;
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
              label="Name of the Head Columns"
              placeholder="Enter Name of the Head Columns"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="head_col"
              value={formValues.head_col}
              error={Boolean(formErrors.head_col)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.head_col}
            />
            <Textarea
              id="outlined-basic"
              label="row_data"
              placeholder="Enter data for rows row-wise"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="row_data"
              value={formValues.row_data}
              error={Boolean(formErrors.row_data)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.row_data}
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
