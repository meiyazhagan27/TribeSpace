import Image from 'next/image'
import React from 'react'

function FeatureSection(props:any) {

    const{maintitle,url,smalltitle,description,title1,url1,paragrap1,title2,url2,paragrap2,title3,url3,paragrap3,title4,url4,paragrap4,title5,url5,paragrap5,}=props
  return (
    <div>
     
    <div className="bg-[#f6f4f5] lg:h-[600px] md:h-[450px] md:flex md:items-center">
      <div className="md:flex  lg:w-[80%] mx-auto lg:justify-between lg:items-centerc lg:px-0 md:px-5 px-7 gap-6 ">
        <div className="">
          <p className="lg:text-[80px] md:text-[60px] text-[50px] font-bold text-blue-700">{maintitle}</p>
          <p className="lg:text-[25px] lg:pt-[20px]  lg:w-[550px]">
            {smalltitle}
          </p>
          <p className="lg:text-lg md:text-[13px] text-sm text-gray-500 lg:w-[600px] lg:pt-[20px]  ">
       {description}
          </p>
        </div>
        <div>
          <div className="relative lg:h-[420px] lg:w-[520px] md:h-[250px] md:w-[300px] h-[250px] w-[330px] lg:mx-auto lg:mt-0 md:mt-7 mt-5 ">
            <Image
              src={url}
              alt={"appimg"}
              fill
              className=" rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    
    <div className=" h-[600px] lg:mt-0 md:mt-[40px] flex items-center">
      <div className="lg:flex lg:w-[80%]  lg:flex-row-reverse mx-auto justify-between gap-24 items-center ">
        <div className="">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">
        {title1}
          </p>
          <p className="lg:text-[16px] md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] pt-[20px] ">
        {paragrap1}
          </p>
        </div>
        <div>
          <div className="relative lg:h-[500px] lg:w-[480px] md:h-[300px] md:w-[450px] h-[250px] w-[330px] lg:mt-0 md:mt-9 mt-5 mx-auto">
            <Image
              src={url1}
              alt={"appimg"}
              fill
              className=" rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="lg:w-[75%] md:w-[85%] h-[600px] lg:flex lg:justify-between  bg-gradient-to-l lg:from-gray-200  mt-14 lg:rounded-r-[50px] lg:mt-10 md:mt-[100px] ">
      <div className="flex items-center lg:pl-[130px] md:pl-[75px] pl-[30px]">
        <div>
          <p className="lg:text-[45px] md:text-[40px] text-[25px] md:w-[500px] lg:w-[600px] font-bold ">
            {title2}
          </p>
          <p className="lg:text-[16px] md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] pt-[20px] ">
   {paragrap2}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="relative lg:h-[500px] lg:w-[450px] md:h-[300px] md:w-[450px] h-[250px] w-[330px] lg:-mr-[230px] lg:mt-0 md:mt-9 mx-auto md:mr-[50px] mt-5">
          <Image
            src={url2}
            alt={"appimg"}
            fill
            className=" rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
    <div className=" h-[600px]  flex items-center lg:mt-10 md:mt-[100px]">
      <div className=" lg:flex w-[85%] lg:flex-row-reverse mx-auto justify-between gap-24 items-center ">
        <div className="">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">
           {title3}
          </p>
          <p className=" lg:text-[16px] md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] pt-[20px] ">
           {paragrap3}
          </p>
        </div>
        <div>
          <div className="relative lg:h-[400px] lg:w-[500px] md:h-[300px] md:w-[450px] h-[250px] w-[330px] lg:mt-0 md:mt-9 mt-5 mx-auto">
            <Image
              src={url3}
              alt={"appimg"}
              fill
              className=" rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    {title4 && url4 && paragrap4 && (
    <div className="lg:w-[70%] md:w-[85%] h-[600px] lg:flex justify-between  bg-gradient-to-l lg:from-gray-200  mt-14 lg:rounded-r-[50px] lg:mt-0 md:mt-[100px] ">
      <div className="flex items-center lg:pl-[130px] md:pl-[60px] px-[20px]">
        <div>
          <p className="lg:text-[45px] md:text-[40px] text-[25px] md:w-[500px] font-bold ">
            {title4}
          </p>
          <p className=" lg:text-[16px] md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] pt-[20px] ">
           {paragrap4}
          </p>
        </div>
      </div>
      <div className="flex items-center">
      <div className="relative lg:h-[500px] lg:w-[450px] md:h-[300px] md:w-[450px] h-[250px] w-[330px] lg:-mr-[250px] lg:mt-0 md:mt-9 mx-auto mt-5 md:mr-[50px]">
          <Image
            src={url4}
            alt={"appimg"}
            fill
            className=" rounded-lg object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
)}
  {title5 && url5 && paragrap5 && (
    <div className=" h-[600px]  flex items-center lg:mt-28 md:mt-[100px] ">
      <div className="lg:flex w-[85%] flex-row-reverse mx-auto justify-between gap-24 items-center ">
        <div className="">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">
            {title5}
          </p>
          <p className=" lg:text-[16px] md:text-lg text-sm   text-gray-500 md:w-[600px] w-[320px] pt-[20px] ">
            {paragrap5}
          </p>
        </div>
        <div>
          <div className="relative lg:h-[500px] lg:w-[480px] md:h-[300px] md:w-[450px] h-[250px] w-[330px] lg:mt-0 md:mt-9 mt-5 mx-auto">
            <Image
              src={url5}
              alt={"appimg"}
              fill
              className=" rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )}
  </div>
  )
}

export default FeatureSection
