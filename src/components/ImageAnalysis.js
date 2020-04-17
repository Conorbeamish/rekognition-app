import React, {useContext} from 'react';
import ImageAnalysisDetails from "../components/ImageAnalysisDetails";
import {ImageAnalysisContext} from "../contexts/ImageAnalysisContext";
import {IsLoadingContext} from "../contexts/IsLoadingContext";
import { v4 as uuidv4 } from 'uuid';

const ImageAnalysis = () => {
    const {imageData} = useContext(ImageAnalysisContext);
    const {isLoading} = useContext(IsLoadingContext);
    return imageData.url? (
        <div class="analysis">
            <img className="analysis-image" src={imageData.url}></img>
            <div>
                {imageData.resData.Labels.map(label => {
                    return(<ImageAnalysisDetails label={label} key={uuidv4()} />)
                })}
            </div>
        </div>
    ) : (
       <div>
           {isLoading ? <div>Loading </div> : <img className="analysis-image" ></img>}
       </div>
    )
}
 
export default ImageAnalysis;