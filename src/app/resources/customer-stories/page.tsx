import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata ={
  title:"Customer Stories | TribeSpace"
}



function page() {
  const allstories = [
    {
      imgSrc: "/assets/customer1.jpg",
      description:
        "TribeSpace enhances community interactions by incorporating cutting-edge AI technologies.  ",

      link: "/features/memberships",
    },
    {
      imgSrc: "/assets/customer6.jpg",
      description: "CASE Insights on Alumni Engagement: 3 key takeaways",

      link: "/features/business",
    },
    {
      imgSrc: "/assets/customer3.jpg",
      description: "New innovation announced in TribeSpace Analytics Module",

      link: "/features/payments",
    },
    {
      imgSrc: "/assets/customer4.jpg",
      description:
        "American Psychological Association partners with TribeSpace to enhance member experience",

      link: "/features/polls",
    },
    {
      imgSrc: "/assets/customer5.jpg",
      description:
        "Community Onboarding: Expert Tips for Welcoming and Engaging New Members",

      link: "/features/website-builder",
    },
    {
      label: "Wishes and Festivals",
      imgSrc: "/assets/customer2.jpg",
      description:
        "The Power of Community Gamification: How To Gamify Your Community in 2024 ",

      link: "/features/wishes-and-festivals",
    },
  ];

  return (
    <div>
      <div className="bg-blue-700 flex items-center md:h-[550px] h-[400px]">
        <div className="w-[85%]   mx-auto">
          <div className="text-white">
            <p className="md:text-[60px] text-[30px] font-bold">Fuel Your Growth</p>
            <p className="md:text-[60px] text-[30px]">Through Customer Stories</p>
            <p className="md:text-2xl md:w-[40%] mt-4">
              Learn the playbooks from successful creators so you can implement
              their strategies and scale your impact.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[85%] mx-auto">
        <div className="grid lg:grid-cols-3 md:grid-cols-2  justify-center gap-9 pt-14 lg:px-[50px] ">
          {allstories.map((stories, index) => (
            <div
              key={index}
              className=" flex justify-center items-center rounded-2xl "
            >
              <div className=" lg:h-[400px] md:h-[400px] lg:w-[400px] md:w-[350px] w-full group rounded-2xl cursor-pointer   ">
                <div className="flex justify-center  ">
                  <div className="relative lg:w-full lg:h-[220px] md:h-[190px]  md:w-full h-[200px] w-[300px] rounded-2xl overflow-hidden">
                    <Image
                      src={stories.imgSrc}
                      alt="logo"
                      fill
                      className="object-cover overflow-hidden rounded-2xl group-hover:scale-105 duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="lg:leading-loose  lg:h-[130px]  text-base mt-10 ">
                  <p className=" px-10 font-bold text-xl  ">
                    {stories.description}
                  </p>
                </div>

                {/* <Link  href={stories.link} className="flex  justify-start  ">
                    <button className="font-bold lg:pl-[40px]">{stories.button}</button>
                  </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="md:flex items-center justify-between lg:w-[70%] md:w-[80%] h-[370px] rounded-lg bg-[#f9f4fa] mx-auto md:px-11 px-6 mt-5">
        <div className="md:w-[60%] md:pt-0 pt-8">
          <p className="lg:text-[25px] md:text-[20px] text-[14px]  font-semibold">
            “I hired TribeSpace to help me move my Exit Five marketing community
            off of Facebook to TribeSpace Plus and the team has been super
            helpful and responsive in making the transition.”
          </p>
        </div>
        <div>
          <div className="relative lg:w-[350px] lg:h-[300px] md:h-[220px]  md:w-[200px] h-[150px] w-[200px] md:mt-0 mt-10 md:ml-0 ml-[60px] rounded-2xl">
            <Image
              src={"/assets/customer.jpg"}
              alt="logo"
              fill
              className="object-cover overflow-hidden rounded-2xl group-hover:scale-105 duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      {/* <div className="bg-cyan-600 w-[70%] h-[200px] flex items-center mx-auto">
        <div>
            <p>Get started with TribeSpace</p>
            <p>Experience exciting new workflows with TribeSpace and redefine the way you interact, share and create together.</p>
        </div>
        <div>
            <button>
                Demo
            </button>
        </div>
      </div> */}
    </div>
  );
}

export default page;
