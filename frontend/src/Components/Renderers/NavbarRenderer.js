import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_navbar_api } from '../../Links';
import { get_navbar_api } from '../../Links';

const NavbarRenderer = () =>
{
    const [navbar, setNavbar] = useState([]);

    const fetchNavbarData = () =>
    {
        const url = get_navbar_api;
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
                    setNavbar(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchNavbarData();
    }, []);

    useEffect(() =>
    {
        const componentCode = navbar.opening_tag + navbar.text + navbar.closing_tag;
        // todo: need to add this to a file
    }, [navbar])

    return (
        <div>
            <navbar>
                {navbar.text}
            </navbar>
        </div>
    );
};

export default NavbarRenderer;