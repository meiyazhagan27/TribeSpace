"use clent"
import React from "react";
import { GiJetpack } from "react-icons/gi";
import { IoMdChatbubbles } from "react-icons/io";
import { MdOutlineMonetizationOn } from "react-icons/md";
import { TbBrandBinance } from "react-icons/tb";
import { VscOrganization } from "react-icons/vsc";

function AllInOne() {
    const allplatform = [
        {
          title: "Organize",
          description:
            " Structure your user base more effectively and automate process",
            icons:<VscOrganization />,
        },
        {
          title: "Brand",
          description:
            " Reinforce and project your brand and cultural identity",
            icons:<TbBrandBinance />,
        },
        {
          title: "Engage",
          description:
            "Inspire & motivate your users and drive engagement",
            icons:<IoMdChatbubbles />,
        },
        {
          title: "Empower",
          description:
            "Enable independent networking and sharing",
            icons:<GiJetpack />,
        },
        {
          title: "Monetize",
          description:
            "Facilitate revenue generation and demonstrate ROI.",
            icons:<MdOutlineMonetizationOn  />
            ,
        },
      ];
    
  return (
    <div className=" lg:h-[650px] md:h-[1300px] h-[1700px] bg-[#fbf9fa]">
      <div className="lg:px-0 md:px-0 px-5">
        <div>
          <h1 className="text-center text-gray-400 font-medium pt-14">
            {" "}
            WHAT IS TRIBESPACE
          </h1>
        </div>
        <div>
          <p className="text-center lg:text-[50px] md:text-[40px] text-[25px] font-bold">
            Your all-in-one community <br />{" "}
            <span className="text-blue-700">platform</span>.
          </p>
        </div>
      </div>
      <div>
        
      <div className="grid lg:grid-cols-5  md:gap-5 lg:space-y-0 md:gap-y-10  md:grid-cols-2 justify-center lg:gap-7 pt-14 lg:px-20 md:px-[80px] ">
        
        {allplatform.map((allplatforms, index) => (
          <div key={index} className=" flex justify-center items-center ">
            <div
              className="bg-[rgba(255,255,255,0.04)] lg:h-[280px]  lg:w-[360px] md:w-[300px] w-[300px] h-[290px]   cursor-pointer   rounded-[10px] md:h-[280px]    hover:bg-white duration-500 transform  "
            >
              <div className="flex justify-center text-blue-700 lg:text-[50px] md:text-[55px] text-[54px]  mt-6">
                {allplatforms.icons}
              <div >
            
            </div>
              </div>
                
              <div className=" lg:h-[100px] md:h-[50px] flex justify-center items-center lg:pt-0 md:pt-10 pt-2 ">
                <h4 className=" lg:text-[30px] md:text-[30px] text-[24px] font-bold">
                  {allplatforms.title}
                </h4 >
                
              </div>
              <div className="text-center lg:pt-0 md:pt-10  pt-10  ">
              <p className=" lg:px-10 lg:text-base md:text-[20px]  md:px-11 px-10  text-[18px] ">{allplatforms.description}</p>
              </div>
            </div>
          </div>
        ))}
      
    </div>
      </div>
    </div>
  );
}

export default AllInOne;
