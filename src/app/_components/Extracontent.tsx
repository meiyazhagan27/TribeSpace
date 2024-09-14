import Image from "next/image";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

function Extracontent() {
  return (
    <div>
      <div className="w-[85%] mx-auto bg-[#22223a] h-[500px] rounded-lg mt-10 flex  justify-center items-center">
        <div className=" text-center ">
          <ImQuotesLeft className=" lg:text-[90px] md:text-[60px] text-[50px] mx-auto  text-[#fff6e3]" />
          <p className="text-center leading-loose text-[15px] lg:text-xl md:text-[19px] text-[#f9fef5] font-medium lg:w-[700px] w-[280px] md:w-[500px]   mx-auto">
            In the last edition we launched Circle, a next-generation online
            discussion forum. It has had a profound impact on the
            community-building aspect of the course. It is far more modern,
            user-friendly, interactive, and muti-faceted than any other platform
            out there, and we are making it the home of our student community.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <div>
          <p className="text-center lg:text-[50px] md:text-[40px] text-[24px] font-bold lg:w-1/2 mx-auto md:px-0 px-11">
            Get the power to take your <span className="text-blue-700"> business to the next level.</span>
          </p>
        </div>
        <div className="bg-[#f9f4fa] lg:w-[75%] md:w-[85%] w-[90%] rounded-xl mx-auto h-[460px] mt-10 lg:flex md:flex items-center justify-center">
          <div className="lg:w-1/2 lg:px-[100px] md:px-[50px] px-[20px] mx-auto">
            <p className="lg:text-[40px] md:text-[30px] text-[20px] font-bold lg:pt-0 md:pt-0 pt-5 ">Freedom and control.</p>
            <p>Doin’ what you want.</p>
            <p className="pt-10 lg:text-[15px] md:text-[15px] text-[12px]">
              Transform your website or app with endless possibilities using
              thousands of built-in native integrations and web-view
              functionality. Developers can take full advantage of our
              open-source platform, customizing themes and adding new features
              with ease using our Developer Toolkit.
            </p>
          </div>
          <div className="w-1/2  lg:px-0 md:px-0 px-4 lg:mt-0 md:mt-0 mt-5">
            <div className="relative lg:h-[350px] lg:w-[500px] md:h-[250px] md:w-[290px] h-[200px] w-[320px] mx-auto">
              <Image
                src={"/assets/business2.png"}
                alt={"appimg"}
                fill
                className=" border rounded-md shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className=" lg:w-[75%] md:w-[85%] w-[90%] mx-auto md:h-[550px]  mt-10 md:flex items-center gap-12 ">
            <div className="md:w-1/2 lg:px-[80px] md:px-[20px] px-10   mx-auto md:h-full h-[510px] bg-[#bebef7] rounded-2xl " >
            <div className="h-1/2 space-y-7 pt-10">
            <p className="lg:text-5xl md:text-[30px] text-[30px] font-bold">User-experience.</p>
            <p className="text-gray-600">Feelin’ good about it.</p>
            <p className="text-gray-600">Our platform is meticulously designed to ensure that every interaction is smooth and enjoyable for your members, no matter the device they use.</p>
            </div>
            <div className="pt-7"> <div className="relative lg:h-[220px] lg:w-[220px] md:h-[200px] md:w-[200px] h-[200px] w-[200px] mx-auto md:mt-0 mt-5">
              <Image
                src={"/assets/user.jpg"}
                alt={"user"}
                fill
                className=" border rounded-[500px]"
                loading="lazy"
              />
            </div></div>
            </div>
            <div className="md:w-1/2 lg:px-[80px] md:px-[20px] px-10 mx-auto md:h-full h-[550px] bg-[#f6efe7] rounded-2xl"> 
            <div className="h-1/2 mt-3">
            <div className="relative lg:h-[250px] lg:w-full md:h-[200px] md:w-[250px] h-[240px] w-[270px]  mx-auto ">
              <Image
                src={"/assets/business2.png"}
                alt={"appimg"}
                fill
                className=" border rounded-md shadow-2xl lg:mt-0 md:mt-0 mt-5"
                loading="lazy"
              />
            </div>
            </div>
            <div className="space-y-7">
            <p className="lg:text-5xl md:text-[30px] text-[30px] font-bold ">Functionality & design.</p>
            <p className="text-gray-600">Lookin’ good doing it.</p>
            <p className="text-gray-600">Build visually appealing websites and apps that offer an intuitive and seamless experience for your users.</p>
            </div>
            </div>
            
        </div>
      </div>
    </div>
  );
}

export default Extracontent;
