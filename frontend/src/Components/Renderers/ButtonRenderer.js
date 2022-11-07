import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_button_api } from '../../Links';
import { get_buttons_api } from '../../Links';
import { Button } from '@mui/material';

const ButtonRenderer = () =>
{
    const [button, setButton] = useState([]);

    const fetchButtonData = () =>
    {
        const url = get_buttons_api;
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
                    setButton(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchButtonData();
    }, []);

    useEffect(() =>
    {
        const componentCode = button.opening_tag + button.text + button.closing_tag;
        // todo: need to add this to a file
    }, [button])

    return (
        <div>
            <button style={{textAlign: "center",margin:"30px",fontSize:"20px",padding:"10px",borderRadius:"10px"}}>
                {button.text}
            </button>
        </div>
    );
};

export default ButtonRenderer;