import FeatureSection from '@/app/Components/FeatureSection'
import React from 'react'

export const metadata ={
  title:"Custom Websites Made Easy | TribeSpace Website Builder"
}


function page() {
  return (
    <div>
      <div>
        <FeatureSection
          maintitle={"Website Builder"}
          url={"/assets/website-1.jpg"}
          description={
            " Empower your business with our intuitive website builder, designed to create stunning, professional websites with ease. Customize your site with a range of templates and features to perfectly reflect your brand. Enjoy seamless integration with essential business tools and responsive design for an optimal user experience across all devices. Enhance your online presence and attract more customers with a polished, effective website."
          }
          title1={"Manage your content effortlessly"}
          url1={"/assets/websitebuilder.jpg"}
          paragrap1={
             
"Simplify your business operations with our powerful content management system. Effortlessly organize, update, and publish your content, ensuring it’s always fresh and relevant. Our intuitive interface allows you to manage your website without any technical expertise. Enhance your online presence and engage your audience with ease through streamlined content management."
          }
          title2={"Customize toyour liking."}
          url2={"/assets/website-2.jpg"}
          paragrap2={
            
"Tailor our services to perfectly fit your business needs with our customizable solutions. Adjust features and functionalities to align with your specific requirements and preferences. Enjoy the flexibility to create a unique experience that truly represents your brand. Enhance efficiency and satisfaction by having tools that work exactly the way you want."
          }
          title3={" Sit back and relax"}
          url3={"/assets/website-3.jpg"}
          paragrap3={
            "Sit back and relax while we handle your business needs with our comprehensive solutions. From content management to financial operations, we've got you covered. Enjoy peace of mind knowing that our reliable and efficient services are working for you. Focus on what you do best, and let us take care of the rest."
          }
        
        />
      </div>
    </div>
  )
}

export default page
