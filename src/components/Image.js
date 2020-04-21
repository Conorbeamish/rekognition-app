import React, {useContext} from 'react';
import {ImageAnalysisContext} from "../contexts/ImageAnalysisContext";
import {IsLoadingContext} from "../contexts/IsLoadingContext";

const Image = () => {
    const defaultImg =  require("../images/homepage3.jpg")
    const {imageData} = useContext(ImageAnalysisContext);
    const {isLoading} = useContext(IsLoadingContext);
    const imgUrl = imageData.url ? imageData.url : defaultImg;

    return isLoading ? (
        <div className="image-loading"><i className="fa fa-3x fa-spinner fa-spin"></i></div>
     ) : (
        <img className="image" src={imgUrl}></img> 
    )


}
 
export default Image;