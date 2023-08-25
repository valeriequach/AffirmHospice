import React, { useState } from "react";


function HomeCard({ title, desc, imgUrl }) {
    return (
        
        <div
            className="relative flex w-full h-96 shadow-xl rounded-md">
            <div className="absolute w-full h-full bg-gray-800 opacity-50 z-10 rounded-md"></div>
            <div className="absolute w-full h-full flex justify-center items-center 
                            font-quality font-bold text-center text-white md:text-2xl z-20 rounded-md">{title}</div>
            <img 
                src={imgUrl} 
                alt={desc}
                className="object-cover overflow-auto rounded-md" />
        </div>
        
    )
}

export default HomeCard