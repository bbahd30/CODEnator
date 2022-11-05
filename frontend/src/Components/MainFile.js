import AddIcon from '@mui/icons-material/Add';
import { Button, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import * as Links from '../Links';
import axios from 'axios';
import MyDialogBox from './UtilityComponents/MyDialogBox';
import ParaForm from '../Components/Forms/ParaForm';
import AnchorForm from '../Components/Forms/AnchorForm';
import H1Form from '../Components/Forms/H1Form';
import { Link } from 'react-router-dom';

const MainFile = () =>
{
    let i = 1;
    const paperStyle =
    {
        margin: '15vh auto',
        width: '60vw',
        height: '60vh'
    }
    const [tags, setTags] = useState([]);

    const fetchTagsNeeded = () =>
    {
        const url = `${Links.get_tags_api}`
        axios
            .get
            (
                url
            )
            .then
            ((response) =>
            {
                if (response.status === 200 || response.status === 201)
                {
                    setTags(response.data.tags_dict)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchTagsNeeded();
    }, []);

    const formsToRender =
    {
        'paragraph': <ParaForm />,
        'anchor': <AnchorForm />,
        'h1': <H1Form />
    }
    const keywords =
    {
        'paragraph': "Add Paragraph Text",
        'anchor': "Add Link",
        'h1': "Add Heading Text"
    }
    return (

        <Paper elevation={3} style={paperStyle}>
            {
                tags.map((tag) =>
                (
                    <div key={i++}>
                        <MyDialogBox

                            buttonChild=
                            {
                                <AddIcon sx={{ fontSize: "40px" }} />
                            }
                            dataChild=
                            {
                                formsToRender[tag]
                            }
                            title={keywords[tag]}
                        />
                    </div>
                ))
            }
            <div>
                <Button variant="contained">
                    <Link to={"../output"}>See output</Link>
                </Button>
            </div>
        </Paper>
    );
};

export default MainFile;