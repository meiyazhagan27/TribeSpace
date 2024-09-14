import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import { title } from "process";
import React from "react";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { CiMemoPad } from "react-icons/ci";
import { FaPoll } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";


function AllFeatures() {
  const allFeatures = [
    {
      label: "Memberships",
      imgSrc: "/assets/membership (1).png",
      description:
        "Becoming a member grants you exclusive access to premium resources and tools, ensuring you have the best materials at your fingertips. You'll join a supportive community where collaboration and expert advice are always available. ",
      button:"See More" ,
      link:"/features/memberships" 
    },
    {
      label: "Business",
      imgSrc: "/assets/business1.png",
      description:
        "Becoming a member provides your business with exclusive access to premium resources and tools, driving growth and efficiency. Engage with a network of professionals for valuable collaboration and expert advice.",
         button:"See More",
         link:"/features/business" 
    },
    {
      label: "Payments",
      imgSrc:"/assets/payments.png",
      description:
        "Streamline your business operations with our efficient payment solutions, designed to simplify transactions and improve cash flow. Enjoy secure, fast, and reliable payment processing, ensuring your financial operations run smoothly.",
         button:"See More",
         link:"/features/payments" 
    },
    {
      label: "Polls",
      imgSrc: "/assets/polls.png",
      description:
        "Enhance your business decision-making with our easy-to-use polls, providing valuable insights into customer preferences and market trends. Engage your audience and gather real-time feedback to inform your strategies. ",
         button:"See More",
         link:"/features/polls" 
    },
    {
      label: "Website Builder",
      imgSrc: "/assets/website.png",
      description:
        "Empower your business with our intuitive website builder, designed to create stunning, professional websites effortlessly. Customize your site with a range of templates and features to reflect your brand identity.",
         button:"See More",
         link:"/features/website-builder" 
    },
    {
      label: "Notification",
      imgSrc: "/assets/push-notification.png",
      description:
        "Celebrate your business milestones and connect with your audience through our Wishes and Festivals feature. Send personalized greetings and festive messages to your clients and partners, fostering strong relationships. ",
         button:"See More",
         link:"/features/" 
    },
    {
      label: "Events",
      imgSrc: "/assets/appointment.png",
      description:
        "Celebrate your business milestones and connect with your audience through our Wishes and Festivals feature. Send personalized greetings and festive messages to your clients and partners, fostering strong relationships. ",
         button:"See More",
         link:"/features/wishes-and-festivals" 
    },
    {
      label: "Groups",
      imgSrc: "/assets/group.png",
      description:
        "Celebrate your business milestones and connect with your audience through our Wishes and Festivals feature. Send personalized greetings and festive messages to your clients and partners, fostering strong relationships. ",
         button:"See More",
         link:"/features/wishes-and-festivals" 
    },
    {
      label: "Reports",
      imgSrc: "/assets/monitor.png",
      description:
        "Celebrate your business milestones and connect with your audience through our Wishes and Festivals feature. Send personalized greetings and festive messages to your clients and partners, fostering strong relationships. ",
         button:"See More",
         link:"/features/wishes-and-festivals" 
    },
    {
      label: "Integration",
      imgSrc: "/assets/system-integration.png",
      description:
        "Celebrate your business milestones and connect with your audience through our Wishes and Festivals feature. Send personalized greetings and festive messages to your clients and partners, fostering strong relationships. ",
         button:"See More",
         link:"/features/wishes-and-festivals" 
    },
    {
      label: "Feedbacks",
      imgSrc: "/assets/review.png",
      description:
        "Celebrate your business milestones and connect with your audience through our Wishes and Festivals feature. Send personalized greetings and festive messages to your clients and partners, fostering strong relationships. ",
         button:"See More",
         link:"/features/wishes-and-festivals" 
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#eaedfe]">
      <div className="w-[80%] mx-auto ">
        <div className="md:h-[500px] h-[300px] flex items-center justify-center ">
          <div className="md:space-y-10 space-y-3 ">
            <p className="text-center md:text-2xl text-xl text-blue-700 font-medium">
              FEATURES
            </p>
            <p className="text-center md:text-[70px] text-[45px] font-bold">
              Explore All Features
            </p>
            <p className="text-center md:text-3xl text-[15px] font-light">
              We support courses and communities of all kinds.
            </p>
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2  justify-center gap-7 pt-14  ">
            {allFeatures.map((platforms, index) => (
              <div key={index} className=" flex justify-center items-center ">
                <div className="bg-[rgba(255,255,255,0.04)] lg:h-[540px] md:h-[500px] lg:w-[360px] md:w-[350px] w-full shadow-2xl   cursor-pointer  border-2 rounded-[20px] bg-white hover:scale-105 hover:border-blue-700 duration-500  transform  ">
                  <div className="flex justify-center mt-6">
              <div className="relative lg:w-[60px] lg:h-[60px] md:h-[60px]  md:w-[60px] h-[50px] w-[50px]  overflow-hidden">
                <Image
                  src={platforms.imgSrc}
                  alt="logo"
                  fill
                  className="object-cover "
                  loading="lazy"
                />
              </div>
                  </div>

                  <div className=" h-[100px] flex justify-center items-center  ">
                    <h4 className="text-[22px] font-medium text-blue-700     ">
                      {platforms.label}
                    </h4>
                  </div>
                  <div className="lg:leading-loose  h-[200px]  text-base ">
                    <p className=" px-10   ">{platforms.description}</p>
                  </div>
                  
                  <Link href={platforms.link} className="flex items-center justify-center h-[100px] lg:mt-7 md:mt-5 ">
                    <button className="bg-blue-600 text-white lg:h-[40px] lg:w-[280px] md:h-[40px] md:w-[150px] h-[40px] w-[150px] rounded-sm">{platforms.button}</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllFeatures;
