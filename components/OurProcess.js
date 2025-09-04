"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from '@mui/icons-material';
import Image from 'next/image';

const OurProcess = ({
    process = [
        {
            heading: "Design",
            svg: "/svg/design.svg",
            text: "It all starts with our expert designers who unleash their creativity and passion to craft visually captivating designs that align with your brand identity and captivate your audience.",
        },
        {
            heading: "Develop",
            svg: "/svg/develop.svg",
            text: "Our skilled developers bring those designs to life, leveraging cutting-edge technologies and coding practices to build robust and user-friendly digital solutions. But we don’t stop there."
        },

        {
            heading: "Elevate",
            svg: "/svg/elevate.svg",
            text: "We believe in elevating your brand to new heights by strategically positioning it in the market, implementing effective marketing strategies, and creating immersive experiences that leave a lasting impact."
        }
    ]
}) => {
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

    const starVariants = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className="container !my-10 w-full py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8"
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
                    Our Process
                </motion.h2>
                <motion.p
                    className="subtitle text-xs sm:text-sm md:text-base text-gray-600 tracking-wide"
                    variants={textVariants}
                >
                    Transforming ideas into exceptional software solutions through innovation and expertise..
                </motion.p>
            </motion.div>

            <motion.div
                className="max-w-7xl !mt-5 mx-auto"
                variants={containerVariants}
            >
                <div className="flex flex-row flex-wrap items-stretch justify-center gap-3 sm:gap-4 lg:gap-6 xl:gap-8">
                    {process.map((p, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#eaeefe] rounded-2xl py-5  px-6 w-full max-w-[300px] duration-300 border border-gray-100"
                            variants={cardVariants}
                            whileHover={cardHover}
                            custom={index}
                        >
                            {/* Star Rating */}
                            <motion.div
                                className="flex  mb-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={containerVariants}
                            >
                            </motion.div>
                            <Image
                                src={p?.svg}
                                alt="Facebook"
                                width={80}
                                height={50}
                                className="transition-transform duration-300 transform mb-2 hover:scale-110 hover:drop-shadow-lg"
                            />

                            {/* Review Text */}
                            <motion.p
                                className="text-sm sm:text-lg font-semibold text-[#001E80] leading-relaxed mb-6 text-left"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                {p?.heading}
                            </motion.p>
                            <motion.p
                                className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 text-left"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                {p?.text}
                            </motion.p>

                            {/* Author with Star Icon */}

                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default OurProcess;