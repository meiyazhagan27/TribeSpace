"use client"
import Image from "next/image";
import React from "react";

import { delay, motion } from "framer-motion"

function WhyUs() {
  const platform = [
    {
      title: "Customizable,flexible,impactful",
      description:
        " Just like people, communities are always changing and growing. Tribespace offers unmatched versatility and depth, ensuring it evolves alongside your needs. Stay ahead with Tribespace, yourreliable partner now and in the future.",
        icons:"/assets/logo3.png",
    },
    {
      title: "Your branded all-in-one hub",
      description:
        " Transform your digital presence and make your community proud withTribespace. Enjoy a custom URL, unique visual identity, and dedicated mobile app. Enhance your engagement strategies with our all-in-one platform, offering a comprehensivesuite ofmarket-leading features designed to grow and strengthen your community.",
        icons:"/assets/logo2.png",
    },
    {
      title: "Focus on innovation",
      description:
        "Just like people, communities are always changing and growing.Tribespace offers unmatched versatility and depth, ensuring it evolves alongside your needs. Stay ahead with Tribespace, your reliable partner now and in the future.",
        icons:"/assets/logo1.png",
    },
  ];

  return (
    <div className="mt-20 ">
      <div>
        <p className=" lg:text-[45px] md:text-[40px] text-[24px] lg:px-40 md:px-[100px] px-8 font-bold  text-center">
          Mobilize your community with one{" "}
          <span className="text-blue-700">communication platform.</span>
        </p>
      </div>

      <div className="grid lg:grid-cols-3  justify-center gap-7 pt-14 px-20 ">
        
          {platform.map((platforms, index) => (
            <div key={index} className=" flex justify-center items-center  ">
              <motion.div
                 initial={{ opacity: 0, y: 50 }} 
                 animate={{ opacity: 1, y: 0 }}  
                 transition={{ delay: 0.5, duration: 1 }}
                className="bg-[rgba(255,255,255,0.04)] lg:h-[490px] lg:w-[360px] md:w-[440px] md:h-[530px] h-[480px] w-[300px] shadow-2xl   cursor-pointer   border-2 rounded-[20px] bg-white hover:scale-105 duration-500 transform  "
              >
                <div className="flex justify-center mt-10">
                <div className="relative w-[80px] h-[80px] ">
                <Image
                  src={platforms.icons}
                  alt="icons"
                  fill
                  className="object-cover flex justify-center "
                  loading="lazy"
                />
              </div>
                </div>
                  
                <div className=" h-[100px] flex justify-center items-center  ">
                  <h4 className="lg:text-[20px] md:text-[24px] text-[18px] font-bold text-blue-700     ">
                    {platforms.title}
                  </h4 >
                  
                </div>
                <div className="text-center  ">
                <p className=" px-8 lg:text-[16px] md:text-[20px] text-[14px] ">{platforms.description}</p>
                </div>
              </motion.div>
            </div>
          ))}
        
      </div>

    </div>
  );
}

export default WhyUs;
