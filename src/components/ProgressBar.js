import React from 'react';
import {Frame} from "framer"

export function ProgressBar(props) {

    const {progress} = props
    return(
        <Frame
        height ="1rem"
        borderRadius={22}
        background="#fefefe"
        overflow="hidden"
        border="2px solid #37667e"
        >
            <Frame 
                height={"100%"} 
                initial={{
                    width: "0%"
                }}
                animate={{
                    width: progress + "%"
                }}
                transition={{
                    ease: "linear",
                    duration: 2
                }}
                background="#37667e"
            />
        </Frame>
    )
}