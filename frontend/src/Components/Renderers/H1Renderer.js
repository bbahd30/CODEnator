import React, { useEffect, useState } from 'react';
import axios from 'axios'; import { get_anchors_api } from '../../Links';

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

    return (
        <div>
            {/* anchor.opening_tag
            anchor.text
            anchor.closing_tag */}
        </div>
    );
};

export default H1Renderer;