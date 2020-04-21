import React, {useState, useContext} from 'react';
import axios from "axios";
import {ImageAnalysisContext} from "../contexts/ImageAnalysisContext";
import {IsLoadingContext} from "../contexts/IsLoadingContext";

const SearchForm = () => {
    const { dispatchImage } = useContext(ImageAnalysisContext);
    const { dispatchLoading} = useContext(IsLoadingContext);
    const [url, setUrl ] = useState("")
    const [errors, setErrors] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors("")
        dispatchLoading({type: "SET_LOADING_TRUE"});

        axios.post("/", {url})
        .then((res) => {
            const resData = res.data
            dispatchImage({type: "ADD_IMG_DATA", imageData: {resData, url}})
            dispatchLoading({type: "SET_LOADING_FALSE"})
        })
        .catch((err)=> {
            setErrors(err.response.data.message)
            dispatchLoading({type: "SET_LOADING_FALSE"})
        })
        setUrl("")
    }
    const handleChange = (e) =>{
        setUrl(e.target.value) 
    }


    return ( 
        <div className="search">
            <h3>Search for an image</h3>
            <p>To analyse an image simply input the image url below, you may have to right click an image you find online and select "copy image url".</p>
            <div style={{height: "1rem"}}>{errors}</div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange = {handleChange} value={url} placeholder="Enter image url..."/>
                <button type="submit">Submit</button> 
            </form>
        </div>
    );
}
 
export default SearchForm;