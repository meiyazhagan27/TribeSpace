"use client";  
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiSolidBadgeDollar } from "react-icons/bi";
import { BsCalendar2EventFill } from "react-icons/bs";
import { CgProfile, CgWebsite } from "react-icons/cg";
import { CiMemoPad } from "react-icons/ci";
import { FaBars, FaBlog, FaGraduationCap, FaPoll } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { GrGroup } from "react-icons/gr";
import { ImProfile } from "react-icons/im";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { MdBusinessCenter, MdOutlineBusinessCenter, MdOutlineNotificationsActive } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { TbBrandCodesandbox, TbReport, TbSocial } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";

const menuItems = [
  {
    label: "Education",
    shortcut: (
      <FaGraduationCap className="text-[40px] lg:bg-slate-200 text-blue-700 px-1 rounded-lg" />
    ),
    description:
      "Deliver online courses on your own course and community platform.",
    link: "/use-cases/education",
  },
  {
    label: "Social Networks",
    shortcut: (
      <TbSocial className="text-[40px] lg:bg-slate-200  text-blue-700 px-1 rounded-lg" />
    ),
    description:
      "Turn your customers into brand advocates with the power of community",
    link: "/use-cases/social-networks",
  },
  {
    label: "Brands",
    shortcut: (
      <TbBrandCodesandbox className="text-[40px] lg:bg-slate-200  text-blue-700 px-1 rounded-lg" />
    ),
    description:
      "Create a safe space for your people to meet, pray and learn together.",
    link: "/use-cases/brands",
  },
  {
    label: "Professional",
    shortcut: (
      <CgProfile className="text-[40px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
    ),
    description: "Create a social network for your membership organization.",
    link: "/use-cases/professional",
  },
  {
    label: "Business Networks",
    shortcut: (
      <MdOutlineBusinessCenter className="text-[40px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
    ),
    description: "Create a Business network for your membership organization.",
    link: "/use-cases/business-networks",
  },
];

const menuItems2 = [
  {
    label: "Memberships",
    shortcut: (
      <CiMemoPad className="text-[40px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
    ),
    description: "Elevate your experience with our membership options.",
    link: "/features/memberships",
  },
  {
    label: "Business",
    shortcut: (
      <MdBusinessCenter className="text-[40px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
    ),
    description: "Transform your business with innovative solutions.",
    link: "/features/business",
  },
  {
    label: "Payments",
    shortcut: (
      <BiSolidBadgeDollar className="text-[40px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
    ),
    description: "Simplify your payments with our comprehensive solutions.",
    link: "/features/payments",
  },
  {
    label: "Polls",
    shortcut: (
      <FaPoll className="text-[40px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
    ),
    description:
      "Engage your audience and understand their preferences with polls.",
    link: "/features/polls",
  },
  {
    label: "Website Builder",
    shortcut: (
      <CgWebsite className="text-[40px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
    ),
    description:
      "Build a professional website in minutes with our user-friendly builder.",
    link: "/features/websitebuilder",
  },
  {
    label: "Notification",
    shortcut: (
      <MdOutlineNotificationsActive className="text-[40px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
    ),
    description: "Real-time updates, right at your fingertips.",
    link: "/features/notification",
  },
  {
    label: "Events",
    shortcut: (
      <SlCalender className="text-[40px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
    ),
    description: "Discover and attend events designed to engage and entertain.",
    link: "/features/events",
  },
  {
    label: "Groups",
    shortcut: (
      <GrGroup className="text-[45px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
    ),
    description:
      "Connect and collaborate with like-minded individuals in our groups.",
    link: "/features/groups",
  },
  {
    label: "Reports",
    shortcut: (
      <TbReport className="text-[40px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
    ),
    description:
      " See how we're thriving with our latest activity and engagement report.",
    link: "/features/reports",
  },
  {
    label: "Integration",
    shortcut: (
      <IoExtensionPuzzleOutline className="text-[40px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
    ),
    description: "Seamless integration for a smoother experience",
    link: "/features/integration",
  },
  {
    label: "Feedbacks",
    shortcut: (
      <VscFeedback className="text-[40px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
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
      <BsCalendar2EventFill className="text-[40px] lg:bg-slate-200  text-blue-700 px-1 rounded-lg" />
    ),
    description:
      "Bring your students together in a safe space for learning and collaborating.",
    link: "/resources/event-hub",
  },
  {
    label: "Customer Stories",
    shortcut: (
      <ImProfile className="text-[40px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
    ),
    description:
      "Bring your students together in a safe space for learning and collaborating.",
    link: "/resources/customer-stories",
  },
  {
    label: "Blog",
    shortcut: (
      <FaBlog className="text-[40px] lg:bg-slate-200 px-1  text-blue-700 rounded-lg" />
    ),
    description:
      "Bring your students together in a safe space for learning and collaborating.",
    link: "/resources/blog",
  },
];

