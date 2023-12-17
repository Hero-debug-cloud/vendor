"use client"
import React from 'react'
import Navbar from './Navbar';
import banner from "../../public/banner.png";
import Image from 'next/image';
import { MdDesignServices } from "react-icons/md";
import { MdCrisisAlert } from "react-icons/md";
import { FaSellcast } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { MdBusinessCenter } from "react-icons/md";
import { GrResources } from "react-icons/gr";

import { GrFormNextLink } from "react-icons/gr";
const category = [
  {
    icon: <MdDesignServices color="blue" size={30} />,
    name: "Design",
    jobs: 265,
  },
  {
    icon: <MdCrisisAlert color="blue" size={30} />,
    name: "Sales",
    jobs: 765,
  },
  {
    icon: <FaSellcast color="blue" size={30} />,
    name: "Marketing",
    jobs: 265,
  },
  {
    icon: <FaUsersViewfinder color="blue" size={30} />,
    name: "Finance",
    jobs: 265,
  },
  {
    icon: <FaLaptop color="blue" size={30} />,
    name: "Technology",
    jobs: 520,
  },
  {
    icon: <MdEngineering color="blue" size={30} />,
    name: "Engineering",
    jobs: 462,
  },
  {
    icon: <MdBusinessCenter color="blue" size={30} />,
    name: "Business",
    jobs: 213,
  },
  {
    icon: <GrResources color="blue" size={30} />,
    name: "Human Resources",
    jobs: 265,
  },
];
const features = [
  {
    img: icon,
    type: "Full time",
    position: "Email Marketing",
    comapny: "revolut",
    location: "Madrid,Spain",
    des: "Revolut is looking for email marketing to help team managing",
    tags: ["Marketing", "Design"],
  },
  {
    img: icon,
    type: "Full time",
    position: "Email Marketing",
    comapny: "revolut",
    location: "Madrid,Spain",
    des: "Revolut is looking for email marketing to help team managing",
    tags: ["Marketing", "Design"],
  },
  {
    img: icon,
    type: "Full time",
    position: "Email Marketing",
    comapny: "revolut",
    location: "Madrid,Spain",
    des: "Revolut is looking for email marketing to help team managing",
    tags: ["Marketing", "Design"],
  },
  {
    img: icon,
    type: "Full time",
    position: "Email Marketing",
    comapny: "revolut",
    location: "Madrid,Spain",
    des: "Revolut is looking for email marketing to help team managing",
    tags: ["Marketing", "Design"],
  },
  {
    img: icon,
    type: "Full time",
    position: "Email Marketing",
    comapny: "revolut",
    location: "Madrid,Spain",
    des: "Revolut is looking for email marketing to help team managing",
    tags: ["Marketing", "Design"],
  },
  {
    img: icon,
    type: "Full time",
    position: "Email Marketing",
    comapny: "revolut",
    location: "Madrid,Spain",
    des: "Revolut is looking for email marketing to help team managing",
    tags: ["Marketing", "Design"],
  },
  {
    img: icon,
    type: "Full time",
    position: "Email Marketing",
    comapny: "revolut",
    location: "Madrid,Spain",
    des: "Revolut is looking for email marketing to help team managing",
    tags: ["Marketing", "Design"],
  },
  {
    img: icon,
    type: "Full time",
    position: "Email Marketing",
    comapny: "revolut",
    location: "Madrid,Spain",
    des: "Revolut is looking for email marketing to help team managing",
    tags: ["Marketing", "Design"],
  },
];
import icon from "../../public/company_icon.png";

import dashboard from "../../public/dashboard.png";
import Footer from './Footer';

const Page = () => {
  return (
    <div>
      <Navbar ind={0} />
      {/* Banner */}
      <div className="h-[60vh]  flex flex-col justify-center items-center">
        <h1 className="text-[6vh] font-extrabold text-[#002E5B]">
          <span className="text-[#F4A120]">#1Ek no </span>
          Platform for vendor services
        </h1>
        <div className="w-[45%] text-center text-xs">
          We understand how time-consuming and difficult it is to find work.
          That is why we have developed services to assist you at every step of
          the way.
        </div>
        <div className="flex mt-8 w-[80%] justify-end">
          <div>
            <Image
              src={banner}
              width={250}
              height={250}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      {/* explore by category */}
      <div className="flex justify-center w-[100%]  ">
        <div className="w-[70vw] ">
          <h1 className="text-[#25324B] text-2xl font-extrabold">
            Explore by <span className="text-[#26A4FF]">category</span>
          </h1>
          <div className="grid grid-cols-4 gap-x-[14vh] gap-y-4 mt-3 ">
            {category.map((value, index) => {
              return (
                <div
                  className="w-[13vw] border rounded p-4 cursor-pointer hover:bg-blue-600 hover:text-white"
                  onClick={() => handleclick(index)}
                >
                  <div>{value.icon}</div>
                  <div className="mt-2 mb-2 font-bold">{value.name}</div>
                  <div className="text-xs flex">
                    {value.jobs} jobs available
                    <GrFormNextLink size={15} color="black" className="ml-5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* post */}
      <div className="flex justify-center w-[100%] mt-[8vh] mb-10">
        <div className="w-[70vw] bg-blue-600 rounded flex">
          {/* left */}
          <div className="p-8 text-white w-[50%] ">
            <h1 className="text-4xl font-extrabold w-[65%]">
              Start posting jobs today
            </h1>
            <div className="mt-5 mb-5">Start posting jobs for only $10.</div>
            <div className="bg-white rounded text-blue-600 w-fit p-2 font-bold cursor-pointer">
              Sign Up For Free
            </div>
          </div>

          {/* right */}
          <div className="w-[50%]">
            <Image
              src={dashboard}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>

      {/* Latest Jobs */}
      <div className="flex justify-center w-[100%] mt-[8vh] mb-8">
        <div className="w-[70vw] ">
          <h1 className="text-[#25324B] text-2xl font-extrabold">
            Top <span className="text-[#26A4FF]"> Rated services</span>
          </h1>
          <div className="grid grid-cols-2 gap-x-[8vh] gap-y-4 mt-3 ">
            {features.map((value, index) => {
              return (
                <div
                  className="w-[30vw] border rounded p-4 cursor-pointer hover:bg-blue-600 hover:text-white flex"
                  onClick={() => handleclick(index)}
                >
                  {/* left */}
                  <div className="flex">
                    <div>
                      <Image
                        src={value.img}
                        width={50}
                        height={50}
                        alt="compnay images"
                      />
                    </div>
                  </div>
                  {/* right */}
                  <div className="ml-3">
                    <div className="mt-2 font-bold">{value.position}</div>
                    <div className="text-sm mt-2 mb-2 flex">
                      <div>{value.comapny}</div>
                      <div>{value.location}</div>
                    </div>
                    <div className="flex mt-2 items-center">
                      <div className="bg-gray-100 rounded-xl text-green-500 text-sm mr-2 p-1">
                        {value.type}
                      </div>
                      {value.tags.map((val) => {
                        return (
                          <div className="bg-gray-100 rounded-xl text-green-500 text-sm mr-2 p-1">
                            {val}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer/>
    </div>
  );
}

export default Page;