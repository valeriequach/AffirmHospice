import React from "react"
import services from "../data/services"
import ServiceCard from "./ServiceCard"

function Services(){
    return(
        <div className="flex flex-col">
            <div className="w-screen h-3/5 md:h-4/5">    
                <div className="w-screen h-[45vh] md:h-[45vh] lg:h-[55vh] absolute flex flex-col items-center z-10
                                 bg-qualitydark opacity-70">
                </div>
                <div className="w-screen h-[45vh] md:h-[45vh] lg:h-[55vh] absolute flex flex-col justify-center items-center z-20">
                    <h1 className="text-white text-2xl md:text-3xl lg:text-3xl font-quality font-bold text-center p-4">
                        Services
                    </h1>
                    </div>   
                <img 
                    src="/assets/services stock.jpeg" 
                    alt="clipboard"
                    className="w-screen h-[45vh] md:h-[45vh] lg:h-[55vh] object-cover overflow-auto md:overflow-hidden" />  
            </div>
            <div className=" grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 
                            gap-3 px-4 py-6 md:px-12 md:py-8 bg-gray-800 bg-opacity-5">
                {services.map(services => (
                <ServiceCard
                key={services.id}
                title={services.title}
                desc={services.desc}
                imgUrl={services.imgUrl}
                cardkey={services.cardkey}
                />
            ))}
            </div>
        </div>
    )
}

export default Services