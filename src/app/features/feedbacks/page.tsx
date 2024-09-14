import FeatureSection from '@/app/Components/FeatureSection'
import React from 'react'

export const metadata ={
  title:"Submit and View Feedback | TribeSpace  Share Your Thoughts "
}


function page() {
  return (
    <div>
      <FeatureSection
        maintitle={"Feedbacks"}
        smalltitle={
          " By encouraging feedback, TribeSpace fosters a more interactive and user-driven environment."
        }
        url={"/assets/feedback1.jpg"}
        description={
          "   This allows for continuous improvement by collecting opinions, suggestions, and reactions from members. The feedback feature helps ensure that the community remains responsive to its members' needs and fosters an interactive environment where users feel heard and valued."
        }
        title1={"Content Feedback"}
        url1={"/assets/feedback2.jpg"}
        paragrap1={
          " TribeSpace enables members to provide feedback on articles, posts, and other content within the community. This feature helps content creators understand what resonates with the audience, allowing for improvements and more targeted content creation. By gathering and analyzing member feedback, TribeSpace ensures that the content remains relevant, valuable, and aligned with the interests of the community, fostering a more engaging and informative environment for all members."
        }
        title2={"Event Feedback"}
        url2={"/assets/feedback3.jpg"}
        paragrap2={
          "This feedback feature helps organizers understand what worked well and where improvements can be made for future events. By gathering insights directly from attendees, TribeSpace ensures that future events are better tailored to the community’s preferences and expectations, leading to more successful and engaging experiences for all members."
        }
        title3={"Discussion Feedback"}
        url3={"/assets/feedback4.jpg"}
        paragrap3={
          " This feature helps moderators and participants understand which discussions are most engaging, relevant, or in need of improvement. By collecting and analyzing feedback on discussions, TribeSpace ensures that conversations remain meaningful and aligned with the interests and needs of the community."
        }
        title4={"Anonymous Feedback"}
        url4={"/assets/feedback5.jpg"}
        paragrap4={
          "TribeSpace offers an anonymous feedback feature, allowing members to share their thoughts, suggestions, or concerns without revealing their identity. This encourages honest and open communication, ensuring that even sensitive issues can be addressed."
        }
        title5={"Suggestion Box"}
        url5={"/assets/feedback6.jpg"}
        paragrap5={
          "TribeSpace includes a Suggestion Box feature where members can propose ideas, new features, or improvements for the community. This tool empowers members to actively contribute to the growth and development of the platform by sharing their thoughts on how to enhance the community experience. "
        }
      />
    </div>
  )
}

export default page
