import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_h6_api } from '../../Links';
import { get_h6_api } from '../../Links';

const H6Renderer = () =>
{
    const [h6, setH6] = useState([]);

    const fetchH6Data = () =>
    {
        const url = get_h6_api;
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
                    setH6(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchH6Data();
    }, []);

    useEffect(() =>
    {
        const componentCode = h6.opening_tag + h6.text + h6.closing_tag;
        // todo: need to add this to a file
    }, [h6])

    return (
        <div>
            <h6 style={{textAlign: "center",margin:"5px",fontSize:"20px"}}>
                {h6.text}
            </h6>
        </div>
    );
};

export default H6Renderer;