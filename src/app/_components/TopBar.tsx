"use client";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosMailOpen } from "react-icons/io";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import {
  TbBrandCodesandbox,
  TbPuzzle2,
  TbReport,
  TbSocial,
} from "react-icons/tb";
import { CgCommunity, CgProfile, CgWebsite } from "react-icons/cg";
import { CiMemoPad } from "react-icons/ci";
import { BiSolidBadgeDollar } from "react-icons/bi";
import {
  MdBusinessCenter,
  MdOutlineNotificationsActive,
  MdPayments,
  MdTipsAndUpdates,
} from "react-icons/md";
import { FaBars, FaBlog, FaGraduationCap, FaPoll } from "react-icons/fa";
import { BsCalendar2EventFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { FaXmark } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { VscFeedback } from "react-icons/vsc";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";

const menuItems = [
  {
    label: "Education",
    shortcut: (
      <FaGraduationCap className="text-[40px] bg-slate-200 px-1 rounded-lg" />
    ),
    description:
      "Deliver online courses on your own course and community platform.",
    link: "/use-cases/education",
  },
  {
    label: "Social Networks",
    shortcut: <TbSocial className="text-[40px] bg-slate-200 px-1 rounded-lg" />,
    description:
      "Turn your customers into brand advocates with the power of community",
    link: "/use-cases/social-networks",
  },
  {
    label: "Brands",
    shortcut: (
      <TbBrandCodesandbox className="text-[40px] bg-slate-200 px-1 rounded-lg" />
    ),
    description:
      "Create a safe space for your people to meet, pray and learn together.",
    link: "/use-cases/brands",
  },
  {
    label: "Professional",
    shortcut: (
      <CgProfile className="text-[40px] bg-slate-200 px-1 rounded-lg" />
    ),
    description: "Create a social network for your membership organization.",
    link: "/use-cases/professional",
  },
  {
    label: "Business Networks",
    shortcut: (
      <CgProfile className="text-[40px] bg-slate-200 px-1 rounded-lg" />
    ),
    description: "Create a Business network for your membership organization.",
    link: "/use-cases/business-networks",
  },
];

const menuItems2 = [
  {
    label: "Memberships",
    shortcut: (
      <CiMemoPad className="text-[40px] bg-slate-200 px-1 rounded-lg" />
    ),
    description: "Elevate your experience with our membership options.",
    link: "/features/memberships",
  },
  {
    label: "Business",
    shortcut: (
      <MdBusinessCenter className="text-[40px] bg-slate-200 px-1 rounded-lg" />
    ),
    description: "Transform your business with innovative solutions.",
    link: "/features/business",
  },
  {
    label: "Payments",
    shortcut: (
      <BiSolidBadgeDollar className="text-[40px] bg-slate-200 px-1 rounded-lg" />
    ),
    description: "Simplify your payments with our comprehensive solutions.",
    link: "/features/payments",
  },
  {
    label: "Polls",
    shortcut: <FaPoll className="text-[40px] bg-slate-200 px-1 rounded-lg" />,
    description:
      "Engage your audience and understand their preferences with polls.",
    link: "/features/polls",
  },
  {
    label: "Website Builder",
    shortcut: (
      <CgWebsite className="text-[40px] bg-slate-200 px-1 rounded-lg" />
    ),
    description:
      "Build a professional website in minutes with our user-friendly builder.",
    link: "/features/websitebuilder",
  },
  {
    label: "Notification",
    shortcut: (
      <MdOutlineNotificationsActive className="text-[40px] bg-slate-200 px-1 rounded-lg" />
    ),
    description: "Real-time updates, right at your fingertips.",
    link: "/features/notification",
  },
  {
    label: "Events",
    shortcut: (
      <SlCalender className="text-[40px] bg-slate-200 px-1 rounded-lg" />
    ),
    description: "Discover and attend events designed to engage and entertain.",
    link: "/features/events",
  },
  {
    label: "Groups",
    shortcut: <GrGroup className="text-[45px] bg-slate-200 px-1 rounded-lg" />,
    description:
      "Connect and collaborate with like-minded individuals in our groups.",
    link: "/features/groups",
  },
  {
    label: "Reports",
    shortcut: <TbReport className="text-[40px] bg-slate-200 px-1 rounded-lg" />,
    description:
      " See how we're thriving with our latest activity and engagement report.",
    link: "/features/reports",
  },
  {
    label: "Integration",
    shortcut: (
      <IoExtensionPuzzleOutline className="text-[40px] bg-slate-200 px-1 rounded-lg" />
    ),
    description: "Seamless integration for a smoother experience",
    link: "/features/integration",
  },
  {
    label: "Feedbacks",
    shortcut: (
      <VscFeedback className="text-[40px] bg-slate-200 px-1 rounded-lg" />
    ),
    description:
      "Your feedback drives our growth. Share your thoughts and help us improve.",
    link: "/features/feedbacks",
  },
];

const menuItems3 = [
  {
    label: "Event Hub",
    shortcut: (
      <BsCalendar2EventFill className="text-[40px] bg-slate-200 px-1 rounded-lg" />
    ),
    description:
      "Bring your students together in a safe space for learning and collaborating.",
    link: "/resources/event-hub",
  },
  {
    label: "Customer Stories",
    shortcut: (
      <ImProfile className="text-[40px] bg-slate-200 px-1 rounded-lg" />
    ),
    description:
      "Bring your students together in a safe space for learning and collaborating.",
    link: "/resources/customer-stories",
  },
  {
    label: "Blog",
    shortcut: <FaBlog className="text-[40px] bg-slate-200 px-1 rounded-lg" />,
    description:
      "Bring your students together in a safe space for learning and collaborating.",
    link: "/resources/blog",
  },
];

function Topbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuClick = (menu: any) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const topbarItems = [
    {
      link: "Use Cases",
      path: "/use-cases",
      items: menuItems,
      design: "design1",
    },
    {
      link: "Features",
      path: "/features",
      items: menuItems2,
      design: "design2",
    },
    {
      link: "Resources",
      path: "/resources",
      items: menuItems3,
      design: "design3",
    },
    { link: "Pricing", path: "/pricing" },
  ];

  const renderMenuItems = (items: any, design: any) => {
    const baseClasses =
      "absolute ml-96 mt-7 pl-[20px] w-[60%] h-auto border-2  rounded-md bg-white text-xl py-2 text-blue-700 grid grid-cols-2   gap-1 shadow-2xl";
    const designClass =
      design === "design1" || design === "design3"
        ? "grid-cols-2 h-auto"
        : design === "design2"
        ? "grid-cols-3 h-auto gap-2 w-[85%] ml-[80px]"
        : "grid-cols-1 h-auto";

    return (
      <MenuItems
        transition
        anchor="bottom end"
        className={`${baseClasses} ${designClass} z-10`}
      >
        {items.map((item: any, index: any) => (
          <MenuItem key={index}>
            <Link href={item.link || "#"} onClick={() => setOpenMenu(null)}>
              <button className="group flex flex-col items-start w-[400px] h-auto gap-3 py-2 px-5 text-left hover:bg-slate-200 hover:rounded-lg mt-[20px] ">
                <div className="flex gap-5">
                  <div>{item.shortcut}</div>
                  <div>
                    <div>
                      <span className="font-bold">{item.label}</span>
                    </div>
                    <span className="text-sm text-gray-800 ">
                      {item.description}
                    </span>
                  </div>
                </div>
              </button>
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    );
  };

  return (
    <>
      <nav className="bg-white md:px-10 overflow-hidden p-[10px] max-w-screen-2xl lg:h-[85px] md:h-[120px] border-b mx-auto z-50 text-black top-0 right-0 left-0 py-5 px-7 sticky">
        <div className="flex items-center lg:w-[85%] lg:h-[50px] md:h-[80px] mx-auto justify-between">
          <div className="flex items-center space-x-[100px]">
            <a href="/" className="text-xl">
              <div className="flex items-center">
                <div className="relative lg:h-[35px] lg:w-[165px] md:h-[50px] md:w-[170px] h-[30px] w-[110px] mx-auto">
                  <Image
                    src={"/assets/brand-name.png"}
                    alt={"appimg"}
                    fill
                    className=""
                    loading="lazy"
                  />
                </div>
              </div>
            </a>
            <ul className="lg:flex justify-around h-[60px] hidden  items-center space-x-8">
              {topbarItems.map((item: any, index: any) => (
                <Menu as="div" key={index} className="relative">
                  {({ open }) => (
                    <>
                      {item.items ? (
                        <>
                          <MenuButton
                            onClick={() => handleMenuClick(item.link)}
                          >
                            <div className="flex items-center h-full px-5 py-2 font-semibold">
                              {item.link}{" "}
                              {item.items && (
                                <IoIosArrowDown
                                  className={`text-[20px] ml-1 mt-1 transition-transform ${
                                    open ? "rotate-180" : "rotate-0"
                                  }`}
                                />
                              )}
                            </div>
                          </MenuButton>
                          <div
                            className={`${
                              open
                                ? "h-[1px] bg-blue-700 mt-0 transition-all duration-300 w-full"
                                : "h-[0px]"
                            }`}
                          ></div>
                          {item.items &&
                            openMenu === item.link &&
                            renderMenuItems(item.items, item.design)}
                        </>
                      ) : (
                        <Link href={item.path}>
                          <div className="flex items-center h-full px-5 py-2 font-semibold cursor-pointer">
                            {item.link}
                          </div>
                        </Link>
                      )}
                    </>
                  )}
                </Menu>
              ))}
            </ul>
          </div>
          <div className="lg:flex items-center justify-center hidden space-x-9">
            <div>
              <button className="text-blue-700">Login</button>
            </div>
            <Link href={"/sign-up"}>
              <button className="bg-blue-600 rounded-[100px] h-[45px] w-[150px] text-white hover:bg-blue-900">
                Get started
              </button>
            </Link>
          </div>
          <div className="lg:hidden pl-[30px] pt-1">
            <button
              onClick={toggleMenu}
              className="text-blue-600  focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="w-[25px] h-[25px] md:w-[40px] md:h-[40px]  text-blue-600" />
              ) : (
                <FaBars className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] text-blue-600" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div className="lg:hidden md:block">
        <div
          className={`space-y-12 px-5 pt-4 h-full md:w-[350px] w-full text-center pb-5 z-20 bg-white text-xl ${
            isMenuOpen ? "block fixed left-0" : "hidden"
          }`}
        >
          <a
            href="/"
            className="text-3xl font-bold flex items-center space-x-12 text-blue-800"
          >
            {/* <div className="relative lg:h-[35px] lg:w-[165px] md:h-[50px] md:w-[170px] h-[30px] w-[100px] mx-auto">
      <Image
        src={"/assets/brand-name.png"}
        alt={"appimg"}
        fill
        className=""
        loading="lazy"
      />
    </div> */}
          </a>
          
          {topbarItems.map((item: any, index: any) => (
            <Menu as="div" key={index} className="relative">
              {({ open }) => (
                <>
                  {item.items ? (
                    <>
                      <MenuButton onClick={() => handleMenuClick(item.link)}>
                        <div className="flex items-center h-full px-5 py-2 font-semibold">
                          {item.link}{" "}
                          {item.items && (
                            <IoIosArrowDown
                              className={`text-[20px] ml-1 mt-1 transition-transform ${
                                open ? "rotate-180" : "rotate-0"
                              }`}
                            />
                          )}
                        </div>
                      </MenuButton>
                      <div
                        className={`${
                          open
                            ? "h-[1px] bg-blue-700 mt-0 transition-all duration-300 w-full"
                            : "h-[0px]"
                        }`}
                      ></div>
                      {item.items &&
                        openMenu === item.link &&
                        renderMenuItems(item.items, item.design)}
                    </>
                  ) : (
                    <Link href={item.path}>
                      <div className="flex items-center h-full px-5 py-2 font-semibold cursor-pointer">
                        {item.link}
                      </div>
                    </Link>
                  )}
                </>
              )}
            </Menu>
          ))}
        </div>  
      </div>
    </>
  );
}
export default Topbar;
