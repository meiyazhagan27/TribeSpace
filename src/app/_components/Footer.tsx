// import Image from "next/image";
// import React from "react";
// import { BsInstagram, BsTwitterX } from "react-icons/bs";
// import { FaLinkedin } from "react-icons/fa";
// import { SiWhatsapp } from "react-icons/si";


// function Footer() {
//   return (

//     <div className="bg-[#fbf9fa] lg:h-[550px]  md:h-[350px]   h-[1000px]">
//     <div className=" w-full flex lg:flex-row flex-col lg:justify-around  md:flex-row    mt-10  gap-1">
     
      
//     <div className="pt-7">
//         <div className="relative lg:h-[60px] lg:w-[280px] md:h-[60px] md:w-[190px] h-[50px] w-[180px] mx-auto lg:ml-0 md:ml-3">
//           <Image
//             src={"/assets/brand-name.png"}
//             alt={"logo"}
//             fill
//             className=""
//             loading="lazy"
//           />
//         </div>
//         </div>
         
      
//        <div className="flex  md:flex-row flex-col lg:justify-around justify-center md:mt-[35px] mt-8 lg:px-0   lg:gap-10 lg:mt-[50px] md:gap-5 lg:ml-0 md:ml-[40px]  md:space-y-0 space-y-7 ">
//        <div className="lg:w-[150px] md:w-[100px]">
//         <ul className=" lg:space-y-3 md:text-[13px] md:text-start text-center">
//             <p className="font-bold pb-3 lg:text-2xl md:text-[17px] text-xl   ">Quick Links</p>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Use Cases</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer"> Resources</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Features</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer"> Contact Us</li>
//         </ul>
//       </div>
//       <div className="lg:w-[200px] md:w-[130px] ">
//         <ul className="lg:space-y-3 md:text-[13px] md:text-start text-center">
//             <p className="font-bold pb-3 lg:text-2xl md:text-[17px]  text-xl">Features </p>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Memberships</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Business</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Payments</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Polls</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Events</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Groups</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Reports</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Feedbacks</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Notification</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Integration</li>
            
           
//         </ul>
//       </div>
//       <div className="lg:w-[130px] md:w-[100px]">
//         <ul className="lg:space-y-3 md:text-[13px] md:text-start text-center">
//             <p className="font-bold pb-3 lg:text-2xl md:text-[17px]  text-xl hover:cursor-pointer">Use Cases </p>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Online Courses</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer"> Education</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Social Networks</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer"> Brands</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Professional</li>
//         </ul>
//       </div>
//       <div>
//         <ul className="lg:space-y-3 md:text-[13px] md:text-start text-center">
//             <p className="font-bold pb-3 lg:text-2xl md:text-[17px]  text-xl ">Resources </p>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Product Updates</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer" >Event Hub</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Customer Stories</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Customer community</li>
//             <li className="text-gray-500 font-medium hover:text-blue-700 hover:cursor-pointer">Payment migration</li>
//         </ul>
//       </div>
//        </div>
//     </div>
//     <div className="h-[0.10px] bg-black mt-12"></div>
//     <p className="flex justify-center text-sm w-full mt-4 py-2">
//           © 2024 TRIBESPACE | All rights reserved
           
//         </p>
//         <div className="flex gap-7 justify-center pt-1">
//             <BsInstagram className="text-[20px] text-blue-700 " />
//             <SiWhatsapp className="text-[20px] text-blue-700"/>
//             <FaLinkedin className="text-[20px] text-blue-700" />
//             <BsTwitterX className="text-[20px] text-blue-700"/>
//             </div>
//     </div>
//   );
// }

// export default Footer;

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";

const quickLinks = [
  { label: "Use Cases", href: "/use-cases" },
  { label: "Resources", href: "/resources" },
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },

];

