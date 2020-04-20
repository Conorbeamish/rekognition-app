import React from 'react';

const ImageAnalysis = ({label}) => {
    //Take confidence to 2 decimal places
    const confidence = (Math.round(label.Confidence* 100) / 100).toFixed(2);

    return ( 
        <div className="label">
            <div className="label-details">{label.Name} : {confidence}%</div>
            <div className="progress-bar-container" >
                <div className="progress-bar" style={{width: `${confidence}%`}}></div>
            </div>
        </div>
     );
}
 
export default ImageAnalysis;