// function TopBartwo() {
//   const [openDropdown, setOpenDropdown] = useState(null);

//   const handleDropdownToggle = (dropdown:any) => {
//     setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//   };

//   const handleLinkClick = () => {
//     setOpenDropdown(null); 
//   };

//   return (
//     <div className="z-50 sticky top-0">
//       <nav className="bg-white md:px-10 p-[10px] max-w-screen-2xl lg:h-[85px] md:h-[120px] border-b mx-auto z-50 text-black right-0 left-0 py-5 px-5 sticky top-0">
//         <div className="flex items-center lg:w-[85%] lg:h-[50px] md:h-[80px] mx-auto md:px-6 justify-between">
//           <div className="flex items-center space-x-[60px]">
//             <a href="/" className="text-xl">
//               <div className="flex items-center">
//                 <div className="relative lg:h-[35px] lg:w-[165px] md:h-[50px] md:w-[170px] h-[30px] w-[110px] mx-auto">
//                   <Image
//                     src={"/assets/brand-name.png"}
//                     alt={"appimg"}
//                     fill
//                     className=""
//                     loading="lazy"
//                   />
//                 </div>
//               </div>
//             </a>

//             <MobileNav />

           
//             <div className="hidden lg:flex items-center gap-4 pl-[70px] mt-1 transition-all">
//               <div className="relative group px-2 py-8 transition-all">
//                 <p
//                   className="flex cursor-pointer items-center gap-1"
//                   onClick={() => handleDropdownToggle('useCases')}
//                 >
//                   <span className="font-semibold text-[17px]">Use Cases</span>
//                   <IoIosArrowUp
//                     className={`transition-all text-[19px] mt-[2px] ${
//                       openDropdown === 'useCases' ? '' : 'rotate-180'
//                     }`}
//                   />
//                 </p>
               
//                 {openDropdown === 'useCases' && (
//                   <div className="absolute left-[-200px] top-[90px] w-[900px] h-[320px] flex-col gap-1 rounded-lg bg-white py-3 shadow-md">
//                     <div className="grid lg:grid-cols-2 md:grid-cols-2 justify-center gap-3 px-5">
//                       {menuItems.map((item, index) => (
//                         <div key={index} className="justify-center items-center">
//                           <Link
//                             href={item.link}
//                             className="group flex flex-col items-start w-[400px] h-auto gap-3 py-2 px-5 text-left hover:bg-slate-200 hover:rounded-lg"
//                             onClick={handleLinkClick}
//                           >
//                             <div className="flex gap-5">
//                               <div>{item.shortcut}</div>
//                               <div>
//                                 <div>
//                                   <span className="font-bold text-blue-700">
//                                     {item.label}
//                                   </span>
//                                 </div>
//                                 <span className="text-sm text-gray-800">
//                                   {item.description}
//                                 </span>
//                               </div>
//                             </div>
                            
