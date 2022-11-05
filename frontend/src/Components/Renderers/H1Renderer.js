import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_h1_api } from '../../Links';
import { get_h1_api } from '../../Links';

const H1Renderer = () =>
{
    const [h1, setH1] = useState([]);

    const fetchH1Data = () =>
    {
        const url = get_h1_api;
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
                    setH1(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchH1Data();
    }, []);

    useEffect(() =>
    {
        const componentCode = h1.opening_tag + h1.text + h1.closing_tag;
        // todo: need to add this to a file
    }, [h1])

    return (
        <div>
            <h1>
                {h1.text}
            </h1>
        </div>
    );
};

export default H1Renderer;