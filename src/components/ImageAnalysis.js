import React from 'react';

const ImageAnalysis = ({label}) => {
    //Take confidence to 2 decimal places
    const confidence = (Math.round(label.Confidence* 100) / 100).toFixed(0);
    const width = `${confidence}%`

    return ( 
        <div className="label">
            <div className="label-details">{label.Name} : {width}</div>
            <div className="progress-bar-container" >
                <div className="progress-bar" style={{width}}></div>
            </div>
        </div>
     );
}
 
export default ImageAnalysis;