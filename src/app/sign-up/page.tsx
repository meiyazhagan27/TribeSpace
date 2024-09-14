"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import Swal from 'sweetalert2'

function SingUp() {

    const onSubmit = async (event:any) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(event.target);
    
        formData.append("access_key", "781dd7d2-8fc1-4f77-a566-1dc3f44f4d0c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message snet Successfuly!",
                icon: "success"
              });
              form.reset();
        }
      };
    
  return (

    <div className="  ">
      <div className=' bg- h-[600px]'>

      
<div className='lg:w-[600px] mx-auto lg:pt-20 '>
  <p className='text-center lg:text-[70px] font-bold '>Let's book a <span className='text-blue-700'>demo! </span> </p>
  <p className='text-center font-semibold'>Feel free to reach out to us using the options below, and our dedicated team will respond to your inquiries promptly.</p>
  <div className='flex justify-center lg:mt-5 gap-5 font-semibold text-xl'>
    <Link href={"/"}>
    <p className='text-gray-400 hover:text-blue-700 hover:cursor-pointer '>Home</p>
    </Link>
  <p>Contact</p>
  </div>
</div>
</div>

   
    <div className='flex justify-center lg:px-0 md:px-0 px-[40px] overflow-hidden bg-[#f5f5ff] lg:h-[650px] w-[50%] mx-auto rounded-3xl -mt-[200px]'>
       
      <form onSubmit={onSubmit} className='  space-y-[50px] w-[50%] pl-5 pt-10 '> 
        <div className=''>
            <label className='flex' > </label>
             <input type="text" className='ring-1 ring-gray-300 w-[300px] rounded-sm   mt-3 py-2 hover:ring-blue-800 outline-none' placeholder=' Your Name' name='name' required />
        </div>
        <div className=''>
        <label className='flex' ></label>
             <input type="text" className='ring-1 ring-gray-300 w-[300px] rounded-sm   mt-3 py-2 outline-none hover:ring-blue-800' placeholder=' Mobile Number ' name='Mobile Number' required />
        </div>
        <div className=''>
        <label ></label>
             <input type="text" className='ring-1 ring-gray-300 w-[300px]  rounded-sm  mt-3 py-2 outline-none hover:ring-blue-800' placeholder=' Email Address'  name='email' required />
        </div>
        <div className=''>
        <label > </label>
             <textarea  className='ring-1 ring-gray-300 w-[300px]  rounded-sm   mt-3 py-2 outline-none hover:ring-blue-800 pb-[70px]' placeholder=' Your Message' name='Message' required />
        </div>
        <div className='ml-3'>
            <button className='bg-blue-800 py-3 px-6  rounded-md  transition-all duration-300 text-white text-sm  hover:text-blue-700 hover:bg-gray-300 w-[300px] mx-auto'>Send</button>
        </div>

      </form>
      <div className='bg-blue-700  w-[50%]'>
      <div className="relative lg:h-full lg:w-full md:h-[500px] md:w-[600px] h-[320px] w-[320px] mx-auto">
        <Image
          src={"/assets/from.jpg"}
          alt={"fromimg"}
          fill
          className="border-2 rounded-lg object-cover"
          loading="lazy"
        />
      </div>
      
    </div>
      
    </div>
   
    </div>
  )
}

export default SingUp
