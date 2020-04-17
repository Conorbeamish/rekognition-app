import React, {createContext, useReducer} from 'react';
import {imageAnalysisReducer} from "../reducers/imageAnalysisReducer";

export const ImageAnalysisContext = createContext();

const ImageAnalysisProvider = (props) => {

    const [imageData, dispatch] = useReducer(imageAnalysisReducer, [])

    return ( 
        <ImageAnalysisContext.Provider value ={{imageData, dispatch}} >
            {props.children}
        </ImageAnalysisContext.Provider>
     );
}
 
export default ImageAnalysisProvider;
