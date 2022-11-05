import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_table_api } from '../../Links';
import { get_table_api } from '../../Links';

const TableRenderer = () =>
{
    const [table, setTable] = useState([]);

    const fetchTableData = () =>
    {
        const url = get_table_api;
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
                    setTable(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchTableData();
    }, []);

    useEffect(() =>
    {
        const componentCode = table.opening_tag + table.text + table.closing_tag;
        // todo: need to add this to a file
    }, [table])

    return (
        <div>
            <table>
                {table.text}
            </table>
        </div>
    );
};

export default TableRenderer;