import FeatureSection from '@/app/Components/FeatureSection'
import React from 'react'
export const metadata ={
  title:"Engage with Polls | TribeSpace  Share Your Opinion "
}


function page() {
  return (
    <div>
    <FeatureSection
      maintitle={"Polls"}
      smalltitle={
        "Ask the right Questions! Grab attention and Engage your audience"
      }
      url={"/assets/polls-1.jpg"}
      description={
        "Leverage our polls feature to gain valuable insights and engage your audience effectively. Create and distribute surveys to gather feedback on products, services, and market trends. Analyze real-time results to make informed decisions and refine your strategies. Boost engagement and drive business success with data-driven insights from our easy-to-use polling tools."
      }
      title1={" Convert Polls to Quizzes"}
      url1={"/assets/polls-3.jpg"}
      paragrap1={
        "Transform your polls into interactive quizzes with our versatile platform, enhancing engagement and gathering deeper insights. Customize quizzes to assess knowledge, gather feedback, and entertain your audience. Analyze responses to gain valuable data and refine your strategies. Increase participation and interaction while leveraging quiz results for strategic decision-making."
      }
      title2={"Create Regular Polls"}
      url2={"/assets/polls-2.jpg"}
      paragrap2={
        
"Create regular polls to continuously engage your audience and gather valuable feedback with ease. Design and distribute polls on various topics to stay informed about customer preferences and trends. Analyze results to make data-driven decisions and improve your offerings. Enhance your business strategy and keep your audience actively involved with consistent, insightful polling."
      }
      title3={"All your polls atone place"}
      url3={"/assets/polls-4.jpg"}
      paragrap3={
           
"Keep all your polls organized in one convenient place with our centralized management system. Access and review past and current polls effortlessly from a single dashboard. Streamline your data analysis and track trends efficiently. Enhance your decision-making process with a comprehensive view of all your polling activities."
      }
     
  
    />
  </div>
  )
}

export default page
