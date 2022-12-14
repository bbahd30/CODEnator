import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { get_image_api } from '../../Links';
import { get_images_api } from '../../Links';

const ImageRenderer = () =>
{
    const [image, setImage] = useState([]);

    const fetchImageData = () =>
    {
        const url = get_images_api;
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
                    setImage(response.data)
                }
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }

    useEffect(() =>
    {
        fetchImageData();
    }, []);

    useEffect(() =>
    {
        const componentCode = image.opening_tag + image.text + image.closing_tag;
        // todo: need to add this to a file
    }, [image])

    return (
        <div>
            {/* <image style={{textAlign: "center",height:"500px",width:"500px"}}>
                {image.text}
            </image> */}

            <img
                tyle={{ textAlign: "center", height: "500px", width: "500px" }}
                src={require('../images/bg3.jpg')}
                width={"80px"} height={"70px"} />
        </div>
    );
};

export default ImageRenderer;