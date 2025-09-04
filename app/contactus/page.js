"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Alert, Snackbar } from '@mui/material';
import Contact from '@/components/Contact';
import ContactBanner from '@/components/ContactBanner';
import Hero from '@/components/Hero';

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
const ContactUs = () => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success', 
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");

    if (!email) {
      setSnackbar({
        open: true,
        message: 'Email field cannot be empty',
        severity: 'error',
      });
      return;
    }

    formData.append("access_key", "549fe924-49f6-471f-9e6a-e70c117c16bb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSnackbar({
          open: true,
          message: 'Form submitted successfully',
          severity: 'success',
        });
        event.target.reset(); 
      } else {
        setSnackbar({
          open: true,
          message: 'Error submitting form',
          severity: 'error',
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Submission failed:', error.message);
      }

      setSnackbar({
        open: true,
        message: 'An error occurred. Please try again later.',
        severity: 'error',
      });
    }

  };

  return (
    <>
      <Hero
        title="Contact Us"
        description="Ready to take the next step? Get in touch with HZ Group LLC today and discover how our technology expertise can help your business scale and innovate. Our team is here to answer your questions, provide guidance, and craft solutions aligned with your goals."
        buttonText="Get in Touch"
        buttonLink="/contactus"
      />
     <motion.div
          className="text-center mt-10 -mb-5"
          variants={textVariants}
        >
          <motion.h2
            className="title text-gray-800 mb-2 sm:mb-3 lg:mb-4"
            variants={textVariants}
          >
            Contact Us
          </motion.h2>
          <motion.p
            className="subtitle text-xs sm:text-sm md:text-base text-gray-600 tracking-wide"
            variants={textVariants}
          >
            Your Next Step Starts Here
          </motion.p>
        </motion.div>
      <Contact onSubmit={onSubmit} />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        sx={{ zIndex: (theme) => theme.zIndex.modal + 2, marginTop: '80px' }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>

      <ContactBanner />
    </>
  );
};

export default ContactUs;
