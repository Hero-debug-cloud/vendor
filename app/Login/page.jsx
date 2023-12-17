import React from 'react';
import Navbar from "../../components/Navbar";
import Leftside from "./leftside";
import Rightside from "./rightside";

const Page = () => {
  return (
    <div className='w-[100%] h-[100%] border-white'>
         <Navbar/>
        <div className='flex h-[86%]'>
            <Leftside/>
            <Rightside/>
        </div> 
    </div>
  )
}

export default Page;