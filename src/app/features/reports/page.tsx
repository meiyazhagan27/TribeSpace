import FeatureSection from '@/app/Components/FeatureSection'
import React from 'react'

export const metadata ={
  title:"Detailed Reports and Insights | TribeSpace  Analyze Your Data "
}


function page() {
  return (
    <div>
      <FeatureSection
        maintitle={"Reports"}
        smalltitle={
          "Reporting features that allow community managers to track and analyze various aspects of their platform."
        }
        url={"/assets/report1.jpg"}
        description={
          "With these tools, TribeSpace ensures that community leaders have the information they need to make informed decisions and drive growth."
        }
        title1={" Overview"}
        url1={"/assets/report2.jpg"}
        paragrap1={
          "Reporting feature provides a high-level summary of community activities, offering key insights into member engagement, content performance, and overall platform health. This section gives community managers a quick glance at the most important metrics, such as user activity, post effectiveness, and event participation. "
        }
        title2={"Reach & Engagement"}
        url2={"/assets/report3.jpg"}
        paragrap2={
           "Reach & Engagement reports offer detailed insights into how well your content is resonating with the community. These reports track key metrics such as the number of views, likes, comments, and shares, helping you understand the level of interaction your content is generating. "
        }
        title3={"Workshops"}
        url3={"/assets/report4.jpg"}
        paragrap3={
          "TribeSpace's Workshops feature offers detailed reports on the performance and engagement of community-led workshops. These reports provide insights into attendance, participant engagement, and feedback, allowing organizers to assess the success of each workshop. "
        }
        title4={"Business"}
        url4={"/assets/report5.jpg"}
        paragrap4={
          " Business reports focus on tracking key metrics related to business activities within the community. These reports provide insights into page views, user interactions, and other critical business-related data. By analyzing these metrics, community managers can understand how their community is contributing to business goals, identify areas for improvement, and make data-driven decisions to enhance overall performance. This feature ensures that the community's impact on business outcomes is clearly understood and optimized for success."
        }
        title5={" People & Posts,Message"}
        url5={"/assets/report6.jpg"}
        paragrap5={
          "People reports offer insights into member activity and engagement. These reports help community managers identify top contributors, track member participation, and understand how members are interacting with the platform.The Posts reports track the performance of individual posts, providing metrics on views, likes, shares, and comments. This helps community managers assess the effectiveness of content and refine strategies to enhance engagement. The Message reports monitor communication within the community, including direct messages and group chats. These insights help understand how members are connecting and collaborating, ensuring that communication channels are effectively supporting community interaction."
        }
      />
    </div>
  )
}

export default page
