import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_hr_api } from '../../Links';
import { get_hr_api } from '../../Links';

const HrRenderer = () =>
{
    const [hr, setHr] = useState([]);

    useEffect(() =>
    {
        const componentCode = "<hr >";
    }, [hr])

    return (
        <div>
            <hr />
        </div>
    );
};

export default HrRenderer;