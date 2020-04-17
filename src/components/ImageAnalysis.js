import React, {useContext} from 'react';
import ImageAnalysisDetails from "../components/ImageAnalysisDetails";
import {ImageAnalysisContext} from "../contexts/ImageAnalysisContext";
import { v4 as uuidv4 } from 'uuid';

const ImageAnalysis = () => {
    const {imageData} = useContext(ImageAnalysisContext);
    return imageData.url? (
        <div class="analysis">
            <img className="analysis-image" src={imageData.url}></img>
            <ul>
                {imageData.resData.Labels.map(label => {
                    return(<ImageAnalysisDetails label={label} key={uuidv4()} />)
                })}
            </ul>
        </div>
    ) : (
        <h1> No Image </h1>
    )
}
 
export default ImageAnalysis;