const features = [
  { label: "Memberships", href: "/features/memberships" },
  { label: "Business", href: "/features/business" },
  { label: "Payments", href: "/features/payments" },
  { label: "Polls", href: "/features/polls" },
  { label: "Events", href: "/features/events" },
  { label: "Groups", href: "/features/groups" },
  { label: "Reports", href: "/features/reports" },
  { label: "Feedbacks", href: "/features/feedbacks" },
  { label: "Notification", href: "/features/notification" },
  { label: "Integration", href: "/features/integration" }
];

const useCases = [
 
  { label: "Education", href: "/use-cases/education" },
  { label: "Social Networks", href: "/use-cases/social-networks" },
  { label: "Brands", href: "/use-cases/brands" },
  { label: "Professional", href: "/use-cases/professional" }
];

const resources = [
  { label: "Event Hub", href: "/event-hub" },
  { label: "Blog", href: "/blog" },
  { label: "Customer Stories", href: "/customer-stories" },
  // { label: "Customer Community", href: "/customer-community" },
 
];

function Footer() {
  return (
    <div className="bg-[#eaedfe] lg:h-[640px] md:h-[410px] h-[1040px]">
      <div className="w-full flex lg:flex-row flex-col lg:justify-around md:flex-row mt-10 gap-1">
        <div className="pt-7">
          <div className="relative lg:h-[60px] lg:w-[280px] md:h-[60px] md:w-[190px] h-[50px] w-[180px] mx-auto lg:ml-0 md:ml-3">
            <Image
              src={"/assets/brand-name.png"}
              alt={"logo"}
              fill
              className=""
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col lg:justify-around justify-center md:mt-[35px] mt-8 lg:px-0 lg:gap-10 lg:mt-[50px] md:gap-5 lg:ml-0 md:ml-[40px] md:space-y-0 space-y-7">
          <div className="lg:w-[150px] md:w-[100px]">
            <ul className="lg:space-y-3 lg:text-[19px] md:text-[13px] md:text-start text-center">
              <p className="font-bold pb-3 lg:text-2xl md:text-[17px] text-xl">Quick Links</p>
              {quickLinks.map((link, index) => (
                <li key={index} className="text-gray-500  hover:text-blue-700 hover:cursor-pointer">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-[200px] md:w-[130px]">
            <ul className="lg:space-y-3 lg:text-[19px] md:text-[13px] md:text-start text-center">
              <p className="font-bold pb-3 lg:text-2xl md:text-[17px] text-xl">Features</p>
              {features.map((feature, index) => (
                <li key={index} className="text-gray-500  hover:text-blue-700 hover:cursor-pointer">
                  <Link href={feature.href}>{feature.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-[130px] md:w-[100px]">
            <ul className="lg:space-y-3 lg:text-[19px] md:text-[13px] md:text-start text-center">
              <p className="font-bold pb-3 lg:text-2xl md:text-[17px] text-xl hover:cursor-pointer">Use Cases</p>
              {useCases.map((useCase, index) => (
                <li key={index} className="text-gray-500  hover:text-blue-700 hover:cursor-pointer">
                  <Link href={useCase.href}>{useCase.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <ul className="lg:space-y-3 lg:text-[19px] md:text-[13px] md:text-start text-center">
              <p className="font-bold pb-3  lg:text-2xl md:text-[17px] text-xl">Resources</p>
              {resources.map((resource, index) => (
                <li key={index} className="text-gray-500  hover:text-blue-700 hover:cursor-pointer">
                  <Link href={resource.href}>{resource.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="h-[0.10px] bg-black mt-12"></div>
      <p className="flex justify-center text-sm w-full mt-4 py-2">
        © 2024 TRIBESPACE | All rights reserved
      </p>
      <div className="flex gap-7 justify-center pt-1">
        <BsInstagram className="text-[20px] text-blue-700" />
        <SiWhatsapp className="text-[20px] text-blue-700" />
        <FaLinkedin className="text-[20px] text-blue-700" />
        <BsTwitterX className="text-[20px] text-blue-700" />
      </div>
    </div>
  );
}

export default Footer;
