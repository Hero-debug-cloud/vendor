import React from 'react';
import Image from "next/image";
import Comingsoon_img from "../public/coming_soon.png"

const Comingsoon = () => {
  return (
    <div className="w-[100%] flex justify-center flex-col items-center">
      <Image
        src={Comingsoon_img}
        width={500}
        height={500}
        alt="Coming soon img"
      />
      <div>
        Contact Us :
      </div>
    </div>
  );
}

export default Comingsoon;