//                           </Link>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

           
//             <div className="hidden lg:flex items-center gap-4 mt-1 transition-all">
//               <div className="relative group px-2 py-8 transition-all">
//                 <p
//                   className="flex cursor-pointer items-center gap-1"
//                   onClick={() => handleDropdownToggle('features')}
//                 >
//                   <span className="font-semibold text-[17px]">Features</span>
//                   <IoIosArrowUp
//                     className={`transition-all text-[19px] mt-[2px] ${
//                       openDropdown === 'features' ? '' : 'rotate-180'
//                     }`}
//                   />
//                 </p>
//                 {openDropdown === 'features' && (
//                   <div className="absolute left-[-550px] top-[90px] w-[1300px] h-[420px] flex-col gap-1 rounded-lg bg-white py-3 shadow-md">
//                     <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-center gap-3 px-5">
//                       {menuItems2.map((item, index) => (
//                         <div key={index} className="justify-center items-center">
//                           <Link
//                             href={item.link}
//                             className="group flex flex-col items-start w-[400px] h-auto gap-3 py-2 px-5 text-left hover:bg-slate-200 hover:rounded-lg"
//                             onClick={handleLinkClick}
//                           >
//                             <div className="flex gap-5">
//                               <div>{item.shortcut}</div>
//                               <div>
//                                 <div>
//                                   <span className="font-bold text-blue-700">
//                                     {item.label}
//                                   </span>
//                                 </div>
//                                 <span className="text-sm text-gray-800">
//                                   {item.description}
//                                 </span>
//                               </div>
//                             </div>
//                           </Link>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

            
//             <div className="hidden lg:flex items-center gap-1 mt-1 transition-all">
//               <div className="relative group px-2 py-8 transition-all">
//                 <p
//                   className="flex cursor-pointer items-center gap-1"
//                   onClick={() => handleDropdownToggle('resources')}
//                 >
//                   <span className="font-semibold text-[17px]">Resources</span>
//                   <IoIosArrowUp
//                     className={`transition-all text-[19px] mt-[2px] ${
//                       openDropdown === 'resources' ? '' : 'rotate-180'
//                     }`}
//                   />
//                 </p>
//                 {openDropdown === 'resources' && (
//                   <div className="absolute left-[-300px] top-[90px] w-[850px] h-[220px] flex-col gap-1 rounded-lg bg-white py-3 shadow-md">
//                     <div className="grid lg:grid-cols-2 md:grid-cols-2 justify-center gap-3 px-5">
//                       {menuItems3.map((item, index) => (
//                         <div key={index} className="justify-center items-center">
//                           <Link
//                             href={item.link}
//                             className="group flex flex-col items-start w-[400px] h-auto gap-3 py-2 px-5 text-left hover:bg-slate-200 hover:rounded-lg"
//                             onClick={handleLinkClick}
//                           >
//                             <div className="flex gap-5">
//                               <div>{item.shortcut}</div>
//                               <div>
//                                 <div>
//                                   <span className="font-bold text-blue-700">
//                                     {item.label}
//                                   </span>
//                                 </div>
//                                 <span className="text-sm text-gray-800">
//                                   {item.description}
//                                 </span>
//                               </div>
//                             </div>
//                           </Link>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <Link href={"/pricing"}>
//               <p className="font-semibold cursor-pointer text-[17px] hidden lg:flex">
//                 Pricing
//               </p>
//             </Link>
//           </div>

//           <div className="lg:flex items-center justify-center hidden space-x-9">
        
//             <Link href={"/sign-up"}>
//               <button className="bg-blue-600 rounded-[100px] h-[45px] w-[150px] text-white hover:bg-blue-900">
//               Book demo
//               </button>
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default TopBartwo;

