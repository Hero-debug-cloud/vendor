"use client"
import React from 'react'
import color from "../../public/main-background.png";
import logo from "../../public/main_img.png"
import Image from "next/image";

const leftside = () => {
    const handleclick=()=>{};
  return (
    <div className="w-[65%] h-[100%] relative ">
      <Image
        src={color}
        width={400}
        height={400}
        alt="background color"
        className="absolute z-[-999]"
      />
      <Image
        src={logo}
        width={300}
        height={300}
        alt="main logo"
        className="absolute top-[30vh] left-[35vw] h-[50vh]"
      />
      <div className="flex flex-col ml-[12vw] mt-[16vh] ">
        <div className="font-bold text-4xl gap-3 tracking-wider z-999">
          Lightening fast <br /> and Top notch services
        </div>
        <div className="mt-[8vh] z-999">if you dont have account</div>
        <div
          className="text-blue-500 cursor-pointer z-999 hover:text-blue-800 font-medium mt-1"
          onClick={handleclick}
        >
          Register here!
        </div>
      </div>
    </div>
  );
}

export default leftside