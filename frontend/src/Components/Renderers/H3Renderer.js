import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_h3_api } from '../../Links';
import { get_h3_api } from '../../Links';

const H3Renderer = () =>
{
    const [h3, setH3] = useState([]);

    const fetchH3Data = () =>
    {
        const url = get_h3_api;
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
                    setH3(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchH3Data();
    }, []);

    useEffect(() =>
    {
        const componentCode = h3.opening_tag + h3.text + h3.closing_tag;
        // todo: need to add this to a file
    }, [h3])

    return (
        <div>
            <h3 style={{textAlign: "center",margin:"20px",fontSize:"35px"}}>
                {h3.text}
            </h3>
        </div>
    );
};

export default H3Renderer;