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
            <div>
                {imageData.resData.Labels.map(label => {
                    return(<ImageAnalysis label={label} key={uuidv4()} />)
                })}
            </div>
        </div>
    ) : (
       <div className="info">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dapibus, augue vitae tincidunt fringilla, dui justo porta velit, vel sagittis quam turpis sed erat. Integer consequat magna massa, laoreet mollis neque porttitor vitae. Nam a suscipit dui. Vestibulum vulputate neque ut ultrices varius. Vestibulum aliquam ipsum eros, ut maximus ex accumsan eget. Donec suscipit massa tincidunt ex maximus imperdiet. Praesent euismod sapien nec lorem finibus, et dictum leo fringilla. Cras posuere malesuada dictum. Nulla dolor neque, facilisis id urna eget, lobortis ultricies orci. Integer urna lectus, sodales eget dictum vel, facilisis et tellus. Sed ac sapien tempor, sodales odio ut, posuere turpis. Duis feugiat ex nec mollis vulputate. Mauris et placerat neque. Vestibulum volutpat nisi sed dui interdum, et ornare sapien rutrum. Pellentesque suscipit, odio vitae hendrerit convallis, nulla mi laoreet lorem, sit amet vestibulum sapien enim at metus.
       </div>
    )
}
 
export default Info;