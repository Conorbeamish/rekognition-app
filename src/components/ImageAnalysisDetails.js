import React from 'react';

const ImageAnalysisDetails = ({label}) => {
    //Take confidence to 2 decimal places
    const confidence = (Math.round(label.Confidence* 100) / 100).toFixed(2);

    return ( 
        <div className="label">
            <div className="label-details">{label.Name} : {confidence}%</div>
            <div className="progress-bar-container" >
                <div className="progress-bar" style={{width: `${confidence - 50}%`}}></div>
            </div>
        </div>
     );
}
 
export default ImageAnalysisDetails;