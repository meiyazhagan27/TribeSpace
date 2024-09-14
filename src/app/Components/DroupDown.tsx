// "use client";
// import React, { useState } from 'react'
// import {
//     TbBrandCodesandbox,
//     TbPuzzle2,
//     TbReport,
//     TbSocial,
//   } from "react-icons/tb";
//   import { CgCommunity, CgProfile, CgWebsite } from "react-icons/cg";
//   import { CiMemoPad } from "react-icons/ci";
//   import { BiSolidBadgeDollar } from "react-icons/bi";
//   import {
//     MdBusinessCenter,
//     MdOutlineNotificationsActive,
//     MdPayments,
//     MdTipsAndUpdates,
//   } from "react-icons/md";
//   import { FaBars, FaBlog, FaGraduationCap, FaPoll } from "react-icons/fa";
//   import { BsCalendar2EventFill } from "react-icons/bs";
//   import { ImProfile } from "react-icons/im";
//   import Image from "next/image";
//   import Link from "next/link";
//   import path from "path";
//   import { FaXmark } from "react-icons/fa6";
//   import { SlCalender } from "react-icons/sl";
//   import { VscFeedback } from "react-icons/vsc";
//   import { IoExtensionPuzzleOutline } from "react-icons/io5";
//   import { GrGroup } from "react-icons/gr";
// import { MenuItem, MenuItems } from '@headlessui/react';
// const menuItems = [
//     {
//       label: "Education",
//       shortcut: (
//         <FaGraduationCap className="text-[40px] bg-slate-200 px-1 rounded-lg" />
//       ),
//       description:
//         "Deliver online courses on your own course and community platform.",
//       link: "/use-cases/education",
//     },
//     {
//       label: "Social Networks",
//       shortcut: <TbSocial className="text-[40px] bg-slate-200 px-1 rounded-lg" />,
//       description:
//         "Turn your customers into brand advocates with the power of community",
//       link: "/use-cases/social-networks",
//     },
//     {
//       label: "Brands",
//       shortcut: (
//         <TbBrandCodesandbox className="text-[40px] bg-slate-200 px-1 rounded-lg" />
//       ),
//       description:
//         "Create a safe space for your people to meet, pray and learn together.",
//       link: "/use-cases/brands",
//     },
//     {
//       label: "Professional",
//       shortcut: (
//         <CgProfile className="text-[40px] bg-slate-200 px-1 rounded-lg" />
//       ),
//       description: "Create a social network for your membership organization.",
//       link: "/use-cases/professional",
//     },
//     {
//       label: "Business Networks",
//       shortcut: (
//         <CgProfile className="text-[40px] bg-slate-200 px-1 rounded-lg" />
//       ),
//       description: "Create a Business network for your membership organization.",
//       link: "/use-cases/business-networks",
//     },
//   ];
  
