"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/app/services/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const cardHover = {
  scale: 1.02,
  y: -5,
  transition: {
    duration: 0.2,
    ease: "easeInOut"
  }
};


const iconVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -15
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};


const Services = () => {
  return (
      <motion.div
        className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="text-center mb-8 sm:mb-10 lg:mb-12"
          variants={textVariants}
        >
          <motion.h2
            className="title text-gray-800 mb-2 sm:mb-3 lg:mb-4"
            variants={textVariants}
          >
            Our Services
          </motion.h2>
          <motion.p
            className="subtitle text-xs sm:text-sm md:text-base text-gray-600 tracking-wide"
            variants={textVariants}
          >
            We are committed to ensuring the successful delivery of software solutions
          </motion.p>
        </motion.div>

        <motion.div
          className="max-w-7xl mt-5 mx-auto"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;

              return (
                <motion.div
                  key={index}
                  className={`
        relative rounded-3xl p-8 sm:p-10 transition-all duration-300 cursor-pointer
        bg-[#eaeefe] text-white
      `}
                  variants={cardVariants}
                  whileHover={cardHover}
                  custom={index}
                >
                  {/* Icon */}
                  <motion.div
                    className="
          w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mb-6
          bg-white shadow-md
        "
                    variants={iconVariants}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <IconComponent sx={{ fontSize: { xs: 28, sm: 48 }, color: "#001E80" }} className="text-3xl sm:text-9xl text-[#001E80]" />
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-xl sm:text-2xl font-bold mb-3 text-gray-800"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {service.title}
                  </motion.h3>

                  {/* Headline */}
                  <motion.p
                    className="text-sm sm:text-base font-medium text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {service.headline}
                  </motion.p>

                  {/* Learn More Button */}
                  <motion.div
                    className="mt-6"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div
                      className="
            inline-block text-sm font-semibold border-b-2 cursor-pointer transition-all duration-300
            text-[#001E80] border-[#001E80] hover:border-[#000c40] hover:text-[#000c40]
          "
                    >
                      Learn More
                    </div>
                  </motion.div>

                </motion.div>
              );
            })}

          </div>
        </motion.div>
      </motion.div>
  )
}

export default Services
