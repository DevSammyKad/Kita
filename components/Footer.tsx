import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="grid grid-cols-2 mx-auto max-w-7xl gap-4  py-20 px-10 text-white p-10 relative z-10 overflow-hidden ">
      <div className="absolute -top-40 -right-0">
        <Image
          alt="logo"
          src="/footer.png"
          width={1000}
          height={1000}
          className="w-[300px] sm:w-[500px] h-[500px] -z-20 object-contain"
        />
      </div>
      <div className="">
        <h1 className="text-2xl  sm:opacity-100 sm:text-4xl   font-semibold text-start mb-12 text-white capitalize">
          What happens when you ‘actually go’ and don't cancel? Download the app
          and find out!
        </h1>
        <button className="mt-3 px-5 py-3 text-white bg-[#ED6D24] rounded-lg cursor-pointer hover:bg-[#b67a6a] ">
          Download App
        </button>
        <img
          alt="download"
          src="/GoogleApple.png"
          className=" object-cover mt-10"
        />
        <h1 className="text-[15rem] sm:text-[30rem]  font-semibold text-start text-[#4d5959]  italic absolute -bottom-10 sm:-bottom-42 -z-10 -left-10 ">
          KITA
        </h1>
      </div>

      <div className="py-10 z-10 ">
        <Image
          alt="logo"
          src="/iPhone-16-Pro.png"
          width={1000}
          height={1000}
          className="w-[500px] h-[500px] object-contain "
        />
      </div>
    </div>
  );
};

export default Footer;
