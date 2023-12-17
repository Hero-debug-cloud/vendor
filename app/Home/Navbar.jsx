"use client"
import React from 'react'
import Image from "next/image";
import company from "../../public/company.png";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = ({ind}) => {
    const options=["Home","Services","Process","FAQs"];
    const [curr_index,setcurrind]=useState(ind);
    const router=useRouter();
    const handleclick=(index)=>{
       if(index==0) router.push("/");
    }
  return (
    <div className='flex justify-center p-3'>
      <div className='flex w-[70%] items-center justify-between'>
        <div className='flex items-center'>
          <Image
            src={company}
            width={20}
            height={20}
            alt="company"
          />
          <div className='ml-3'>Active Life</div>
        </div>

        <div className='flex ml-10'>
            {options.map((value,index)=>{
                return(
                    <div className={'text-sm w-fit mr-5 cursor-pointer '+(ind==index?"text-purple-500 border-b":"")} onClick={()=>handleclick(index)}>{value}</div>
                )
            })}
        </div>
        <div className='flex'>
          <div className='bg-blue-500 text-white font-bold rounded-lg cursor-pointer p-2' onClick={()=>router.push("/Login")}>LogIn/SignUp</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar