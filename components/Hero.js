import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import cogImage from "@/public/images/cog.png"
import cylinderImage from "@/public/images/cylinder.png"
import noodleImage from "@/public/images/noodle.png"

import Image from 'next/image'

const Hero = ({ title, description, buttonText, buttonLink = "/", showButton = true }) => {
  return (
    <section className='pt-8 pb-20 md:pt-5 xl:px-0 px-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#eaeefe_100%)] overflow-x-clip'>
      <div className='container-hero lg:max-w-7xl mx-auto'>
        <div className='md:flex flex-row items-center'>
          <div className='lg:w-[600px] md:w-[470px]'>
            {/* <div className='text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight'>Version 2.0 is here</div> */}
            <h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#0e34b2] text-transparent bg-clip-text mt-6'>{title}</h1>
            <p className='text-xl text-[#001E80] tracking-tight mt-6'>
              {description}
            </p>
            {showButton && <div className='flex gap-1 items-center mt-[30px]'>
              <Link href={buttonLink}>
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
                  {buttonText}
                </Button>
              </Link>
            </div>}
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <Image src={cogImage} alt='cog' className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0' />
            <Image src={cylinderImage} alt='cylinder' width={220} height={220} className='hidden md:block -top-8 -left-32 md:absolute' />
            <Image src={noodleImage} alt='noodle' width={220} height={220} className='hidden lg:block absolute top-[524px] left-[448px] rotate-[30deg]' />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
