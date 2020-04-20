import React, {useContext} from 'react';
import {ImageAnalysisContext} from "../contexts/ImageAnalysisContext";
import {IsLoadingContext} from "../contexts/IsLoadingContext";

const Image = () => {
    const defaultImg =  require("../images/homepage.jpg")
    const {imageData} = useContext(ImageAnalysisContext);
    const {isLoading} = useContext(IsLoadingContext);
    const imgUrl = imageData.url ? imageData.url : defaultImg;

    return (
        <img className="image" src={imgUrl}></img>
    );
}
 
export default Image;