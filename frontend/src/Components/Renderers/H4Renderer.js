import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_h4_api } from '../../Links';
import { get_h4_api } from '../../Links';

const H4Renderer = () =>
{
    const [h4, setH4] = useState([]);

    const fetchH4Data = () =>
    {
        const url = get_h4_api;
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
                    setH4(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchH4Data();
    }, []);

    useEffect(() =>
    {
        const componentCode = h4.opening_tag + h4.text + h4.closing_tag;
        // todo: need to add this to a file
    }, [h4])

    return (
        <div>
            <h4>
                {h4.text}
            </h4>
        </div>
    );
};

export default H4Renderer;