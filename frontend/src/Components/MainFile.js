import AddIcon from '@mui/icons-material/Add';
import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import * as Links from '../Links';
import axios from 'axios'; import ParaForm from './Forms/ParaForm';
import MyDialogBox from './UtilityComponents/MyDialogBox';
import AnchorForm from './Forms/AnchorForm';

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
    }
    const keywords =
    {
        'paragraph': "Add Paragraph Text",
        'anchor': "Add Link",
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
        </Paper>
    );
};

export default MainFile;