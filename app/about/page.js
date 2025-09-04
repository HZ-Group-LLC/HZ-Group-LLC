import About from '@/components/About'
import ContactBanner from '@/components/ContactBanner'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero
        title="About Us"
        description="We are HZ Group LLC, a trusted partner in technology innovation. Our mission is to empower businesses with tailored software, cloud, and digital transformation solutions. With a client-first approach, we focus on delivering scalable, secure, and future-ready results that drive long-term success."
        showButton={false}
      />
      <About />
      <ContactBanner />
    </div>
  )
}

export default page
