import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_button_api } from '../../Links';
import { get_button_api } from '../../Links';

const ButtonRenderer = () =>
{
    const [button, setButton] = useState([]);

    const fetchButtonData = () =>
    {
        const url = get_button_api;
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
            <button>
                {button.text}
            </button>
        </div>
    );
};

export default ButtonRenderer;