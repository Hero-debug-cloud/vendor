"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const list=["Home","About","Blog","Pages","Contact"];
const Navbar = () => {
  const router=useRouter();
    const handleclick=(index)=>{
      if(index==0) router.push("/Home");
      else router.push("/");
    }
    
  return (
    <div className="h-[10%] flex p-[5vh] justify-between w-[100%] mt-[4vh]">
      <div className="flex w-[50%] items-center justify-center">
        {list.map((value,index) => {
          return <div className='ml-4 mr-4 cursor-pointer hover:text-blue-500 font-medium' onClick={()=>handleclick(index)} key={index}>{value}</div>;
        })}
      </div>
      <div className='w-[50%] flex items-center justify-center'>
        <select id="option" className='outline-none cursor-pointer p-2'>
          <option value="volvo" >Business</option>
          <option value="saab">test2</option>
          <option value="vw">test3</option>
        </select>
      </div>
    </div>
  );
}

export default Navbar