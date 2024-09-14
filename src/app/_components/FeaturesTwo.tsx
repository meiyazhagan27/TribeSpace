"use client";
import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function Features() {
  let [categories] = useState({
    Membership: [
      {
        id: 1,
        title: "Membership",
        date: "Send custom forms to potentially interested members, share invoices and stunning Membership certificates, send membership renewal offers and reminders through notifications, maintain a membership directory to search for or network with existing members, and maintain limited access on payment and dues.",
        imageUrl: "/assets/membership.png",
      },
    ],
    Events: [
      {
        id: 1,
        title: "Events",
        date: "We’ll make it easy by automating processes aligned with ticketing, online and offline payments, invoicing, managing attendance, indexing images and conversations in one place, and sharing effective Minutes of Meetings.",
        imageUrl: "/assets/events.png",
      },
    ],
    Business: [
      {
        id: 1,
        title: 'Business',
        date: 'Add the power of business to your association.Allow members to create profiles of their company. Add all your details and information that provides an opportunity to be discovered by members looking for products and services.',
        imageUrl: "/assets/business.png"
      },
    ],
    Payments: [
      {
        id: 1,
        title: 'Payments',
        date: 'Get stuff done quickly and hassle-free Add expenses to events, publish invoices for events, print tickets for members to carry for the event, publish customized membership certificates, create event-wise P&L.',
        imageUrl: "/assets/payment.png"
      },
    ]

  });

  return (
    <div className="bg-gradient-to-t from-[#eaedfe] pb-10">
    <div className="lg:w-[80%] mx-auto">
        <h1 className="lg:text-[70px] md:text-[65px] text-[50px] text-center font-bold pt-24">
          Our <span className="text-blue-700">Features</span>{" "}
        </h1>
      <div className="bg-black h-[0.10px] md:w-[500px] w-[300px]  mx-auto"></div>
      <div className="w-full px-2 md:py-16 py-10 sm:px-0 flex justify-center  ">
        <Tab.Group className="gap-2">
          <Tab.List className="flex flex-row justify-center gap-4 space-x-1 mx-auto rounded-xl">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    " lg:w-[200px] md:w-[140px] w-[70px] text-[11px] md:rounded-[100px] lg:py-4 md:py-4 py-2   lg:text-[17px] md:text-[17px] font-medium leading-5 md:px-0 rounded-md  ",
                    "ring-white/60 ring-offset-2 focus:outline-none focus:ring-2 md:gap-x-5 gap-x-0  ",
                    selected
                      ? "bg-blue-700  text-white shadow "
                      : "text-black hover:bg-gray-300 "
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>

          <Tab.Panels className=" lg:mt-9 md:mt-4 mt-4">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-white p-0",
                  "ring-white/60 ring-offset-2 focus:outline-none focus:ring-2"
                )}
                style={{ maxHeight: "500px" }}
              >
                <ul className=" md:mt-10 ">
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="relative md:flex items-start rounded-md p-3"
                    >
                      <div className="lg:flex-1 md:flex-1 lg:mt-16">
                        <h3 className="lg:text-[50px] md:text-[34px] font-bold text-blue-700 leading-5">
                          {post.title}
                        </h3>
                        <ul className="mt-1 flex space-x-1 font-normal lg:pt-9 pt-5 lg:pr-[100px] text-gray-500 md:leading-6 md:pr-[25px] lg:leading-8">
                          <li>{post.date}</li>
                        </ul>
                      </div>
                      <div className="relative lg:h-[400px] lg:w-[590px] md:h-[300px] md:w-[350px] h-[300px] w-[350px] md:mt-0 mt-9 mx-auto">
                        <Image
                          src={post.imageUrl}
                          alt={"appimg"}
                          fill
                          className="border-2 rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      <div className="   lg:mt-2 md:mt-2 mt-20 ml-4  text-black ">
      <Link href={"/features"} className="flex  ">
          <h5 className=" text-blue-700 font-semibold  ">See All Features</h5>

          <BsArrowRight className="text-blue-700 ml-2 mt-1 " />
          </Link>
        <div className="bg-blue-700 h-[0.10px] w-[150px]  mt-1"></div>
      </div>
    </div>
    </div>
  );
}

export default Features;
