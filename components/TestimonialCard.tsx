import React from 'react';
import { TestimonialDataTypes } from './Testimonial';
import { QuoteIcon } from 'lucide-react';
import Image from 'next/image';

const TestimonialCard = ({
  feedback,
  image,
  name,
  trip,
}: TestimonialDataTypes) => {
  return (
    <div className="bg-[#FFEAA9] rounded-xl px-6 py-8 flex flex-col items-center">
      <div className="mt-8">
        <p className="font-bold text-lg text-black">{name}</p>
        <p className="text-gray-700 text-lg">{trip}</p>
      </div>

      <span className="mt-32 text-xl leading-none text-[#0e3c39]">
        <QuoteIcon className="rotate-180 text-[#0e3c39] w-6 h-6 fill-[#0e3c39]" />
        {feedback}
      </span>
    </div>
  );
};

export default TestimonialCard;
