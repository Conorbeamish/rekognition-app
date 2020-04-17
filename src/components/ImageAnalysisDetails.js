import React from 'react';

const ImageAnalysisDetails = ({label}) => {
    //Take confidence to 2 decimal places
    const confidence = (Math.round(label.Confidence* 100) / 100).toFixed(2);

    return ( 
        <li>
            {label.Name} : {confidence}%
        </li>
     );
}
 
export default ImageAnalysisDetails;