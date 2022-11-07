import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as Links from '../Links';
import AnchorRenderer from './Renderers/AnchorRenderer';
import ParagraphRenderer from './Renderers/ParagraphRenderer';
import H1Renderer from './Renderers/H1Renderer';
import H2Renderer from './Renderers/H2Renderer';
import H3Renderer from './Renderers/H3Renderer';
import H4Renderer from './Renderers/H4Renderer';
import H5Renderer from './Renderers/H5Renderer';
import H6Renderer from './Renderers/H6Renderer';
import ImageRenderer from './Renderers/ImageRenderer';
import ButtonRenderer from './Renderers/ButtonRenderer';
import TableRenderer from './Renderers/TableRenderer';
import HrRenderer from './Renderers/HrRenderer';
import NavbarRenderer from './Renderers/NavbarRenderer';
import DropdownRenderer from './Renderers/DropdownRenderer';

import { Table } from 'evergreen-ui';

const OutputFile = () =>
{
    const [tags, setTags] = useState([]);

    const tagsMatcher =
    {
        'paragraph': <ParagraphRenderer />,
        'anchor': <AnchorRenderer />,
        'h1': <H1Renderer />,
        'h2': <H2Renderer />,
        'h3': <H3Renderer />,
        'h4': <H4Renderer />,
        'h5': <H5Renderer />,
        'h6': <H6Renderer />,
        'image': <ImageRenderer />,
        'navbar': <NavbarRenderer />,
        'button': <ButtonRenderer />,
        'dropdown': <DropdownRenderer />,
        'hr': <HrRenderer />,
        'table': <TableRenderer />
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