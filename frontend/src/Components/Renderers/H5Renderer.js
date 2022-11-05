import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_h5_api } from '../../Links';
import { get_h5_api } from '../../Links';

const H5Renderer = () =>
{
    const [h5, setH5] = useState([]);

    const fetchH5Data = () =>
    {
        const url = get_h5_api;
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
                    setH5(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchH5Data();
    }, []);

    useEffect(() =>
    {
        const componentCode = h5.opening_tag + h5.text + h5.closing_tag;
        // todo: need to add this to a file
    }, [h5])

    return (
        <div>
            <h5>
                {h5.text}
            </h5>
        </div>
    );
};

export default H5Renderer;