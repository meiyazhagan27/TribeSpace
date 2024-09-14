import Image from "next/image";
import React from "react";

export const metadata ={
  title:"The Best and  Powerful Notification of TribeSpace "
}


function page() {
  const allpricing = [
    {
      label: "Connect",
      description1: "For community builders",
      description: "Pricing plans for all sizes ",
      description2:
        "An “out of the box” configuration that includes the community fundamentals needed to bring together and empower your members. ",
      title: "Includes:",
      title1: "Custom landing pages",
      title2: "Global admins with custom permissions",
      title3: "Resource libraries",
      title4: "User Directory and Map",
      title5: "Memberships",
      button: "Book a demo",
      link: "/features/polls",
      imgSrc: "/assets/checklist.png",
    },
    {
      label: "Scaler",
      description1: "For growing organizations",
      description: "Contact us for pricing",
      description2:
        "Full capabilities to structure and scale your digital community with the flexibility to expand alongside your growing needs.",
      title: "Includes:",
      title1: "Group admins with custom permissions",
      title2: "Customized user access",
      title3: "Visibility Restrictions",
      title4: "Ticketed Events",
      title5: "Additional membership options",
      button: "Book a demo",
      link: "/features/website-builder",
      imgSrc: "/assets/checklist.png",
    },
    {
      label: "Enterprise",
      description1:
        "For organizations with an established community and group structures",
      description: "Bespoke pricing",
      description2:
        "Our full suite of community management modules with custom services and support that bolster your community’s strategy and development.",
      title: "Includes:",
      title1: "Strategy sessions and workshops",
      title2: "Specialized support to fully brand your ",
      title3: "Advanced functionality for Groups",
      title4: "…and much more!",

      button: "Book a demo",
      link: "/features/wshes-festivals",
      imgSrc: "/assets/checklist.png",
    },
  ];
  return (
    <div>
      <div className=" h-[400px] mx-auto flex items-center justify-center bg-[#101f47]">
        <div className="space-y-7">
          <p className="text-6xl text-white text-center font-semibold">
            Pricing Plans That
          </p>
          <p className="text-6xl text-blue-700 font-semibold text-center ">
            Grow With You
          </p>
          <p className="text-xl text-white">
            Choose a Tribespace plan that fits your budget and business goals.
          </p>
        </div>
      </div>

      <div>
        <div className="w-[85%] mx-auto">
          <div className="grid lg:grid-cols-3  justify-center gap-7 pt-14">
            {allpricing.map((pricing, index) => (
              <div key={index} className="flex justify-center items-center">
                <div className="bg-[rgba(255,255,255,0.04)] lg:h-[900px]  lg:w-[430px] md:h-[1000px] md:w-[500px] w-full h-[900px] shadow-2xl   cursor-pointer  border-2 rounded-[10px] bg-white hover:scale-105 hover:border-blue-700 duration-500 space-y-5 px-10 transform  ">
                  <div className="pt-7">
                    <p className="text-center lg:text-4xl md:text-[50px] text-[#101f47] font-bold">
                      {pricing.label}
                    </p>
                  </div>
                  <div>
                    <p className="text-center lg:text-base md:text-[20px] h-[60px]">
                      {pricing.description1}
                    </p>
                  </div>
                  <div>
                    <p className="text-center text-4xl font-bold lg:h-[100px] md:h-[80px]  text-blue-700 ">
                      {pricing.description}
                    </p>
                  </div>
                  <div>
                    <p className="text-center  lg:text-base md:text-[20px] pt-5 h-[140px]">
                      {pricing.description2}
                    </p>
                  </div>
                  <div>
                    <p className="text-center text-2xl font-medium pt-3">
                      {pricing.title}
                    </p>
                  </div>
                  <div className=" flex gap-5  ">
                    <div className="lg:space-y-8 md:space-y-[54px] space-y-[50px] ">
                      <div className="relative lg:w-[25px] lg:h-[25px] md:h-[25px]  md:w-[25px] h-[20px] w-[20px]  overflow-hidden">
                        <Image
                          src={pricing.imgSrc}
                          alt="logo"
                          fill
                          className="object-cover "
                          loading="lazy"
                        />
                      </div>
                      <div className="relative lg:w-[25px] lg:h-[25px] md:h-[25px]  md:w-[25px] h-[20px] w-[20px]  overflow-hidden">
                        <Image
                          src={pricing.imgSrc}
                          alt="logo"
                          fill
                          className="object-cover "
                          loading="lazy"
                        />
                      </div>
                      <div className="relative lg:w-[25px] lg:h-[25px] md:h-[25px]  md:w-[25px] h-[20px] w-[20px]  overflow-hidden">
                        <Image
                          src={pricing.imgSrc}
                          alt="logo"
                          fill
                          className="object-cover "
                          loading="lazy"
                        />
                      </div>
                      <div className="relative lg:w-[25px] lg:h-[25px] md:h-[25px]  md:w-[25px] h-[20px] w-[20px]  overflow-hidden">
                        <Image
                          src={pricing.imgSrc}
                          alt="logo"
                          fill
                          className="object-cover "
                          loading="lazy"
                        />
                      </div>
                      {index < 2 && (
                        <div className="relative lg:w-[25px] lg:h-[25px] md:h-[25px]  md:w-[25px] h-[20px] w-[20px] overflow-hidden">
                          <Image
                            src={pricing.imgSrc}
                            alt="logo"
                            fill
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                    <div className="space-y-8 h-[250px] lg:text-base md:text-[24px]">
                      <p className="">{pricing.title1}</p>
                      <p className="">{pricing.title2}</p>
                      <p className="">{pricing.title3}</p>
                      <p className="">{pricing.title4}</p>
                      <p className="">{pricing.title5}</p>
                    </div>
                  </div>
                  <div className="flex justify-center lg:pt-5 md:pt-[30px]">
                    <button className="bg-blue-700 flex items-center justify-center text-white h-[45px] w-[280px] rounded-lg">
                      {pricing.button}
                    </button>
                  </div>
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
