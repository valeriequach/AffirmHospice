import React from "react";

function About2card({ title, desc, imgUrl }) {
    return (
        
        <div className="h-auto w-full md:h-full md:w-full flex flex-col justify-start items-center py-12 px-8 font-quality gap-4">
            <img 
                src={imgUrl} 
                alt={title}
                className="rounded-full h-64 w-64 object-cover" />
            <h1 className="font-bold text-lg text-center">
                {title}
            </h1>
            <span className="md:text-center">
                {desc}
            </span>
        </div>
        
    )
}

export default About2card