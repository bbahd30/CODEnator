import React, { useEffect, useState } from 'react';
import * as Links from '../../Links';
import axios from 'axios';
import { Grid, Paper, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';

const AnchorForm = () =>
{
    const paperStyle =
    {
        padding: '10px 20px',
        width: '25vw',
    }
    const initial =
    {
        link_text: "",
        link: ""
    };
    const [formValues, setFormValues] = useState(initial);
    const [formErrors, setFormErrors] = useState([]);
    const [added, setAdded] = useState(false);
    const [isSubmitClicked, setIsSubmitClicked] = useState(false);

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    }

    const handleSubmit = (e) =>
    {
        setIsSubmitClicked(true);
        e.preventDefault();
        setFormErrors(validate(formValues));
    }

    const validate = (values) =>
    {
        const errors = {};
        const linkRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

        if (!values.link_text)
        {
            if (!values.link_text)
            {
                errors.link_text = "Link Text is required";
            }
            if (!values.link)
            {
                errors.link = "Link is required";
            }
            else if (!linkRegex.test(values.link))
            {
                errors.link = "Enter a valid link";
            }
        }

        return errors;
    }

    const saveToData = (formValues) =>
    {
        const data = formValues;
        const url = Links.post_anchors_api;
        axios
            .post
            (
                url, data
            )
            .then
            ((response) =>
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
    }

    useEffect(() =>
    {
        if (Object.keys(formErrors).length === 0 && isSubmitClicked)
        {
            saveToData(formValues);
            setFormValues(initial);
            setTimeout(() =>
            {
                setAdded(false);
            }, (4000));
        }
    }, [formErrors])
    return (
        <Grid textAlign={'center'} width="75%">
            <Paper elevation={0} style={paperStyle}>

                {added ?
                    (
                        <Button variant="text" type='submitClicked' sx={{ marginBottom: "30px" }} transition="all .2s"
                        >Link successfully added</Button>
                    )
                    :
                    <div></div>}

                <Grid>
                    <form onSubmit={handleSubmit} alignitem={'center'}>
                        <TextField
                            id="outlined-basic"
                            label="Link Text"
                            placeholder='Enter Link Text'
                            variant="outlined"
                            fullWidth
                            onChange={handleChange}
                            name="link_text"
                            value={formValues.link_text}
                            error={Boolean(formErrors.link_text)}
                            sx={{ marginBottom: '20px' }}
                            helperText={formErrors.link_text}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Link"
                            placeholder='Enter Link'
                            variant="outlined"
                            fullWidth
                            onChange={handleChange}
                            name="link"
                            value={formValues.link}
                            error={Boolean(formErrors.link)}
                            sx={{ marginBottom: '20px' }}
                            helperText={formErrors.link}
                        />
                        <Button variant="contained" onClick={handleSubmit} type='submitClicked' sx={{ marginTop: '30px' }}>
                            Submit
                        </Button>

                    </form>
                </Grid>
            </Paper>
        </Grid >
    );
};

export default AnchorForm;