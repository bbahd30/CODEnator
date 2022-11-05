import React, { useEffect, useState } from 'react';
// import * as Links from '../../Links';
// import axios from 'axios';
// import { Grid, Paper, Button, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
// import TextField from '@mui/material/TextField';
// import Dropzone from 'react-dropzone'

const ImageForm = () =>
{
    // const [file, setFile] = useState([]);
    // const handleSubmit = (e) =>
    // {
    //     const data = new FormData();
    //     data.append('image', file, file.name);

    //     const url = Links.images_upload;

    //     fetch(url,
    //         {
    //             method: 'POST',
    //             body: file
    //         })
    //         .then
    //         ((response) =>
    //         {
    //             if (response.status == 200 || response.status == 201)
    //             {
    //                 console.log(response)
    //             }
    //         })
    //         .catch((error) =>
    //         {
    //             console.log(error);
    //         });
    // }

    return (
        window.location = "http://127.0.0.1:8000/userimage/"
        // <>

        //     < div >
        //         <Grid textAlign={'center'}>
        //             <Paper elevation={0} style={paperStyle}>

        //                 {/* {added ?
        //                 (
        //                     <Button variant="text" type='submitClicked' sx={{ marginBottom: "30px" }} transition="all .2s"
        //                     >Season successfully added</Button>
        //                 )
        //                 :
        //                 <div></div>} */}

        //                 <Grid>
        //                     <form onSubmit={handleSubmit} alignitem={'center'}>

        //                         <input type="file" onChange={(e) => setFile(e.target.files[0])} />


        //                         <Button variant="contained" onClick={handleSubmit} sx={{ marginTop: '30px' }}
        //                         >
        //                             Upload
        //                         </Button>

        //                     </form>
        //                 </Grid>
        //             </Paper>
        //         </Grid >
        //     </>

        //     <div {...getRootProps()}>
        //         <input {...getInputProps()} />
        //         {
        //             isDragActive ? <p>Drop img</p> : <p>Upload img</p>
        //         }
        //     </div>
        //     <div>
        //         {img.map((upFile) =>
        //         {
        //             return (
        //                 <div>
        //                     <img src={upFile.preview} />
        //                 </div>
        //             )
        //         })}
        //     </div>

        //     <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
        //         {({ getRootProps, getInputProps }) => (
        //             <section>
        //                 <div {...getRootProps()}>
        //                     <input {...getInputProps()} />
        //                     <p>click to select image</p>
        //                 </div>
        //             </section>
        //         )}
        //     </Dropzone>
        // </>
    );
};

export default ImageForm;