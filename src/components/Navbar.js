import React from 'react';
import Particles from "react-particles-js";

const Navbar = () => {
    return ( 
        <div className="nav">
            <Particles 
                className="particles"
                params={{
                    particles:{
                        number: {
                            value: 50, 
                            density: {
                              enable: true,
                              value_area: 300
                            }
                        }
                    },
            		interactivity:{
                        detect_on:"canvas",
                        events:{
                          onhover:{
                            enable:true,
                            mode: "repulse"
                          }
                        },
                    }
            	}}
            />
            <div className="nav-container">
                <h1>Image Analyser</h1>
                <div className="nav-text">
                    Use machine learning to identify features in your images
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;