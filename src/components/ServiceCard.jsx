import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function ServiceCard({ title, desc, imgUrl, cardkey }) {
  const [hover, setHover] = useState(false);

  const view = {
    initial: { scale: 0 },
    animate: { scale: 1, duration: 1.8 },
    exit: {scale: 0, duration: 1.8 }
  };

    return (
        
        <div
            className="relative flex w-full h-96 shadow-xl rounded-md"
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}>
            <div className="absolute w-full h-full bg-gray-800 opacity-50 z-10 rounded-md"></div>
            <div className="absolute w-full h-full flex justify-center items-center 
                            font-quality font-bold text-center text-white text-xl md:text-2xl z-20 rounded-md">{title}</div>
            <img 
                src={imgUrl} 
                alt={desc}
                className="object-cover overflow-auto rounded-md" />
            <AnimatePresence>
            {hover &&(
                
                <motion.div 
                className="absolute flex justify-center items-center w-full h-full bg-qualitydark opacity-95 shadow-xl py-8 z-30 rounded-md"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={view}
                transition={{ease: "easeInOut"}}
                key={cardkey}>
                <div className="container p-3 text-white">
                <h1 className="text-lg md:text-xl font-quality font-bold pl-4">{title}</h1>
                <p className="w-auto font-quality pt-3 pb-6 px-4 text-xs lg:text-sm">{desc}</p>
                </div>
            </motion.div>
            )}
            </AnimatePresence>
        </div>
        
    )
}

export default ServiceCard