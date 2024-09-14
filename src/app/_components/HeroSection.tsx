"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { delay, motion } from "framer-motion"

function HeroSection() {
  return (
    <div className=" lg:h-[1200px] md:h-[1000px] h-[650px]  flex items-center justify-center bg-gradient-to-b from-[#eaedfe]">
    <div className="lg:px-0 md:px-[80px] px-0">
      <motion.div 
      // initial={{opacity:0,y:10}}
      // animate={{opacity:1, y: 1}}
      transition={{delay:0,duration:0}}>
        <p className="font-bold lg:text-[50px] md:text-[40px] text-[25px] text-center">
          Transform Your Community Experience with
        </p>
      </motion.div>
      <div className="flex  justify-center text-center">
        <p className="font-bold lg:text-[50px] md:text-[40px] text-[25px] text-blue-700">
          Future-Forward Innovation
        </p>
      </div>
      <div className="flex justify-center pt-3">
        <p className="text-center text-[9px] md:text-[18px]">
          User-Friendly, Inclusive, and Innovative Your Community, Your Rules
        </p>
      </div>
      <div className="flex justify-center md:space-x-[40px] pt-10 space-x-8  ">
        <Link href={"/sign-up"}>
        <button className="bg-blue-600 rounded-[100px] md:h-[45px] md:w-[150px] h-[30px] w-[90px] text-white text-[12px] md:text-[17px]  lg:text-[17px] hover:bg-blue-900">
          Get started
        </button>
        </Link>
        <Link href={"/sign-up"}>
        <button className=" border-2 rounded-[100px] md:h-[47px] md:w-[155px] h-[30px] w-[100px] text-[12px] md:text-[17px] lg:text-[17px]  hover:bg-gray-300">
          Book demo
        </button>
        </Link>
      </div>
      <div className="lg:pt-16 md:pt-16 pt-10">
      <div className="relative lg:h-[650px] lg:w-[900px] md:h-[500px] md:w-[600px] h-[320px] w-[320px] mx-auto">
        <Image
          src={"/assets/appimg.png"}
          alt={"appimg"}
          fill
          className="border-2 rounded-lg"
          loading="lazy"
        />
      </div>
      </div>
    
    </div>
    </div> 
    
  );
}

export default HeroSection;



