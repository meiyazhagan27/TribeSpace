import Image from 'next/image'
import React from 'react'

function UseCases(props:any) {
    
    const{maintitle,maintitle1,url,smalltitle,description,description1,smalldescription,title1,url1,paragraph1,title2,url2,paragraph2,title3,url3,paragraph3,title4,url4,paragraph4,title5,url5,paragraph5,title6,url6,paragraph6,}=props

  return (
    <div>
        <div className="bg-[#f5f5ff]">
        <div className="lg:w-[80%] md:w-[85%] mx-auto lg:h-[600px] md:h-[400px] h-[400px] lg:gap-0 md:gap-6 md:flex items-center md:px-0 px-10 md:pt-0 pt-5  ">
          <div className="lg:pr-[50px] ">
            <p className="lg:text-5xl md:text-[25px] lg:leading-[60px] font-bold">
              {maintitle}
              
              <span className="text-blue-700"> {maintitle1}</span>
            </p>
            <p className=" lg:font-semibold lg:mt-6 md:mt-3 md:text-[16px] text-[10px]">
              {smalltitle}
            </p>
          </div>
          <div>
            <div className="relative lg:h-[400px] lg:w-[590px] md:h-[270px] md:w-[260px] h-[200px] w-[220px] md:mt-[20px] mt-5 mx-auto">
              <Image
                src={url}
                alt={"appimg"}
                fill
                className=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-[90%] mx-auto '>
        
          <div className="lg:w-[50%] md:w-[80%] mx-auto mt-[50px]">
            <p className="text-center lg:text-[35px] md:text-[40px] text-[35px] font-bold">
              {description} <span className="text-blue-700"> {description1}</span>
            </p>
            <p className="text-center md:text-[19px] text-[15px] font-medium pt-5">
            {smalldescription}
            </p>
          
        </div>
        <div className=" lg:h-[600px] lg:mt-0 md:mt-[50px] mt-10 flex items-center">
      <div className="lg:flex lg:w-[85%] md:[80%] lg:flex-row-reverse mx-auto justify-between gap-24 items-center ">
        <div className="lg:pl-0 md:pl-5">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">
         {title1}
          </p>
          <p className="md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] text-justify pt-[20px] ">
         {paragraph1}
          </p>
        </div>
        <div>
          <div className="relative lg:h-[500px] lg:w-[480px] md:h-[300px] md:w-[480px] h-[250px] w-[330px] lg:mt-0 md:mt-14 mt-5 mx-auto">
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
        <div className=" lg:h-[600px] lg:mt-0 md:mt-[40px] mt-10 flex items-center">
      <div className="lg:flex lg:w-[85%] md:[80%]   mx-auto justify-between gap-24 items-center ">
        <div className="lg:pl-0 md:pl-5">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">
          {title2}
          </p>
          <p className="md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] text-justify pt-[20px] ">
         {paragraph2}
          </p>
        </div>
        <div>
          <div className="relative lg:h-[500px] lg:w-[480px] md:h-[300px] md:w-[480px] h-[250px] w-[330px] lg:mt-0 md:mt-14 mt-5 mx-auto">
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
    </div>
    <div className=" lg:h-[600px] lg:mt-0 md:mt-[100px] mt-10 flex items-center">
      <div className="lg:flex lg:w-[85%]  lg:flex-row-reverse mx-auto justify-between gap-24 items-center ">
        <div className="">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">
         {title3}
          </p>
          <p className="md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] text-justify pt-[20px] ">
          {paragraph3}
          </p>
        </div>
        <div>
          <div className="relative lg:h-[500px] lg:w-[480px] md:h-[300px] md:w-[450px] h-[250px] w-[330px] lg:mt-0 md:mt-14 mt-5 mx-auto">
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
    <div className=" lg:h-[600px] lg:mt-0 md:mt-[100px] mt-10 flex items-center">
      <div className="lg:flex lg:w-[85%]   mx-auto justify-between gap-24 items-center ">
        <div className="">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">
          {title4}
          </p>
          <p className="md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] text-justify pt-[20px] ">
         {paragraph4}
          </p>
        </div>
        <div>
          <div className="relative lg:h-[500px] lg:w-[480px] md:h-[300px] md:w-[450px] h-[250px] w-[330px] lg:mt-0 md:mt-14 mt-5 mx-auto">
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
    </div>
    <div className=" lg:h-[600px]  lg:mt-0 md:mt-[100px] mt-10 flex items-center">
      <div className="lg:flex lg:w-[85%]    lg:flex-row-reverse mx-auto justify-between gap-24 items-center ">
        <div className="">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">

         {title5}
          </p>
          <p className="md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] text-justify pt-[20px] ">
          {paragraph5}
          </p>
        </div>
        <div>
          <div className="relative lg:h-[500px] lg:w-[480px] md:h-[300px] md:w-[450px] h-[250px] w-[330px] lg:mt-0 md:mt-14 mt-5 mx-auto">
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
    {title6 && url6 && paragraph6 && (
    <div className=" h-[600px] lg:mt-0 md:mt-[40px] mt-10 flex items-center">
      <div className="lg:flex lg:w-[85%]   mx-auto justify-between gap-24 items-center ">
        <div className="">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">

        {title6}
          </p>
          <p className="md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] text-justify pt-[20px] ">
 {paragraph6}
          </p>
        </div>
        <div>
          <div className="relative lg:h-[500px] lg:w-[480px] md:h-[300px] md:w-[450px] h-[250px] w-[330px] lg:mt-0 md:mt-14 mt-5 mx-auto">
            <Image
              src={url6}
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
    </div>
  )
}

export default UseCases
