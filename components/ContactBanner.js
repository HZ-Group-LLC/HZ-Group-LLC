"use client"
import React from 'react'
import { motion } from "framer-motion"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from "next/link";

// Container animation variants
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

const ContactBanner = () => {
    return (
        <div className="py-10 lg:px-0 px-5">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-4 lg:flex-row my-5">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    exit={{ opacity: 0 }}
                    className="w-full lg:w-3/4 md:py-8 py-1 flex flex-col"
                >
                    <motion.h1
                        className="title mb-8"
                        variants={textVariants}
                    >
                        Get In Touch
                    </motion.h1>
                    <div className="flex flex-col gap-3 h-full">
                        <p className="text-lg font-bold text-[#535252] md:text-3xl lg:mb-4 mb-2">
                            Interested in What We Do?
                        </p>
                        <p className="text-sm font-inter text-gray-700 leading-relaxed">
                            Let’s have a talk, and see how together we can take your brand to the next level.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ x: -150 }}
                    whileInView={{ x: 0 }}
                    transition={{ duration: 0.6, type: "tween" }}
                    className="flex relative lg:justify-center lg:items-center w-full lg:w-3/12 py-4"
                >
            <Link href="/contactus">
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#001E80",
                            color: "#fff",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            px: 4,
                            py: 1.5,
                            borderRadius: 999,
                            "&:hover": {
                                backgroundColor: "rgb(14,52,178)",
                            },
                        }}
                    >
                        Contact Us
                    </Button>
                    </Link>
                </motion.div>
            </div>
        </div>

    )
}

export default ContactBanner
