import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_navbar_api } from '../../Links';
import { get_navbars_api } from '../../Links';
import { AppBar, Avatar, Button, Paper, Toolbar, Typography, Container } from '@mui/material';
import Icon from '@mui/material/Icon';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { Link } from 'react-router-dom';

import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuIcon from '@mui/icons-material/Menu';


const NavbarRenderer = () =>
{
    const [navbar, setNavbar] = useState(null);

    // const toggleDrawer = props.toggleFunction;
    const logoStyle = { marginRight: "20px", marginTop: '9%' }

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
        if (navbar != null)
        {
            const componentCode = navbar.opening_tag + navbar.text + navbar.closing_tag;
        }
        // todo: need to add this to a file
    }, [navbar])
    let i = 0;
    console.log(i)

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