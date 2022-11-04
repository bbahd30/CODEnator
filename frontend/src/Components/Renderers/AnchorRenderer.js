import React, { useEffect, useState } from 'react';
import axios from 'axios'; import { get_anchors_api } from '../../Links';

const AnchorRenderer = () =>
{
    const [anchor, setAnchor] = useState([]);

    const fetchAnchorData = () =>
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
    }

    useEffect(() =>
    {
        fetchAnchorData();
    }, []);

    return (
        <div>
            {/* anchor.opening_tag
            anchor.text
            anchor.closing_tag */}
        </div>
    );
};

export default AnchorRenderer;