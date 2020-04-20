import React from 'react';
import Info from "./Info";
import Image from "./Image"
import SearchForm from "./SearchForm";

const Homepage = () => {
    return ( 
        <div className="homepage">
            <div className="ls-container">
                <Image />
            </div>
            <div className="rs-container">
                <SearchForm />
                <Info/>
            </div>
        </div>
     );
}
 
export default Homepage;