import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_h2_api } from '../../Links';
import { get_h2_api } from '../../Links';

const H2Renderer = () =>
{
    const [h2, setH2] = useState([]);

    const fetchH2Data = () =>
    {
        const url = get_h2_api;
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
                    setH2(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchH2Data();
    }, []);

    useEffect(() =>
    {
        const componentCode = h2.opening_tag + h2.text + h2.closing_tag;
        // todo: need to add this to a file
    }, [h2])

    return (
        <div>
            <h2>
                {h2.text}
            </h2>
        </div>
    );
};

export default H2Renderer;