import AddIcon from '@mui/icons-material/Add';
import { Button, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import * as Links from '../Links';
import axios from 'axios';
import MyDialogBox from './UtilityComponents/MyDialogBox';
import ParaForm from './Forms/ParagraphForm';
import AnchorForm from '../Components/Forms/AnchorForm';
import H1Form from '../Components/Forms/H1Form';
import H2Form from '../Components/Forms/H2Form';
import H3Form from '../Components/Forms/H3Form';
import H4Form from '../Components/Forms/H4Form';
import H5Form from '../Components/Forms/H5Form';
import H6Form from '../Components/Forms/H6Form';
import NavbarForm from './Forms/Navbarform';
import DropdownForm from './Forms/DropdownForm'
import ImageForm from './Forms/ImageForm';
import ButtonForm from './Forms/ButtonForm';
import './mainfile.css';

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
    const formdivStyle=
    {
        

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
        const dum_arr = ['image' , 'anchor'];
        setTags(dum_arr);
    }, []);

    const formsToRender =
    {
        'paragraph': <ParaForm />,
        'anchor': <AnchorForm />,
        'h1': <H1Form />,
        'h2': <H2Form />,
        'h3': <H3Form />,
        'h4': <H4Form />,
        'h5': <H5Form />,
        'h6': <H6Form />,
        'image': <ImageForm />,
        'navbar': <NavbarForm />,
        'button': <ButtonForm />,
        'dropdown': <DropdownForm />

    }
    const keywords =
    {
        'paragraph': "Add Paragraph Text",
        'anchor': "Add Link",
        'h1': "Add Heading 1 Text",
        'h2': "Add Heading 2 Text",
        'h3': "Add Heading 3 Text",
        'h4': "Add Heading 4 Text",
        'h5': "Add Heading 5 Text",
        'h6': "Add Heading 6 Text",
        'image': "",
        'navbar': "Add details",
        'button': "Add button",
        'dropdown': "Add links"
    }

    const index = tags.indexOf('hr');
    return (
        

        <div className='formdiv'>
            
            <div className='dividepage'>
            
            {/* <div className='formlist'></div> */}
            <div className='formlist'>
        {/* <Paper elevation={3} style={paperStyle}> */}
            {
                tags.map((tag) =>
                {
                    return tag === 'hr' ? "" :
                        (
                            
                            <div className="Button" key={i++}>
                                <MyDialogBox

                                    buttonChild=
                                    {
                                        // <AddIcon sx={{ fontSize: "40px" }} />
                                        `Form ${i} Type: ${tags[(i-1)]}`
                                        
                                    }
                                    dataChild=
                                    {
                                        formsToRender[tag]
                                    }
                                    title={keywords[tag]}
                                />
                            </div>
                        )
                })
            }
            <div className='buttondiv'>
                <button className='seeoutput'>
                    <Link to={"../output"}>See output</Link>
                </button>
            </div>
        {/* </Paper> */}
        </div>
        </div>
        </div>

    );
};

export default MainFile;