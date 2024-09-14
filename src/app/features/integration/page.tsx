import FeatureSection from '@/app/Components/FeatureSection'
import React from 'react'

export const metadata ={
  title:"TribeSpace Integration  Connect and Sync Your Platforms "
}


function page() {
  return (
    <div>
      <FeatureSection
        maintitle={"Integration"}
        smalltitle={
          "The integration settings are easily accessible"
        }
        url={"/assets/integration1.jpg"}
        description={
          "  TribeSpace's integration features allow seamless connectivity with various third-party tools and services. The platform supports Stripe for payment processing, enabling secure transactions within the community."
        }
        title1={"Stripe Integration"}
        url1={"/assets/integration2.png"}
        paragrap1={
          "The Stripe Integration feature allows TribeSpace users to securely connect their Stripe accounts for seamless payment processing. This integration simplifies handling transactions such as membership fees, event payments, and other financial activities directly within the community platform. It ensures secure and efficient financial management, providing users with a reliable way to manage their payments and financial records without needing to leave the platform."
        }
        title2={"Kwic Integration"}
        url2={"/assets/integration6.jpg"}
        paragrap2={
          "Kwic provides a powerful WhatsApp-based solution tailored for online courses, allowing you to send bulk messages, manage student communications, and automate notifications. Enhance your student engagement with custom alerts, rich media sharing, and efficient campaign management—all through WhatsApp. Perfect for keeping students informed and engaged throughout their learning journey. "
        }
        title3={"Website Integration"}
        url3={"/assets/integration4.jpeg"}
        paragrap3={
          "Website Integration in TribeSpace allows you to seamlessly connect your external website with the TribeSpace platform. This feature enables the synchronization of data, content, and user information between your website and TribeSpace, ensuring a cohesive user experience. It simplifies the management of web content and user interactions by allowing you to maintain a single source of truth. "
        }
        title4={"Receipt Managements"}
        url4={"/assets/integration5.jpg"}
        paragrap4={
          "Receipt Management in TribeSpace allows you to efficiently track and manage all transactional records associated with your community platform. This feature helps in organizing payment receipts, invoices, and other financial documents, making it easy to access and review transaction history. "
        }
        
      />
    </div>
  )
}

export default page
