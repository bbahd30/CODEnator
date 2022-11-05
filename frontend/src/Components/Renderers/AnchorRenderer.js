import React, { useEffect, useState } from 'react';
import axios from 'axios'; import { get_anchors_api } from '../../Links';

const AnchorRenderer = () =>
{
    const [anchor, setAnchor] = useState([]);

    useEffect(() =>
    {
        const url = get_anchors_api;
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
                    setAnchor(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }, []);

    useEffect(() =>
    {
        const componentCode = "<a href = '" + anchor.link + "'>" + anchor.link_text + anchor.closing_tag;
        console.log(componentCode)
    }, [anchor])

    return (
        <div style={{ position: 'absolute' }}>
            <a href={anchor.link}>{anchor.link_text}</a>
        </div>

    );
};

export default AnchorRenderer;