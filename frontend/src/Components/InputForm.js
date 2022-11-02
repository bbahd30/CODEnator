// import React, { useEffect, useState } from 'react';
// import * as Links from '../Links';
// import axios from 'axios';
// import TextField from '@mui/material/TextField';

// const InputForm = () =>
// {
//     //     const links_matcher =
//     //     {
//     //         'tags': Links.tags_api,
//     //         'images': Links.images_api,
//     //     }

//     const [formValues, setFormValues] = useState([]);

//     const handleChange = (e) =>
//     {
//         const { name, value } = e.target;
//         setFormValues({ ...formValues, [name]: value });
//     }

//     const fields =
//     {
//         'image': ''
//     }
//     const [formErrors, setFormErrors] = useState([]);
//     const [added, setAdded] = useState(false);
//     const [isSubmitClicked, setIsSubmitClicked] = useState(false);

//     const handleSubmit = (e) =>
//     {
//         setIsSubmitClicked(true);
//         e.preventDefault();
//         setFormErrors(validate(formValues));
//     }

//     const validate = (values) =>
//     {
//         const errors = {};

//         return errors;
//     }

//     const saveToData = (formValues) =>
//     {
//         // set using the ...initial and formvalues
//         const url = Links.post_image_api;
//         const data = formValues
//         axios
//             .post
//             (
//                 url, data,
//             )
//             .then
//             ((response) =>
//             {
//                 if (response.status == 200 || response.status == 201)
//                 {
//                     setAdded(true);
//                 }
//             })
//             .catch((error) =>
//             {
//                 console.log(error);
//             });
//     }

//     useEffect(() =>
//     {
//         if (Object.keys(formErrors).length === 0 && isSubmitClicked)
//         {
//             saveToData(formValues);
//             setTimeout(() =>
//             {
//                 setAdded(false);
//             }, (4000));
//         }
//     }, [formErrors]);



//     console.log(tags)
//     return (
//         // <div>
//         //     {
//         //         tags.map(tag =>
//         //         (
//         //             <TextField
//         //                 id="outlined-basic"
//         //                 // label="Question Text"
//         //                 // placeholder='Enter Question Text'
//         //                 label={fields[tag]}
//         //                 placeholder={placeholderStr}
//         //                 variant="outlined"
//         //                 fullWidth
//         //                 onChange={handleChange}
//         //                 name={props.field}
//         //                 value={formValues[props.field]}
//         //                 error={Boolean(formErrors[props.field])}
//         //                 sx={{ marginBottom: '20px' }}
//         //                 helperText={formErrors[props.field]}
//         //             />
//         //         ))
//         //     }
//         // </div>
//         <Grid textAlign={'center'}>
//             <Paper elevation={0} style={paperStyle}>

//                 {added ?
//                     (
//                         <Button variant="text" type='submitClicked' sx={{ marginBottom: "30px" }} transition="all .2s"
//                         >Uploaded successfully</Button>
//                     )
//                     :
//                     <div></div>}

//                 <Grid>
//                     <form onSubmit={handleSubmit} alignitem={'center'}>
//                         <TextField
//                             id="outlined-basic"
//                             label="Round Name"
//                             placeholder='Enter Round Name'
//                             variant="outlined"
//                             fullWidth
//                             onChange={handleChange}
//                             name="round_name"
//                             value={formValues.round_name}
//                             error={Boolean(formErrors.round_name)}
//                             sx={{ marginBottom: '20px' }}
//                             helperText={formErrors.round_name}
//                         />
//                         <TextField
//                             id="outlined-basic"
//                             label="Round Type"
//                             select
//                             variant="outlined"
//                             fullWidth
//                             onChange={handleChange}
//                             name="round_type"
//                             value={formValues.round_type || ""}
//                             error={Boolean(formErrors.round_type)}
//                             sx={{ marginBottom: '20px' }}
//                             helperText={formErrors.round_type}
//                         >
//                             <MenuItem value='int'>
//                                 Interview
//                             </MenuItem>
//                             <MenuItem value='t'>
//                                 Test
//                             </MenuItem>
//                         </TextField>
//                         <Button variant="contained" type='submitClicked' onClick={handleSubmit} sx={{ marginTop: '30px' }}>Add</Button>

//                     </form>
//                 </Grid>
//             </Paper>
//         </Grid >
//     );
// };

// export default InputForm;


// const AddRoundForm = () =>
// {
//     const paperStyle =
//     {
//         padding: '10px 20px',
//         width: '20vw'
//     }

//     const params = useParams();
//     const initial = { round_name: "", round_type: "" };
//     const [formValues, setFormValues] = useState(initial);
//     const [formErrors, setFormErrors] = useState([]);
//     const [added, setAdded] = useState(false);
//     const [isSubmitClicked, setIsSubmitClicked] = useState(false);

//     const handleChange = (e) =>
//     {
//         const { name, value } = e.target;
//         setFormValues({ ...formValues, [name]: value });
//     }

//     const handleSubmit = (e) =>
//     {
//         setIsSubmitClicked(true);
//         e.preventDefault();
//         setFormErrors(validate(formValues));
//     }

//     const validate = (values) =>
//     {
//         const errors = {};

//         if (!values.round_name)
//         {
//             errors.round_name = "Round name is required";
//         }
//         if (!values.round_type)
//         {
//             errors.round_type = "Round type is required";
//         }

//         return errors;
//     }

//     const saveToData = (formValues) =>
//     {
//         const url = Links.rounds_api;
//         axios
//             .post
//             (
//                 url,
//                 {
//                     round_name: formValues.round_name,
//                     round_type: formValues.round_type,
//                     season_id: params.id
//                 })
//             .then
//             ((response) =>
//             {
//                 // todo:
//                 if (response.data['msg'] === "Round Added")
//                 {
//                     setAdded(true);
//                 }
//             })
//             .catch((error) =>
//             {
//                 console.log(error);
//             });
//     }

//     useEffect(() =>
//     {
//         // if (Object.keys(formErrors).length === 0 && isSubmitClicked)
//         {
//             saveToData(formValues);
//             setFormValues({ round_name: "", round_type: "" });
//             setTimeout(() =>
//             {
//                 setAdded(false);
//             }, (4000));
//         }
//     }, [formErrors])

//     return (
//         <></>

//     );
// };
