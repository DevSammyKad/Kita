import React from 'react';
import { motion } from 'framer-motion';

const socialMedia = [
  {
    id: 1,
    tag: '#Instagram',
  },
  {
    id: 2,
    tag: '#Facebook',
  },
  {
    id: 3,
    tag: '#LinkedIn',
  },
  {
    id: 4,
    tag: '#Twitter',
  },
];

const TextSlider = () => {
  return (
    <div className="relative w-full overflow-hidden py-12 ">
      <motion.div
        className="flex w-fit"
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {socialMedia.map((item, index) => (
          <motion.div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 mx-4 rounded-xl space-x-10 "
            whileHover={{ y: -10 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <div className="p-4">
              <p className="text-white font-medium uppercase text-5xl tracking-wider space-x-3">
                {item.tag}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TextSlider;
