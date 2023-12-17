import React from 'react'
import Image from "next/image";
import company from "../../public/company.png"
import {FiTwitter} from "react-icons/fi";
import {BiLogoFacebook} from "react-icons/bi";
import {BsInstagram} from "react-icons/Bs";
import {AiOutlineLinkedin} from "react-icons/Ai";
import android from "../../public/android.png";
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router=useRouter();
  const portals = [
    { name: "Service", link: "/Home" },
    { name: "Business", link: "/Business" }
  ];
    const options=[
        {
            main:"Company",
            services:["About us","Terms & Conditions","Privacy Policy","Anti-discrimination policy","UC impact","Careers"]
        },
        {
            main:"For customers",
            services:["UC reviews","Categories near you","Blog","Contact Us"]
        },
        {
            main:"for partners",
            services:["Register as a professional"]
        }
    ];
    const handleclick=(link)=>{
      router.push(`${link}`);
    }
  return (
    <div className="w-[100%] bg-[rgb(16,25,39)] flex items-center flex-col h-[40vh]">
      <div className="w-[70%] mt-5">
        <Image src={company} width={40} height={40} alt="company" />
      </div>
      <div className="w-[70%]  flex justify-between  mt-5 mb-5">
        {options.map((value, index) => {
          return (
            <div className="flex flex-col" key={index}>
              <h1 className="text-white mb-2">{value.main}</h1>
              {value.services.map((val, index) => {
                return (
                  <div
                    className="text-sm text-[#B4B4B4] mt-1 cursor-pointer"
                    key={index}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          );
        })}
        {/* <div>
          <h1 className="text-white mb-2">Portals</h1>

          {portals.map((value, index) => {
            return (
              <div className="text-[#B4B4B4] cursor-pointer mb-[5px]" key={index} onClick={()=>handleclick(value.link)}>
                {value.name}
              </div>
            );
          })}
        </div> */}
        <div>
          <h1 className="text-white mb-2">Company</h1>
          <div className="flex mb-4">
            <div className="bg-white rounded-full p-1 mr-2 cursor-pointer">
              <FiTwitter />
            </div>
            <div className="bg-white rounded-full p-1 mr-2 cursor-pointer">
              <BiLogoFacebook />
            </div>
            <div className="bg-white rounded-full p-1 mr-2 cursor-pointer">
              <BsInstagram />
            </div>
            <div className="bg-white rounded-full p-1 mr-2 cursor-pointer">
              <AiOutlineLinkedin />
            </div>
          </div>
          <div>
            <Image
              src={android}
              width={120}
              height={120}
              alt="company"
              className="mb-3 cursor-pointer"
            />
            {/* <Image src={apple} width={120} height={120} alt="company" className='cursor-pointer'/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer