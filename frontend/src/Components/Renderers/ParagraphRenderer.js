import React, { useEffect, useState } from 'react';
import axios from 'axios'; import { get_paragraphs_api } from '../../Links';

const ParagraphRenderer = () =>
{
    const [paragraph, setParagraph] = useState([]);

    const fetchParagraphData = () =>
    {
        const url = get_paragraphs_api;
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
                    setParagraph(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchParagraphData();
    }, []);

    useEffect(() =>
    {
        const componentCode = paragraph.opening_tag + paragraph.text + paragraph.closing_tag;
        console.log(componentCode)
    }, [paragraph])

    return (
        <div>
            {/* {paragraph.opening_tag}
            {paragraph.text}
            {paragraph.closing_tag} */}
            <p>
                {paragraph.text}
            </p>
        </div>
    );
};

export default ParagraphRenderer;