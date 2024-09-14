import FeatureSection from "@/app/Components/FeatureSection";
import React from "react";

export const metadata ={
  title:"Flexible Payment Methods | TribeSpace  Join with Confidence "
}

function page() {
  return (
    <div>
      <div>
        <FeatureSection
          maintitle={"Payments"}
          url={"/assets/pament.jpg"}
          description={
            "  Enhance your business efficiency with our seamless payment solutions, designed to streamline transactions and improve cash flow. Enjoy secure, fast, and reliable payment processing, reducing the risk of errors and delays. Our competitive rates and personalized support ensure a smooth financial operation. Stay ahead in the market with hassle-free, efficient payment management."
          }
          title1={"Payments - Offline and Online"}
          url1={"/assets/payment-1.jpg"}
          paragrap1={
            " We offer flexible payment options to meet your needs. Secure online payments are available for quick and easy transactions. Prefer offline methods? We’ve got you covered with convenient alternatives. Our payment system is designed for efficiency and reliability. Track and manage your payments effortlessly through our platform. Receive prompt support for any payment-related queries or issues.Your security and satisfaction are our top priorities."
          }
          title2={"Payment History and Status"}
          url2={"/assets/payment-2.jpg"}
          paragrap2={
            "Access a comprehensive record of your payment history anytime. View detailed information about each transaction. Monitor the status of recent payments to ensure accuracy. Track pending, completed, and failed payments seamlessly. Retrieve historical data for effective financial management. Receive real-time updates and notifications on payment status. Keep your payment records organized and up-to-date for easy reference."
          }
          title3={" Payment Type"}
          url3={"/assets/payment-3.jpg"}
          paragrap3={
            "Select from a range of payment types to best fit your needs. Choose between credit/debit cards, digital wallets, and bank transfers. Our system supports both online and offline payment methods. Enjoy a seamless transaction experience with multiple payment options. Ensure secure and efficient processing of your payments. Receive instant confirmation for your chosen payment type."
          }
          
        />
      </div>
    </div>
  );
}

export default page;
