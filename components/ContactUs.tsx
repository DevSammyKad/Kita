import Image from 'next/image';
import React from 'react';

const ContactUs = () => {
  return (
    <div className="flex items-center justify-center relative max-w-7xl mx-auto my-10 ">
      <div className="w-[90%] ">
        <Image
          src={'/contactus.png'}
          alt="contact us"
          width={1000}
          height={1000}
        />
      </div>

      <div className="w-[40%] absolute right-0 top-[50%] -translate-y-[50%] z-10">
        <div className="bg-[#4B4B4B3B] backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-xl p-6 flex flex-col items-center">
          <h2 className="text-4xl font-semibold text-center mb-12 text-white capitalize ">
            Contact Us
          </h2>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-sm mx-auto flex items-center gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 text-black border-b border-gray-500 outline-none"
              />
              <input
                type="number"
                placeholder="Number"
                className="w-full p-2 text-black border-b border-gray-500 outline-none"
              />
            </div>

            <textarea
              placeholder="Message"
              className="w-full p-2 text-black border-b border-gray-500 outline-none mt-2"
            />
            <button className="mt-6 w-full p-2 text-white bg-[#ED6D24] rounded-lg ">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
