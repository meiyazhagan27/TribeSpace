import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export const metadata ={
  title:"Blog | TribeSpace "
}


function page() {
  const allblogs = [
    {

      imgSrc: "/assets/education6.jpg",
      description:
        "TribeSpace enhances community interactions by incorporating cutting-edge AI technologies.  ",
      button:"Read More" ,
      link:"/features/memberships" 
    },
    {
     
      imgSrc: "/assets/blog1.jpg",
      description:
        "CASE Insights on Alumni Engagement: 3 key takeaways",
         button:"Read More",
         link:"/features/business" 
    },
    {
    
      imgSrc:"/assets/feedback6.jpg",
      description:
        "New innovation announced in TribeSpace Analytics Module",
         button:"Read More",
         link:"/features/payments" 
    },
    {
   
      imgSrc: "/assets/blog2.jpg",
      description:
        "American Psychological Association partners with TribeSpace to enhance member experience",
        button:"Read More",
         link:"/features/polls" 
    },
    {
      
      imgSrc: "/assets/blog3.jpg",
      description:
        "Community Onboarding: Expert Tips for Welcoming and Engaging New Members",
         button:"Read More",
         link:"/features/website-builder" 
    },
    {
      label: "Wishes and Festivals",
      imgSrc: "/assets/blog4.jpg",
      description:
        "The Power of Community Gamification: How To Gamify Your Community in 2024 ",
         button:"Read More",
         link:"/features/wishes-and-festivals" 
    },
  ];
  return (
    <div>
  <div className='bg-[#22223a] h-[600px] flex items-center justify-center'>
    <div>
    <p className='text-center text-white font-bold text-7xl'>The Tribespace Blog</p>
    <p className='text-center text-white mt-9'>Community building strategies, from community building pros</p>
    </div>
  </div>
<div>
<div className="grid lg:grid-cols-3 md:grid-cols-2  justify-center gap-9 pt-14 lg:px-[50px] md:px-6 ">
            {allblogs.map((platforms, index) => (
              <div key={index} className=" flex justify-center items-center ">
                <div className="bg-[rgba(255,255,255,0.04)] lg:h-[440px] md:h-[500px] lg:w-[360px] md:w-[350px] w-full shadow-2xl   cursor-pointer  border-2  bg-white  duration-500  transform  ">
                  <div className="flex justify-center ">
              <div className="relative lg:w-full lg:h-[200px] md:h-[250px]  md:w-full h-[50px] w-[50px]  overflow-hidden">
                <Image
                  src={platforms.imgSrc}
                  alt="logo"
                  fill
                  className="object-cover "
                  loading="lazy"
                />
              </div>
                  </div>

                
                  <div className="lg:leading-loose  lg:h-[130px]  text-base mt-14 ">
                    <p className=" px-10 font-bold text-xl  ">{platforms.description}</p>
                  </div>
                  
                  <Link  href={platforms.link} className="flex  justify-start  ">
                    <button className="font-bold lg:pl-[40px] pl-[40px] lg:mt-0 md:mt-9">{platforms.button}</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
</div>

    </div>
  )
}

export default page
