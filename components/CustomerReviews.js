"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Star } from '@mui/icons-material';
import Image from 'next/image';

const CustomerReviews = ({
    testimonials = [
        {
            text: "Working with HZ Group has been an absolute pleasure. They understood our requirements perfectly and delivered a top-notch software solution within the agreed timeline. Their team was highly professional, responsive, and attentive to our needs. We highly recommend their services.",
            author: "Sara William",
            rating: 5,
            avatar: "/images/avatar-1.png"
        },
        {
            text: "We approached HZ Group with a complex project, and they exceeded our expectations. Their technical expertise and attention to detail were impressive. They provided valuable insights and suggestions throughout the development process, resulting in a robust and user-friendly software solution.",
            author: "Jon Jones",
            rating: 5,
            avatar: "/images/avatar-2.png"
        },

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

    const avatarVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            rotate: -10
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

    return (
        <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
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
                    Our Reviews
                </motion.h2>
                <motion.p
                    className="subtitle text-xs sm:text-sm md:text-base text-gray-600 tracking-wide"
                    variants={textVariants}
                >
                    Words from our satisfied clients: Hear what they have to say about our services
                </motion.p>
            </motion.div>

            <motion.div
                className="max-w-7xl !mt-5 mx-auto"
                variants={containerVariants}
            >
                <div className="flex flex-row flex-wrap items-stretch justify-center gap-6 sm:gap-8 lg:gap-10 xl:gap-12">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#eaeefe] rounded-2xl p-6 sm:py-8 sm:px-10 w-full max-w-[500px] duration-300 border border-gray-100"
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
                                {[...Array(testimonial.rating || 5)].map((_, starIndex) => (
                                    <motion.div
                                        key={starIndex}
                                        variants={starVariants}
                                        custom={starIndex}
                                        transition={{ delay: 0.2 + starIndex * 0.1 }}
                                    >
                                        <Star
                                            className="text-yellow-400 text-lg sm:text-xl"
                                            fontSize="medium"
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Review Text */}
                            <motion.p
                                className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 text-left"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                {testimonial.text}
                            </motion.p>

                            {/* Author with Avatar */}
                            <motion.div
                                className="flex items-center"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <motion.div
                                    className="mr-2"
                                    variants={avatarVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    transition={{ delay: 0.7 + index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Image
                                        src={testimonial.avatar}
                                        alt={`${testimonial.author} avatar`}
                                        width={40}
                                        height={40}
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-gray-200 shadow-sm"
                                    />
                                </motion.div>
                                <motion.div
                                    className="text-sm sm:text-base font-bold text-[#023f82]"
                                >
                                    {testimonial.author}
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default CustomerReviews;