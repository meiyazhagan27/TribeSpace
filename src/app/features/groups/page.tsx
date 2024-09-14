import FeatureSection from '@/app/Components/FeatureSection'
import React from 'react'


export const metadata ={
  title:"Explore and Manage Groups | TribeSpace – Engage with Your Community"
}


function page() {
  return (
    <div>
    <FeatureSection
      maintitle={"Groups"}
      smalltitle={
        "Discussions and Communication"
      }
      url={"/assets/Membership2.jpg"}
      description={
        "The Groups feature allows users to connect and collaborate around shared interests or goals. By creating and joining groups, members can participate in focused discussions, share resources, and build a sense of community. Groups provide a space for meaningful interactions, whether for professional networking, project collaboration, or social engagement. This feature enhances the user experience by fostering connections and facilitating communication. It’s a powerful tool for bringing people together, enabling them to work towards common objectives. Groups are where community and collaboration thrive."
      }
      title1={" Limitless Groups and Forums to Enhance Discussions"}
      url1={"/assets/groups1.jpg"}
      paragrap1={
        " With limitless groups and forums, you can effortlessly create and manage spaces tailored to any topic or interest. These versatile platforms are designed to enhance discussions, foster collaboration, and connect members in meaningful ways."
      }
      title2={"Post videos and PDF files for members and set up an informative knowledge center."}
      url2={"/assets/groups-1.jpeg"}
      paragrap2={
        "Share videos and PDF files with your members to enrich their experience and provide valuable resources. Create a well-organized knowledge center to centralize information and facilitate easy access to essential materials."
      }
      title3={" Create your Business Group"}
      url3={"/assets/net.jpg"}
      paragrap3={
        "Start your own Business Group to connect with professionals and collaborate on industry-specific topics. Build a focused community where you can share insights, resources, and opportunities for mutual growth."
      }

  
    />
  </div>
  )
}

export default page
