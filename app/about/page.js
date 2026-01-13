import Head from 'next/head';  
import About from '@/components/About'
import ContactBanner from '@/components/ContactBanner'
import Hero from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
     <Head>
  <title>About HZ Group LLC | Software Development & Web Design Agency</title>
  <meta name="description" content="HZ Group LLC is a trusted software development agency specializing in custom web development, IT solutions, cloud services, and digital transformation for businesses worldwide." />
  <meta name="keywords" content="software development agency, custom software solutions, web development company, IT consulting services, technology innovation partner, cloud solutions, digital transformation, Developers, enterprise software" />
</Head>
    <div>
      <Hero
        title="About Us"
        description="We are HZ Group LLC, a trusted partner in technology innovation. Our mission is to empower businesses with cutting-edge software development, custom web solutions, and comprehensive IT consulting services that drive digital transformation and sustainable growth."
        showButton={false}
        </Hero>
      />
      <About />
      <ContactBanner />
    </div>
  )
}

export default page
