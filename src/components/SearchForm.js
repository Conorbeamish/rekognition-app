import React, {useState, useContext} from 'react';
import axios from "axios";
import {ImageAnalysisContext} from "../contexts/ImageAnalysisContext";

const SearchForm = () => {
    const { dispatch } = useContext(ImageAnalysisContext);
    const [url, setUrl ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("/", {url})
        .then((res) => {
            const resData = res.data
            dispatch({type: "ADD_IMG_DATA", imageData: {resData, url}})
        })
        .catch((res) => {
            console.log(res)
        })
        setUrl("")
    }
    const handleChange = (e) =>{
        setUrl(e.target.value) 
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" onChange = {handleChange} value={url}/>
            <button type="submit">Submit</button> 
        </form>
    );
}
 
export default SearchForm;