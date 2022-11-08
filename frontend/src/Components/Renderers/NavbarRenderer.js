import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_navbar_api } from '../../Links';
import { get_navbars_api } from '../../Links';
import { AppBar, Avatar, Button, Paper, Toolbar, Typography, Container } from '@mui/material';


const NavbarRenderer = () =>
{
    const [navbar, setNavbar] = useState(null);

    const fetchNavbarData = () =>
    {
        const url = get_navbars_api;
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
                    console.log(response.data)
                    setNavbar(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
        console.log('request sent')
    }
    useEffect(() =>
    {
        fetchNavbarData();
    }, []);

    useEffect(() =>
    {
        if (!navbar)
        {
            fetchNavbarData();
            console.log("call")
        }
    });
    useEffect(() =>
    {
        const componentCode = navbar.opening_tag + navbar.text + navbar.closing_tag;
    }, [navbar])
    let i = 0;

    return (
        <>
            <AppBar position='static'>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: "space-between"
                }}>
                    {
                        navbar && navbar.tab_text.map((link) =>
                        (
                            <Typography key={i} variant="h6"
                                fontWeight="900"
                                sx={{ display: { sm: "block" } }} >
                                <a href={navbar.link_text[i++]}>
                                    {link}
                                </a>
                            </Typography>
                        ))
                    }

                    <div>
                        <Avatar
                            sx={{ width: 30, height: 30 }}
                            src="https://www.pngitem.com/pimgs/m/421-4213036_avatar-hd-png-download.png"
                        />
                    </div>
                </Toolbar>

            </AppBar>
        </>
    );
};

export default NavbarRenderer;