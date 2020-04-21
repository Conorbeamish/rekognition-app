import React, {useContext} from 'react';
import ImageAnalysis from "./ImageAnalysis";
import {ImageAnalysisContext} from "../contexts/ImageAnalysisContext";
import {IsLoadingContext} from "../contexts/IsLoadingContext";
import { v4 as uuidv4 } from 'uuid';

const Info = () => {
    const {imageData} = useContext(ImageAnalysisContext);
    const {isLoading} = useContext(IsLoadingContext);
    return imageData.url? (
        <div className="info">
            <h3>Analysis</h3>
            <div>
                {imageData.resData.Labels.map(label => {
                    return(<ImageAnalysis label={label} key={uuidv4()} />)
                })}
            </div>
        </div>
    ) : (
       <div className="info">
           <h3>Analysis</h3>
           This application..........
       </div>
    )
}
 
export default Info;