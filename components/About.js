"use client"

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

const About = () => {
 
  return (
    <div className="my-20 bg-slate-100 py-10 flex flex-col justify-center items-center">
        <div className="max-w-7xl">
      <motion.div
        className="flex w-full mt-20 flex-col justify-center items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"  // Fixed: was "whileinview"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h1
          className="title text-center mb-8"  // Added explicit styles
          variants={textVariants}
        >
          About us
        </motion.h1>
      </motion.div>
      <div className="flex flex-col gap-4 lg:flex-row bg-base-100 lg:px-0 px-5 my-5">
        <motion.div  // Changed to motion.div and fixed animation props
          initial={{ x: -150 }}  // Fixed: was translateX
          whileInView={{ x: 0 }}  // Fixed: was whileinvieww and translateX
          transition={{ duration: 0.6, type: 'tween' }}
          className="flex relative justify-center lg:mx-4 items-center w-full lg:w-1/2 p-4 min-h-[400px]"  // Added min-height
        >
          <Image
            src='/images/about.jpg'
            fill
            className="object-cover rounded-2xl"  // Added rounded corners
            alt="About HZ Group LLC"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}  // Changed from animate to whileInView for consistency
          transition={{ duration: 0.6 }}  // Increased duration
          exit={{ opacity: 0 }}
          className="w-full lg:w-1/2 md:py-8 py-1 flex flex-col lg:px-4"
        >
          <div className="flex flex-col gap-3 h-full">
            <p className="text-lg font-bold text-[#535252] md:text-3xl lg:mb-4 mb-2">
              Your Partner in Digital Transformation
            </p>

            <p className="text-sm font-inter text-gray-700 leading-relaxed">
              At <strong>HZ Group LLC</strong>, we specialize in delivering cutting-edge technology solutions that empower businesses to scale, innovate, and stay ahead in a fast-changing digital world.
              <br /><br />
              Our team of experts provides end-to-end services across software development, cloud solutions, IT consulting, and digital transformation. Whether you are a startup building your first product, an enterprise optimizing workflows, or an organization adopting AI-driven solutions, we tailor our services to match your unique goals and challenges.
              <br /><br />
              By combining technical expertise with a client-first approach, we ensure seamless project delivery, robust security, and scalable solutions. With strong partnerships and a passion for innovation, HZ Group LLC is committed to being your trusted technology partner every step of the way.
            </p>
            <Link href="/about">
              <Button
                variant="contained"
                // endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: '#0273cc',
                  color: '#fff',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  px: 4,
                  py: 1.5,
                  borderRadius: 999,
                  '&:hover': {
                    backgroundColor: '#2c72b5',
                  },
                }}
              >
                Explore More
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default About;