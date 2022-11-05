import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_select_api } from '../../Links';
import { get_select_api } from '../../Links';

const SelectRenderer = () =>
{
    const [select, setSelect] = useState([]);

    const fetchSelectData = () =>
    {
        const url = get_select_api;
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
                    setSelect(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchSelectData();
    }, []);

    useEffect(() =>
    {
        const componentCode = select.opening_tag + select.text + select.closing_tag;
        // todo: need to add this to a file
    }, [select])

    return (
        <div>
            <select>
                {select.text}
            </select>
        </div>
    );
};

export default SelectRenderer;