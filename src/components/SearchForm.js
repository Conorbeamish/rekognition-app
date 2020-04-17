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
        dispatchImage({type: "REMOVE_IMG_DATA"});

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
        <form onSubmit={handleSubmit}>
            {errors.length > 0 && (
                <div>{errors}</div>
            )}
            <input type="text" onChange = {handleChange} value={url}/>
            <button type="submit">Submit</button> 
        </form>
    );
}
 
export default SearchForm;