//   const menuItems2 = [
//     {
//       label: "Memberships",
//       shortcut: (
//         <CiMemoPad className="text-[40px] bg-slate-200 px-1 rounded-lg" />
//       ),
//       description: "Elevate your experience with our membership options.",
//       link: "/features/memberships",
//     },
//     {
//       label: "Business",
//       shortcut: (
//         <MdBusinessCenter className="text-[40px] bg-slate-200 px-1 rounded-lg" />
//       ),
//       description: "Transform your business with innovative solutions.",
//       link: "/features/business",
//     },
//     {
//       label: "Payments",
//       shortcut: (
//         <BiSolidBadgeDollar className="text-[40px] bg-slate-200 px-1 rounded-lg" />
//       ),
//       description: "Simplify your payments with our comprehensive solutions.",
//       link: "/features/payments",
//     },
//     {
//       label: "Polls",
//       shortcut: <FaPoll className="text-[40px] bg-slate-200 px-1 rounded-lg" />,
//       description:
//         "Engage your audience and understand their preferences with polls.",
//       link: "/features/polls",
//     },
//     {
//       label: "Website Builder",
//       shortcut: (
//         <CgWebsite className="text-[40px] bg-slate-200 px-1 rounded-lg" />
//       ),
//       description:
//         "Build a professional website in minutes with our user-friendly builder.",
//       link: "/features/websitebuilder",
//     },
//     {
//       label: "Notification",
//       shortcut: (
//         <MdOutlineNotificationsActive className="text-[40px] bg-slate-200 px-1 rounded-lg" />
//       ),
//       description: "Real-time updates, right at your fingertips.",
//       link: "/features/notification",
//     },
//     {
//       label: "Events",
//       shortcut: (
//         <SlCalender className="text-[40px] bg-slate-200 px-1 rounded-lg" />
//       ),
//       description: "Discover and attend events designed to engage and entertain.",
//       link: "/features/events",
//     },
//     {
//       label: "Groups",
//       shortcut: <GrGroup className="text-[45px] bg-slate-200 px-1 rounded-lg" />,
//       description:
//         "Connect and collaborate with like-minded individuals in our groups.",
//       link: "/features/groups",
//     },
//     {
//       label: "Reports",
//       shortcut: <TbReport className="text-[40px] bg-slate-200 px-1 rounded-lg" />,
//       description:
//         " See how we're thriving with our latest activity and engagement report.",
//       link: "/features/reports",
//     },
//     {
//       label: "Integration",
//       shortcut: (
//         <IoExtensionPuzzleOutline className="text-[40px] bg-slate-200 px-1 rounded-lg" />
//       ),
//       description: "Seamless integration for a smoother experience",
//       link: "/features/integration",
//     },
//     {
//       label: "Feedbacks",
//       shortcut: (
//         <VscFeedback className="text-[40px] bg-slate-200 px-1 rounded-lg" />
//       ),
//       description:
//         "Your feedback drives our growth. Share your thoughts and help us improve.",
//       link: "/features/feedbacks",
//     },
//   ];
  
//   const menuItems3 = [
//     {
//       label: "Event Hub",
//       shortcut: (
//         <BsCalendar2EventFill className="text-[40px] bg-slate-200 px-1 rounded-lg" />
//       ),
//       description:
//         "Bring your students together in a safe space for learning and collaborating.",
//       link: "/resources/event-hub",
//     },
//     {
//       label: "Customer Stories",
//       shortcut: (
//         <ImProfile className="text-[40px] bg-slate-200 px-1 rounded-lg" />
//       ),
//       description:
//         "Bring your students together in a safe space for learning and collaborating.",
//       link: "/resources/customer-stories",
//     },
//     {
//       label: "Blog",
//       shortcut: <FaBlog className="text-[40px] bg-slate-200 px-1 rounded-lg" />,
//       description:
//         "Bring your students together in a safe space for learning and collaborating.",
//       link: "/resources/blog",
//     },
//   ];



    

//     const RenderMenuItems = (items: any, design: any) => {

//     //      const [openMenu, setOpenMenu] = useState<string | null>(null);

//     // const handleMenuClick = (menu: any) => {
      
//     // };
//         const baseClasses =
//           "absolute ml-96 mt-7 pl-[20px] w-[60%] h-auto border-2  rounded-md bg-white text-xl py-2 text-blue-700 grid grid-cols-2   gap-1 shadow-2xl";
//         const designClass =
//           design === "design1" || design === "design3"
//             ? "grid-cols-2 h-auto"
//             : design === "design2"
//             ? "grid-cols-3 h-auto gap-2 w-[85%] ml-[80px]"
//             : "grid-cols-1 h-auto";
    
  
//   return (
//     <MenuItems
//     transition
//     anchor="bottom end"
//     className={`${baseClasses} ${designClass} z-10`}
//   >
//     {items.map((item: any, index: any) => (
//       <MenuItem key={index}>
//         <Link href={item.link || "#"} onClick={() => setOpenMenu(null)}>
//           <button className="group flex flex-col items-start w-[400px] h-auto gap-3 py-2 px-5 text-left hover:bg-slate-200 hover:rounded-lg mt-[20px] ">
//             <div className="flex gap-5">
//               <div>{item.shortcut}</div>
//               <div>
//                 <div>
//                   <span className="font-bold">{item.label}</span>
//                 </div>
//                 <span className="text-sm text-gray-800 ">
//                   {item.description}
//                 </span>
//               </div>
//             </div>
//           </button>
//         </Link>
//       </MenuItem>
//     ))}
//   </MenuItems>
// );
// };
  


// export default RenderMenuItems
