import FeatureSection from '@/app/Components/FeatureSection'
import React from 'react'


export const metadata ={
  title:"Notification Settings | TribeSpace  Customize Your Alerts "
}

function page() {
  return (
    <div>
    <FeatureSection
      maintitle={"Notification "}
      smalltitle={
        "TribeSpace has just introduced new features to enhance your experience. Dive in to explore the latest updates and enjoy even more ways to connect with your community. "
      }
      url={"/assets/notification.png"}
      description={
        "We've just rolled out exciting new features to enhance your experience. Explore the latest updates and see how they can benefit you. Check them out now and stay connected with your community"
      }
      title1={" Real-Time Alerts"}
      url1={"/assets/notification1.jpg"}
      paragrap1={
        " TribeSpace provides immediate notifications to keep members informed about new posts, messages, and activities as they happen. This ensures that members stay engaged, respond promptly, and remain connected to the latest updates within the community. Real-time alerts help maintain an active and vibrant community by encouraging timely participation and interaction."
      }
      title2={"Customizable Notifications"}
      url2={"/assets/notification3.jpg"}
      paragrap2={
        "Members to personalize their notification preferences, selecting which types of alerts they receive and how frequently. This feature ensures that members only get notifications relevant to them, helping them stay informed without feeling overwhelmed. Whether they want to be notified about every post or only major announcements, this customization enhances the user experience by providing control over how they stay connected with the community."
      }
      title3={" Event Reminders"}
      url3={"/assets/notigication4.jpg"}
      paragrap3={
           
"TribeSpace sends timely notifications to remind members of upcoming events, webinars, and meetings. This feature ensures that members stay organized and don’t miss important community activities. Event reminders help boost attendance and engagement, keeping the community active and involved."
      }
      title4={"Push Notifications"}
      url4={"/assets/notification5.jpg"}
      paragrap4={
           
"For mobile users, TribeSpace offers push notifications that deliver important updates directly to their devices. This feature ensures members stay informed even when they are not actively using the platform, maintaining engagement on the go."
      }
      title5={"Mentions and Tags"}
      url5={"/assets/notification6.jpg"}
      paragrap5={
           
"TribeSpace notifies members when they are mentioned or tagged in discussions, posts, or comments. This feature keeps members engaged in relevant conversations and encourages interaction within the community."
      }
     
  
    />
  </div>
  )
}

export default page
