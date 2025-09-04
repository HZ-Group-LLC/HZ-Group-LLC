"use client"

import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';


const page = () => {
  return (
    <>
      <Hero
        title="Our Services"
        description="At HZ Group LLC, we provide end-to-end technology services to help businesses innovate and grow. From custom software development and cloud solutions to IT consulting and digital transformation, our team delivers tailored strategies and scalable solutions designed to meet your unique goals."
        showButton={false}
      />
      <Services />
    </>
  )
}

export default page
