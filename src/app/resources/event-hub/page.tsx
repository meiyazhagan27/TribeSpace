import Image from "next/image";
import React from "react";

export const metadata ={
  title:"Event Hub | TribeSpace "
}

function page() {
  const event = [
    {
      imgSrc: "/assets/event1.jpg",
      title: "Marketing Workshop  ",

      date: "July 20-24 | Salem College",
      description:
        "Join us for an intensive Marketing Mastery Workshop designed to empower you with the latest strategies and tools to elevate your brand. ",
    },
    {
      imgSrc: "/assets/event2.jpg",
      title: "college party",
      date: "July 20-24 | Salem College",
      description:
        "Join us for an intensive Marketing Mastery Workshop designed to empower you with the latest strategies and tools to elevate your brand. ",

      link: "/features/business",
    },
    {
      imgSrc: "/assets/event3.jpg",
      title: "Business Expo",
      date: "July 20-24 | Salem College",
      description:
        "Join us for an intensive Marketing Mastery Workshop designed to empower you with the latest strategies and tools to elevate your brand. ",

      link: "/features/payments",
    },
    {
      imgSrc: "/assets/event3.jpg",
      title: "Business Expo",
      date: "July 20-24 | Salem College",
      description:
        "Join us for an intensive Marketing Mastery Workshop designed to empower you with the latest strategies and tools to elevate your brand. ",

      link: "/features/polls",
    },
    {
      imgSrc: "/assets/event4.jpg",
      title: "Business Meeting",
      date: "July 20-24 | Salem College",
      description:
        "Join us for an intensive Marketing Mastery Workshop designed to empower you with the latest strategies and tools to elevate your brand. ",

      link: "/features/website-builder",
    },
    {
      label: "Wishes and Festivals",
      imgSrc: "/assets/event5.jpg",
      title: "Boost Your Business ",

      date: "July 20-24 | Salem College",
      description:
        "Join us for an intensive Marketing Mastery Workshop designed to empower you with the latest strategies and tools to elevate your brand. ",

      link: "/features/wishes-and-festivals",
    },
  ];
  return (
    <div>
      <div className="bg-blue-700 md:h-[300px] h-[250px] flex items-center">
        <div className="text-white w-[80%] mx-auto">
          <p className="md:text-[80px] text-[60px] font-bold">Events</p>
          <p className="md:text-[30px] text-[15px] font-light">
            Find TribeSpace at conferences and events across industries and
            around the globe.
          </p>
        </div>
      </div>
      <div>
        <div className="w-[85%] mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2  justify-center gap-9 pt-14 lg:px-[50px] ">
            {event.map((events, index) => (
              <div
                key={index}
                className=" flex justify-center items-center rounded-2xl "
              >
                <div className=" lg:h-[550px] md:h-[500px] lg:w-[400px] md:w-[350px] w-full group rounded-2xl cursor-pointer border-2 hover:bg-slate-100 hover:shadow-2xl   ">
                  <div className="flex justify-center  ">
                    <div className="relative lg:w-full lg:h-[290px] md:h-[260px]  md:w-full h-[200px] w-full rounded-2xl overflow-hidden">
                      <Image
                        src={events.imgSrc}
                        alt="logo"
                        fill
                        className="object-cover overflow-hidden rounded-2xl group-hover:scale-105 duration-500"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="lg:leading-loose  lg:h-[45px]  text-base mt-10 ">
                    <p className=" px-10 font-bold text-xl  ">{events.title}</p>
                  </div>
                  <div>
                    <p className="px-10 text-gray-500 font-medium">
                      {events.date}
                    </p>
                  </div>
                  <div>
                    <p className="px-10 mt-5 font-medium">{events.description}</p>
                  </div>

                  {/* <Link  href={stories.link} className="flex  justify-start  ">
                    <button className="font-bold lg:pl-[40px]">{stories.button}</button>
                  </Link> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
