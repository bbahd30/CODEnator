import React, { useEffect, useState } from 'react';
import axios from 'axios'; import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { get_dropdowns_api } from '../../Links';
import
{
    Grid
} from "@mui/material";

const DropdownRenderer = () =>
{
    const [dropdown, setDropdown] = useState([]);

    const fetchDropdownData = () =>
    {
        const url = get_dropdowns_api;
        axios
            .get
            (
                url
            )
            .then
            ((response) =>
            {
                if (response.status == 200 || response.status == 201)
                {
                    setDropdown(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchDropdownData();
    }, []);

    useEffect(() =>
    {
        if (dropdown != null)
        {
            const componentCode = dropdown.opening_tag + dropdown.options + dropdown.closing_tag;
        }
        // todo: need to add this to a file
    }, [dropdown])
    console.log(dropdown)

    return (
        <Grid>
            <form alignitem={"center"}>
                <FormControl sx={{ width: 250, margin: "20px" }} >
                    <InputLabel id="demo-select-small">{dropdown.field}</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={dropdown.field}
                        placeholder="Choose a field"
                        label="field"
                    >
                        {
                            dropdown.options != null && dropdown.options.map((option) =>
                            (
                                <MenuItem key={option} value={option}>{option}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </form>
        </Grid>


    );
};

export default DropdownRenderer;