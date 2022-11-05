import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Links from '../Links';
import AnchorRenderer from './Renderers/AnchorRenderer';
import ParagraphRenderer from './Renderers/ParagraphRenderer';
import H1Renderer from './Renderers/H1Renderer';

const OutputFile = () =>
{
    const [tags, setTags] = useState([]);

    const tagsMatcher =
    {
        'paragraph': <ParagraphRenderer />,
        'anchor': <AnchorRenderer />,
        'h1': <H1Renderer />
    }
    const fetchTags = () =>
    {
        const url = Links.get_tags_api;
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
                    setTags(response.data.tags_dict)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }
    let i = 0;
    useEffect(() =>
    {
        fetchTags();
    }, []);

    return (
        <>
            {
                tags.map((tag) =>
                (
                    <div key={i++}>
                        {tagsMatcher[tag]}
                    </div>
                ))
            }
        </>
    );
};

export default OutputFile;