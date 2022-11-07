import React, { useEffect, useState } from "react";
import * as Links from "../../Links";
import axios from "axios";
import
{
  Grid,
  Paper,
  Button,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Textarea } from 'evergreen-ui'

const NavbarForm = () =>
{
  const paperStyle = {
    padding: "10px 20px",
    width: "25vw",
  };
  const initial = {
    num_of_tabs: "",
    tab_text: "",
    link_text: "",
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
    // const linkRegex =
    //   /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    // if (!values.navlink1_text)
    // {
    //   if (!values.navlink1_text)
    //   {
    //     errors.navlink1_text = "Link Text is required";
    //   }
    //   if (!values.navlink1)
    //   {
    //     errors.navlink1 = "Link is required";
    //   } else if (!linkRegex.test(values.navlink1))
    //   {
    //     errors.navlink1 = "Enter a valid link";
    //   }
    // }
    // if (!values.navlink2_text)
    // {
    //   if (!values.navlink2_text)
    //   {
    //     errors.navlink2_text = "Link Text is required";
    //   }
    //   if (!values.navlink2)
    //   {
    //     errors.navlink2 = "Link is required";
    //   } else if (!linkRegex.test(values.navlink2))
    //   {
    //     errors.navlink2 = "Enter a valid link";
    //   }
    // }
    // if (!values.navlink3_text)
    // {
    //   if (!values.navlink3_text)
    //   {
    //     errors.navlink3_text = "Link Text is required";
    //   }
    //   if (!values.navlink3)
    //   {
    //     errors.navlink3 = "Link is required";
    //   } else if (!linkRegex.test(values.navlink3))
    //   {
    //     errors.navlink3 = "Enter a valid link";
    //   }
    // }

    return errors;
  };

  const saveToData = (formValues) =>
  {
    const data = formValues;
    const url = Links.post_navbars_api;
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
            Navbar successfully added
          </Button>
        ) : (
          <div></div>
        )}
        <Grid>
          <form onSubmit={handleSubmit} alignitem={"center"}>
            <TextField
              id="outlined-basic"
              label="Number of Tabs"
              placeholder="Enter Number of Tabs You Want"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="num_of_tabs"
              type="number"
              value={formValues.num_of_tabs}
              error={Boolean(formErrors.num_of_tabs)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.num_of_tabs}
            />
            <Textarea
              id="outlined-basic"
              label="tab_text"
              placeholder="Enter Text For Tabs"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="tab_text"
              value={formValues.tab_text}
              error={Boolean(formErrors.tab_text)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.tab_text}
            />

            <Textarea
              id="outlined-basic"
              label="link_text"
              placeholder="Enter Links For Tabs"
              variant="outlined"
              fullWidth
              onChange={handleChange}
              name="link_text"
              value={formValues.link_text}
              error={Boolean(formErrors.link_text)}
              sx={{ marginBottom: "20px" }}
              helperText={formErrors.link_text}
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

export default NavbarForm;
