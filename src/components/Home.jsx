import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import About2 from "./About2";
import HomeServices from "./HomeServices";

function Home(){
    const navigate = useNavigate();

    const containerVariants = {
        initial: { opacity: 0, x: -50 },
        animate: {
          opacity: 1,
          x:0,
          transition: {
            ease: "easeInOut",
          },
        },
      };
      const variant = {
        initial: { opacity: 0, y: 100 },
        animate: {
          opacity: 1,
          y:0,
          transition: {
            ease: "easeInOut",
            delay: 0.2,
            duration: 0.8,
          },
        },
      };


    return(
        <>
        <div className="w-screen h-[90vh] md:h-[100vh] bg-[#f9f9f9]">
            <div className="w-screen h-[90vh] md:h-[100vh] absolute flex flex-col justify-center items-center z-20">
                <span className="text-center text-3xl md:text-5xl font-quality font-bold text-white pb-6">Care That Comes to You</span>
            </div>
            <div className=" w-screen h-[90vh] md:h-[100vh] absolute bg-qualitydark opacity-50 z-10"></div>
            <img 
                className="w-screen h-[90vh] md:h-[100vh] lg:h-screen object-cover overflow-auto md:overflow-hidden drop-shadow-xl"
                src="/assets/affirm landing.jpeg" 
                alt="Hospice and Home Health"
            />
        </div>


        <div className="w-screen h-[80vh] md:h-[85vh] bg-[#ededed] flex justify-center items-center">
            <motion.div 
            className=" w-10/12 md:w-11/12 h-5/6 flex flex-col md:flex-row rounded-md shadow-xl bg-white"
            initial={'initial'}
            whileInView={'animate'}
            variants={containerVariants}>
                <div className="w-full h-1/4 md:w-1/2 md:h-full overflow-hidden rounded-t-md md:rounded-tr-none md:rounded-bl-md md:rounded-tl-md bg-gray-500">
                    <img 
                        src="/assets/hands2.webp" 
                        alt="hands"
                        className="w-full h-full object-cover opacity-70" />
                </div>
                <div className="w-full h-3/4 md:w-2/3 md:h-full flex flex-col justify-start md:justify-center items-start p-6 gap-4 font-quality bg-pink-50">
                    <h2 className="font-bold text-qualitydark text-3xl">Welcome to Affirm Hospice</h2>
                    <span>We are serving in the areas across California. Our services are provided by a team of trained and experienced professionals. We are available to offer assistance and support to the patient and their family 24 hours a day, 7 days a week.</span>
                    <button 
                    className="text-white bg-quality opacity-80 hover:bg-quality hover:opacity-100 rounded-md px-8 py-3" onClick={() => navigate('/About')}>
                    Learn More
                </button>
                </div>
            </motion.div>
        </div>

        <div className="w-screen h-[210vh] md:h-[85vh] bg-[#ededed] flex justify-center items-center">
          <About2/>
        </div>

        <div className="w-screen h-[90vh] md:h-[95vh]">
        <div className="w-screen h-[90vh] md:h-[95vh] absolute flex flex-col justify-center items-center z-20">
            <span className="text-white font-quality font-bold text-5xl">Our Services</span>
            <motion.div 
            className="hidden lg:inline w-full h-fit"
            initial={'initial'}
            whileInView={'animate'}
            variants={variant}>
            <HomeServices/>
            </motion.div>
            <Link to={"/Services"}>
            <button className="text-white bg-quality opacity-80 hover:bg-quality hover:opacity-100 rounded-md px-8 py-3 mt-12 md:mt-0">
                View Our Services
            </button>
            </Link>
        </div>
        <div className=" w-screen h-[90vh] md:h-[95vh] absolute bg-qualitydark opacity-50 z-10">
        </div>
            <img src="/assets/stethoscope.jpg" alt="stethoscope" className="w-screen h-[90vh] md:h-[95vh] object-cover overflow-auto md:overflow-hidden -z-20" />
        </div>

        <div className="bg-[#ededed] w-screen h-auto flex flex-col font-quality gap-3 p-8 md:p-12 text-center">
          <h1 className="text-5xl">
          Contact Us
          </h1>
          <span>Let us know about your questions or concerns. We will get back to you as soon as we can.</span>
          <span
          className="font-bold text-lg pt-4">Affirm Hospice</span>
          <span>5050 Palo Verde Street, Suite 106, Montclair, CA, 91763</span>
          <span>Main Phone: 909 475-0767</span>
          <span>Fax: 909-236-5373</span>
        </div>
        </>
    )
}

export default Home