import FeatureSection from '@/app/Components/FeatureSection'
import React from 'react'


export const metadata ={
  title:"Create, Share, and Attend Events | TribeSpace Community"
}



function page() {
  return (
    <div>
    <FeatureSection
      maintitle={"Events"}
      smalltitle={
        "Moments that make a difference."
      }
      url={"/assets/events-1.jpg"}
      description={
        "Exciting Events Tailored Just for You Join us for a series of engaging events that inspire and connect. From workshops to networking sessions, there's something for everyone. Learn, grow, and build lasting relationships with fellow attendees.Don't miss out on the opportunity to be part of these unique experiences!"
      }
      title1={" Guest Information, Event Location, and Required Documents"}
      url1={"/assets/events-2.jpg"}
      paragrap1={
        " Manage and access details about your guests. Find essential information about the event location. Prepare and organize required documents. Coordinate everything for a smooth event experience. Provide clear information for your guests."
      }
      title2={"Terms And Conditions"}
      url2={"/assets/events-3.jpg"}
      paragrap2={
        "Review the guidelines that govern the use of our services. Understand your rights and responsibilities as a user. Ensure compliance with our policies and procedures. These terms protect both you and our platform. By using our services, you agree to these conditions."
      }
      title3={" Add expenses to events and create an event-wise P&L"}
      url3={"/assets/events-4.jpg"}
      paragrap3={
        "Manage your events more effectively by adding expenses and generating event-wise Profit & Loss (P&L) statements. Track all event-related costs accurately and gain insights into your financial performance for each event. Simplify budgeting and financial planning with detailed P&L reports. Ensure better financial control and make informed decisions to enhance the profitability of future events."
      }
      title4={"Events Category"}
      url4={"/assets/events-5.jpg"}
      paragrap4={
        " Explore Our Diverse Event Categories From educational workshops to social gatherings, find the perfect event for you. Discover opportunities to learn, network, and have fun. Stay informed about upcoming events that match your interests.Dive into a world of experiences designed to inspire and engage."
      }
      title5={" Publish Invoices for events, memberships"}
      url5={"/assets/events-6.jpg"}
      paragrap5={
        "Streamline your financial operations by publishing invoices for events and memberships. Easily generate and distribute detailed invoices to attendees and members, ensuring transparency and timely payments. Enhance your administrative efficiency with automated invoicing. Provide a professional and organized experience for your clients and members."
      }
  
    />
  </div>
  )
}

export default page
