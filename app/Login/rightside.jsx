"use client";
import React, { useState } from "react";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import GoogleButton from "react-google-button";
import axios from "axios";
import { useRouter } from "next/navigation";

const Rightside = () => {
  const router=useRouter();
  const host = "https://api-dev.activetlife.com";
  // const host = process.env.BASE_URL;
  const options = ["Mobile", "Username"];
  const [curr_index, setcurr_index] = useState(0);
  const [show, setshow] = useState(false);
  const handleshow = () => {
    setshow(!show);
  };
  const [checkotp, setcheckopt] = useState("");
  const [otp,setotp]=useState("");
  const [checking, setchecking] = useState(false);
  const handlelogin = async () => {
    try {
      const { data } = await axios.post(`${host}/api/auth/genrateOtp`, {
        type: "login",
        mobileNo: number,
      });
      setcheckopt(data.opt);
      localStorage.setItem("token", data.token);
      setchecking(true);
    } catch (err) {
      console.log("error " + err);
    }
  };
  const handlegoogle = () => {};

  const [number, setnumber] = useState("");
  const handlechange = (e) => {
    setnumber(e.target.number);
  };
  const handlego=()=>{
    if(opt==checkotp){
       router.push("/Home");
    }
    else{
      console.log("Wrong OTP");
    }
  }
  return (
    <div className="w-[100%] p-3">
      <div className="w-[86%] flex flex-col items-end mr-[50vw] ">
        <div className="w-[45%]">
          <div className="text-lg font-extrabold text-black">LogIn</div>
          <div className="flex flex-col items-center mt-5 relative">
            <input
              value={number}
              onChange={handlechange}
              type="text"
              className="bg-gray-200 p-3 rounded outline-none text-black mt-3 w-[100%]"
              placeholder="Mobile Number"
            />
            <div className="w-[100%] text-sm text-end text-gray-400 mt-1 cursor-pointer">Generate OTP</div>
            <input
              value={otp}
              onChange={(e) => setotp(e.target.value)}
              type="text"
              className="bg-gray-200 p-3 rounded outline-none text-black w-[100%] mt-4"
              placeholder="Enter Opt"
            />

            {checking ? (
              <div
                className="bg-blue-500 text-white cursor-pointer flex justify-center items-center w-[100%] p-3 rounded mt-4"
                onClick={handlego}
              >
                Lets Go
              </div>
            ) : (
              <div
                className="bg-blue-500 text-white cursor-pointer flex justify-center items-center w-[100%] p-3 rounded mt-4"
                // onClick={handlelogin}
                onClick={()=>router.push("/Register")}
              >
                Sign in
              </div>
            )}
          </div>

          {/* <div className="w-[100%] text-center mt-5">or</div> */}

          {/* <div className='cursor-pointer flex justify-center items-center mt-5 p-2 rounded border w-[100%]' onClick={handlegoogle}>Signup in with google</div> */}
          {/* <GoogleButton
            onClick={handlegoogle}
            className='mt-3'
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Rightside;
