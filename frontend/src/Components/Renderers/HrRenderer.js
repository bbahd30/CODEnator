import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_hr_api } from '../../Links';
import { get_hr_api } from '../../Links';

const HrRenderer = () =>
{
    const [hr, setHr] = useState([]);

    const fetchHrData = () =>
    {
        const url = get_hr_api;
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
                    setHr(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchHrData();
    }, []);

    useEffect(() =>
    {
        const componentCode = hr.opening_tag + hr.text + hr.closing_tag;
        // todo: need to add this to a file
    }, [hr])

    return (
        <div>
            <hr>
                {hr.text}
            </hr>
        </div>
    );
};

export default HrRenderer;