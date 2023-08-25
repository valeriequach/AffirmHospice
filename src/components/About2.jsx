import React from "react";
import About2card from "./About2card";
import about2 from "../data/about2";

function About2(){
return(
    <div className=" grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 
                            gap-6 px-4 md:px-12">
                {about2.map(about2 => (
                <About2card
                key={about2.id}
                title={about2.title}
                desc={about2.desc}
                imgUrl={about2.imgUrl}
                />
            ))}
    </div>
    
)
}

export default About2