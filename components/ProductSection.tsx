'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface ProductCard {
  id: number;
  productName: string;
  image?: string | StaticImageData;
}

export default function ProductSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  const productCards: ProductCard[] = [
    {
      id: 0,
      productName: 'Green T-shirt',
      image: '/productTshirt.png',
    },
    {
      id: 1,
      productName: 'Green T-shirt',
      image: '/productTshirt.png',
    },
    {
      id: 2,
      productName: 'Green Hat',
      image: '/productHat.png',
    },
    {
      id: 3,
      productName: 'Custom Image',
      image: '/productTshirt.png',
    },
    {
      id: 4,
      productName: 'Green Hat',
      image: '/productHat.png',
    },
  ];

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="relative">
        <div className="mt-36 max-sm:mt-24">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-5xl max-sm:text-4xl font-normal text-center mb-12">
              Our Products
            </h2>
          </div>

          <motion.div
            ref={carousel}
            className="overflow-hidden py-20 px-10"
            whileTap={{ cursor: 'grabbing' }}
          >
            <motion.div
              className="flex gap-6"
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              animate={{ x: -activeIndex * (300 + 24) }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
            >
              {productCards.map((card) => (
                <motion.div
                  key={card.id}
                  className="min-w-[300px] h-[340px] py-5 rounded-3xl flex flex-col justify-center items-center relative group"
                  whileHover={{
                    y: -10,
                    scale: 1.02,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-full h-full overflow-hidden transition-all duration-300 group-hover:rounded-full  relative">
                    {card.image && (
                      <Image
                        src={card.image}
                        alt={card.productName}
                        width={1000}
                        height={1000}
                        className="object-cover w-full h-full"
                      />
                    )}
                    <h3 className="text-2xl font-bold text-white mt-6 text-center absolute bottom-10 left-0 right-0 ">
                      {card.productName}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
