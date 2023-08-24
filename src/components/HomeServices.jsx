import React from "react"
import homeservices from "../data/homeservices"
import ServiceCard from "./ServiceCard"

function HomeServices() {
return(
<div className=" grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 
                            gap-3 px-4 py-6 md:px-12 md:py-8">
                {homeservices.map(homeservices => (
                <ServiceCard
                key={homeservices.id}
                title={homeservices.title}
                desc={homeservices.desc}
                imgUrl={homeservices.imgUrl}
                />
            ))}
            </div>
)}

export default HomeServices
