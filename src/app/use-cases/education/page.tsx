import Image from "next/image";
import React from "react";

export const metadata ={
  title:"The Best and  Powerful Notification of TribeSpace "
}



function page() {
  return (
    <div>
      <div className="bg-[#f5f5ff]">
        <div className="lg:w-[80%] md:w-[85%] mx-auto lg:h-[600px] md:h-[400px] h-[400px] lg:gap-0 md:gap-6 md:flex items-center md:px-0 px-10 md:pt-0 pt-5  ">
          <div className="lg:pr-[50px]">
            <p className="lg:text-5xl md:text-[25px] text-[25px] lg:leading-[60px] font-bold">
              {" "}
              Tribespace powers communities at{" "}
              <span className="text-blue-700"> educational institutions.</span>
            </p>
            <p className="lg:font-semibold lg:mt-6 md:mt-3 md:text-[16px] text-[10px] ">
              Tribespace is a versatile platform and serves a range of
              organizational entities in the education sector, including
            </p>
          </div>
          <div>
            <div className="relative lg:h-[530px] lg:w-[500px] md:h-[300px] md:w-[280px] h-[220px] w-[220px] md:mt-[20px] mt-10 mx-auto">
              <Image
                src={"/assets/img-edu.jpg"}
                alt={"appimg"}
                fill
                className=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-[90%] mx-auto ' >
        <div>
          <div className="lg:w-[50%] md:w-[80%] mx-auto mt-[50px]">
            <p className="text-center lg:text-[35px] md:text-[40px] text-[25px] font-bold">
              Bring your students together in a <span className="text-blue-700"> safe space for learning and
              collaborating.</span>
            </p>
            <p className="text-center md:text-[19px] text-[15px] font-medium pt-5">
              Boost the classroom experience, enhance students’ performance and
              increase course completion rates with Tribespace education 
            </p>
          </div>
        </div>
        <div className="lg:h-[600px] lg:mt-0 md:mt-[50px] mt-10 flex items-center">
      <div className="lg:flex lg:w-[85%] md:[80%] lg:flex-row-reverse mx-auto justify-between gap-24 items-center ">
        <div className="lg:pl-0 md:pl-5">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">
          Educational Events
          </p>
          <p className="md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] text-justify pt-[20px] ">
          TribeSpace is ideal for organizing and managing educational events such as seminars, conferences, and guest lectures. The platform supports event registration, scheduling, and interactive sessions, ensuring that participants can engage fully with the content and with each other.
          </p>
        </div>
        <div>
          <div className="relative lg:h-[500px] lg:w-[480px] md:h-[300px] md:w-[480px] h-[250px] w-[330px] lg:mt-0 md:mt-14 mt-5 mx-auto">
            <Image
              src={"/assets/education1.jpg"}
              alt={"appimg"}
              fill
              className=" rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
        <div className="  lg:h-[600px] lg:mt-0 md:mt-[40px] mt-10 flex items-center">
      <div className="lg:flex lg:w-[85%] md:[80%]   mx-auto justify-between gap-24 items-center ">
        <div className="lg:pl-0 md:pl-5">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">
          Peer Learning Communities
          </p>
          <p className="md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] text-justify pt-[20px] ">
          TribeSpace can host peer learning communities where learners with similar interests come together to exchange knowledge and learn from one another. These communities can focus on specific subjects or skills, promoting collaborative learning and providing a support network for members.
          </p>
        </div>
        <div>
          <div className="relative lg:h-[500px] lg:w-[480px] md:h-[300px] md:w-[480px] h-[250px] w-[330px] lg:mt-0 md:mt-14 mt-5 mx-auto">
            <Image
              src={"/assets/education2.jpg"}
              alt={"appimg"}
              fill
              className=" rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="lg:h-[600px] lg:mt-0 md:mt-[40px] mt-10 flex items-center">
      <div className="lg:flex lg:w-[85%]  lg:flex-row-reverse mx-auto justify-between gap-24 items-center ">
        <div className="">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">
          Virtual Classrooms
          </p>
          <p className="md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] pt-[20px] ">
          TribeSpace can host online classrooms where teachers and students interact in a dedicated space. Features like discussion boards, file sharing, and video conferencing make it easier for teachers to manage classes and for students to access resources and participate in discussions.
          </p>
        </div>
        <div>
          <div className="relative lg:h-[500px] lg:w-[480px] md:h-[300px] md:w-[450px] h-[250px] w-[330px] lg:mt-0 md:mt-14 mt-5 mx-auto">
            <Image
              src={"/assets/education3.jpg"}
              alt={"appimg"}
              fill
              className=" rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
    <div className=" lg:h-[600px] lg:mt-0 md:mt-[40px]  mt-10 flex items-center">
      <div className="lg:flex md:w-[85%]   mx-auto justify-between gap-24 items-center ">
        <div className="">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">
          Study Groups
          </p>
          <p className="md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] pt-[20px] ">
          Students can create study groups within TribeSpace to collaborate on assignments, share notes, and prepare for exams. This fosters a sense of community and enhances collaborative learning, making it easier for students to work together and support one another.
          </p>
        </div>
        <div>
          <div className="relative lg:h-[500px] lg:w-[480px] md:h-[300px] md:w-[450px] h-[250px] w-[330px] lg:mt-0 md:mt-14 mt-5 mx-auto">
            <Image
              src={"/assets/education4.jpg"}
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
      <div className="lg:flex md:w-[85%]  lg:flex-row-reverse mx-auto justify-between gap-24 items-center ">
        <div className="">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">

          Alumni Networks
          </p>
          <p className="md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] pt-[20px] ">
          TribeSpace can help universities maintain strong alumni networks by providing a space for alumni to connect, share career opportunities, and participate in university events. This keeps alumni engaged with their alma mater and fosters a sense of community.
          </p>
        </div>
        <div>
          <div className="relative lg:h-[500px] lg:w-[480px] md:h-[300px] md:w-[450px] h-[250px] w-[330px] lg:mt-0 md:mt-14 mt-5 mx-auto">
            <Image
              src={"/assets/education5.jpg"}
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
      <div className="lg:flex lg:w-[85%]   mx-auto justify-between gap-24 items-center ">
        <div className="">
          <p className="lg:text-[45px] md:text-[40px] text-[25px] font-bold ">

          Research Communities
          </p>
          <p className="md:text-lg text-sm text-gray-500 md:w-[600px] w-[320px] pt-[20px] ">
          Researchers at universities can use TribeSpace to form communities focused on specific research topics. These spaces can facilitate collaboration, resource sharing, and discussions among researchers from different departments or even different institutions, fostering innovation and interdisciplinary research.
          </p>
        </div>
        <div>
          <div className="relative lg:h-[500px] lg:w-[480px] md:h-[300px] md:w-[450px] h-[250px] w-[330px] lg:mt-0 md:mt-14 mt-5 mx-auto">
            <Image
              src={"/assets/education6.jpg"}
              alt={"appimg"}
              fill
              className=" rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default page;