function TopBartwo() {

  // const [openDropdown, setOpenDropdown] = useState(false);

  // // const handleDropdownToggle = (dropdown:any) => {
  // //   setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  // // };

  // const handleLinkClick = () => {
  //   setOpenDropdown(null); 
  // };


  return (
    <div className="z-50 sticky top-0">
      <nav className="bg-white md:px-10   p-[10px] max-w-screen-2xl lg:h-[85px] md:h-[120px] border-b mx-auto z-50 text-black   right-0 left-0 py-5 px-5 sticky top-0">
        <div className="flex items-center lg:w-[85%] lg:h-[50px] md:h-[80px] mx-auto md:px-6 justify-between">
          <div className="flex items-center  space-x-[43px]">
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

            <MobileNav />
            <div className=" hidden lg:flex items-center gap-4 pl-[70px] mt-1  transition-all">
              <div className="relative group px-5 py-8 transition-all">
                <p className="flex cursor-pointer  items-center gap-1 ">
                  <span className="font-semibold text-[17px]">Use Cases</span>
                  <IoIosArrowUp className="rotate-180 transition-all text-[19px] mt-[2px] group-hover:rotate-0" />
                </p>
                <div className=" py-1 ">
                  <div className={  `absolute left-[-200px]  top-[90px] hidden w-[900px] h-[320px] flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex`}>
                    <div className="grid lg:grid-cols-2 md:grid-cols-2  justify-center gap-3 px-5 ">
                      {menuItems.map((item, index) => (
                        <div
                          key={index}
                          className="  justify-center items-center "
                        >
                          <Link
                            href={item.link}
                            className="group flex flex-col items-start w-[400px] h-auto gap-3 py-2 px-5 text-left hover:bg-slate-200 hover:rounded-lg  "
                           
                          >
                            <div className="flex gap-5">
                              <div>{item.shortcut}</div>
                              <div>
                                <div>
                                  <span className="font-bold  text-blue-700">
                                    {item.label}
                                  </span>
                                </div>
                                <span className="text-sm text-gray-800 ">
                                  {item.description}
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="hidden lg:flex items-center gap-4 mt-1 transition-all">
              <div className="relative group px-5 py-8 transition-all">
                <p className="flex cursor-pointer items-center gap-1 ">
                  <span className="font-semibold text-[17px]">Features</span>
                  <IoIosArrowUp className="rotate-180 transition-all text-[19px] mt-[2px] group-hover:rotate-0" />
                </p>
                <div className=" py-1 ">
                  <div className="absolute left-[-500px]  top-[90px] hidden w-[1300px] h-[420px] flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2  justify-center gap-3 px-5 ">
                      {menuItems2.map((item, index) => (
                        <div
                          key={index}
                          className="  justify-center items-center "
                        >
                          <Link
                            href={item.link}
                            className="group flex flex-col items-start w-[400px] h-auto gap-3 py-2 px-5 text-left hover:bg-slate-200 hover:rounded-lg  "
                          >
                            <div className="flex gap-5">
                              <div>{item.shortcut}</div>
                              <div>
                                <div>
                                  <span className="font-bold  text-blue-700">
                                    {item.label}
                                  </span>
                                </div>
                                <span className="text-sm text-gray-800 ">
                                  {item.description}
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-1 mt-1 transition-all">
              <div className="relative group px-5 py-8 transition-all">
                <p className="flex cursor-pointer items-center gap-1 ">
                  <span className="font-semibold text-[17px]">Resources</span>
                  <IoIosArrowUp className="rotate-180 transition-all text-[19px] mt-[2px] group-hover:rotate-0" />
                </p>
                <div className=" py-1 ">
                  <div className="absolute left-[-300px]  top-[90px] hidden w-[850px] h-[220px] flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2  justify-center gap-3 px-5 ">
                      {menuItems3.map((item, index) => (
                        <div
                          key={index}
                          className="  justify-center items-center "
                        >
                          <Link
                            href={item.link}
                            className={`group flex flex-col items-start w-[400px] h-auto gap-3 py-2 px-5 text-left hover:bg-slate-200 hover:rounded-lg ${''}`}
                          >
                            <div className="flex gap-5">
                              <div>{item.shortcut}</div>
                              <div>
                                <div>
                                  <span className="font-bold  text-blue-700">
                                    {item.label}
                                  </span>
                                </div>
                                <span className="text-sm text-gray-800 ">
                                  {item.description}
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-[17px] hidden lg:flex">
                Pricing
              </p>
            </div>
          </div>
          <div className="lg:flex items-center justify-center hidden space-x-9">

            <Link href={"/sign-up"}>
              <button className="bg-blue-600 rounded-[100px] h-[45px] w-[150px] text-white hover:bg-blue-900">
                Get started
              </button>
            </Link>
          </div>
         
        </div>
        
      </nav>
    </div>
  );
}
export default TopBartwo;



function MobileNav() {
  const [menuState, setMenuState] = useState({
    isMenuOpen: false,
    isUseCasesOpen: false,
    isFeaturesOpen: false,
    isResourcesOpen: false,
  });

  const toggleMenu = () => {
    setMenuState((prevState) => ({
      ...prevState,
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  const closeMenu = () => {
    setMenuState({
      isMenuOpen: false,
      isUseCasesOpen: false,
      isFeaturesOpen: false,
      isResourcesOpen: false,
    });
  };

  const toggleUseCases = () => {
    setMenuState((prevState) => ({
      ...prevState,
      isUseCasesOpen: !prevState.isUseCasesOpen,
      isFeaturesOpen: false,
      isResourcesOpen: false,
    }));
  };

  const toggleFeatures = () => {
    setMenuState((prevState) => ({
      ...prevState,
      isFeaturesOpen: !prevState.isFeaturesOpen,
      isUseCasesOpen: false,
      isResourcesOpen: false,
    }));
  };

  const toggleResources = () => {
    setMenuState((prevState) => ({
      ...prevState,
      isResourcesOpen: !prevState.isResourcesOpen,
      isUseCasesOpen: false,
      isFeaturesOpen: false,
    }));
  };

  return (
    <div className="lg:hidden z-50">
      <div className="lg:hidden md:pl-[50px] pl-0 pt-1">
        <button
          onClick={toggleMenu}
          className="text-blue-600 md:ml-[300px] ml-[130px] focus:outline-none"
        >
          {menuState.isMenuOpen ? (
            <FaXmark className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] text-blue-600" />
          ) : (
            <FaBars className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] text-blue-600" />
          )}
        </button>
      </div>
      <div
        className={`px-5 pt-4 h-full md:w-[450px] w-full text-center pb-5 z-50 bg-white text-xl ${
          menuState.isMenuOpen ? "block fixed left-0" : "hidden"
        }`}
      >
        <div className="mt-11">
          <div className="flex items-center gap-4 md:pl-[50px] pl-[100px] transition-all">
            <div className="relative group px- py-5 transition-all">
              <p onClick={toggleUseCases} className="flex cursor-pointer items-center gap-1">
                <span className="font-semibold text-[25px]">Use Cases</span>
                <IoIosArrowUp
                  className={`transition-all text-[19px] mt-[2px] ${
                    menuState.isUseCasesOpen ? "" : "rotate-180"
                  }`}
                />
              </p>
              <div className="py-1">
                <div
                  className={`absolute z-50 md:left-[-50px] left-[-90px] top-[90px] ${
                    menuState.isUseCasesOpen ? "flex" : "hidden"
                  } w-[300px] h-[380px] flex-col rounded-lg bg-white py-3 shadow-md transition-all`}
                >
                  <div className="grid grid-cols-1 justify-center gap-3 px-5">
                    {menuItems.map((item, index) => (
                      <div key={index} className="justify-center items-center">
                        <Link
                          onClick={closeMenu}
                          href={item.link}
                          className="group flex flex-col items-start w-[280px] h-auto py-2 px-5 text-left"
                        >
                          <div className="flex gap-5">
                            <div>{item.shortcut}</div>
                            <div>
                              <div>
                                <span className="font-bold text-blue-700">
                                  {item.label}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center z-50 gap-4 md:pl-[50px] pl-[100px] transition-all">
            <div className="relative group px- py-5 transition-all">
              <p onClick={toggleFeatures} className="flex cursor-pointer items-center gap-1">
                <span className="font-semibold text-[25px]">Features</span>
                <IoIosArrowUp
                  className={`transition-all text-[19px] mt-[2px] ${
                    menuState.isFeaturesOpen ? "" : "rotate-180"
                  }`}
                />
              </p>
              <div className="py-1">
                <div
                  className={`absolute md:left-[-60px] left-[-133px] md:top-[90px] ${
                    menuState.isFeaturesOpen ? "flex" : "hidden"
                  } w-[430px] h-[450px] flex-col gap-1 rounded-lg z-50 bg-white py-3 shadow-md transition-all`}
                >
                  <div className="grid grid-cols-2 justify-center gap-3 px-5">
                    {menuItems2.map((item, index) => (
                      <div key={index} className="justify-center items-center">
                        <Link
                          onClick={closeMenu}
                          href={item.link}
                          className="group flex flex-col items-start w-[220px] h-auto gap-3 py-2 px-5 text-left hover:bg-slate-200 hover:rounded-lg"
                        >
                          <div className="flex md:gap-5 gap-2">
                            <div className="md:text-[30px] text-[25px]">{item.shortcut}</div>
                            <div>
                              <div className="text-[13px] md:text-[15px]">
                                <span className="font-bold text-blue-700">
                                  {item.label}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center z-50 gap-1 md:pl-[50px] pl-[100px] transition-all">
            <div className="relative group px- py-5 transition-all">
              <p onClick={toggleResources} className="flex cursor-pointer items-center gap-1">
                <span className="font-semibold text-[25px]">Resources</span>
                <IoIosArrowUp
                  className={`transition-all text-[19px] mt-[2px] ${
                    menuState.isResourcesOpen ? "" : "rotate-180"
                  }`}
                />
              </p>
              <div className="py-1">
                <div
                  className={`absolute md:left-[-20px] left-[-90px] top-[90px] ${
                    menuState.isResourcesOpen ? "flex" : "hidden"
                  } w-[300px] h-[220px] flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all`}
                >
                  <div className="grid grid-cols-1 justify-center gap-3 px-5">
                    {menuItems3.map((item, index) => (
                      <div key={index} className="justify-center items-center">
                        <Link
                          onClick={closeMenu}
                          href={item.link}
                          className="group flex flex-col items-start w-[400px] h-auto gap-3 py-2 px-5 text-left hover:bg-slate-200 hover:rounded-lg"
                        >
                          <div className="flex gap-5">
                            <div>{item.shortcut}</div>
                            <div>
                              <div>
                                <span className="font-bold text-blue-700">
                                  {item.label}
                                </span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold text-[25px] mt-4 md:pl-[50px] pl-[120px] flex">
              <Link
                onClick={closeMenu}
                href="/pricing"
                className="hover:bg-slate-200 hover:rounded-lg"
              >
                Pricing
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}




