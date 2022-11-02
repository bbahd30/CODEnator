import React, { useEffect, useState } from 'react';
import * as Links from '../../Links';
import axios from 'axios';
import { Grid, Paper, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';

const ImageForm = () =>
{
    const paperStyle =
    {
        padding: '10px 20px',
        width: '25vw'
    }
    const [file, setFile] = useState([]);

    const handleFile = (e) =>
    {
        e.preventDefault();
        setFile(e.target.files[0]);
    }
    const initial =
    {
        image: "",
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
        const url = Links.image_upload;
        axios
            .post
            (
                url, file
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

    const validate = (values) =>
    {
        const errors = {};

        // if (!values.round_name)
        // {
        //     errors.round_name = "Round name is required";
        // }
        // if (!values.round_type)
        // {
        //     errors.round_type = "Round type is required";
        // }

        return errors;
    }

    const saveToData = (formValues) =>
    {
        const url = Links.post_tags_api;
        const data = formValues;
        axios
            .post
            (
                url, data)
            .then
            ((response) =>
            {
                // todo:
                if (response.data['msg'] === "Round Added")
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
            setFormValues({ round_name: "", round_type: "" });
            setTimeout(() =>
            {
                setAdded(false);
            }, (4000));
        }
    }, [formErrors])

    return (
        <div>
            <Grid textAlign={'center'}>
                <Paper elevation={0} style={paperStyle}>

                    {/* {added ?
                        (
                            <Button variant="text" type='submitClicked' sx={{ marginBottom: "30px" }} transition="all .2s"
                            >Season successfully added</Button>
                        )
                        :
                        <div></div>} */}

                    <Grid>
                        <form onSubmit={handleSubmit} alignitem={'center'}>
                            <input type="file" name="myImage" onChange={handleFile} ></input>
                            {/* <TextField
                                id="outlined-basic"
                                label="Round Name"
                                placeholder='Enter Round Name'
                                variant="outlined"
                                fullWidth
                                onChange={handleChange}
                                name="round_name"
                                value={formValues.round_name}
                                error={Boolean(formErrors.round_name)}
                                sx={{ marginBottom: '20px' }}
                                helperText={formErrors.round_name}
                            />
                            <TextField
                                id="outlined-basic"
                                label="Round Type"
                                select
                                variant="outlined"
                                fullWidth
                                onChange={handleChange}
                                name="round_type"
                                value={formValues.round_type || ""}
                                error={Boolean(formErrors.round_type)}
                                sx={{ marginBottom: '20px' }}
                                helperText={formErrors.round_type}
                            >
                                <MenuItem value='int'>
                                    Interview
                                </MenuItem>
                                <MenuItem value='t'>
                                    Test
                                </MenuItem>
                            </TextField> */}
                            <Button variant="contained" onClick={handleSubmit} sx={{ marginTop: '30px' }}>
                                Upload
                            </Button>

                        </form>
                    </Grid>
                </Paper>
            </Grid >
        </div>
    );
};

export default ImageForm;