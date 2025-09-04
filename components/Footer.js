"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 px-4 md:px-16 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Quick Links */}
        <div className="space-y-4">
          <h2 className="text-md md:text-sm pl-4 py-4 lg:text-md font-semibold text-white">
            Quick Links
          </h2>
          <ul className="grid gap-2 pt-2 text-md md:text-sm lg:text-md">
            <li>
              <Link
                href="/"
                className="relative group inline-block py-1 px-2 transition duration-300 ease-in-out"
              >
                Home
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#023f82] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="relative group inline-block py-1 px-2 transition duration-300 ease-in-out"
              >
                About Us
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#023f82] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="relative group inline-block py-1 px-2 transition duration-300 ease-in-out"
              >
                Services
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#023f82] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
            <li>
              <Link
                href="/contactus"
                className="relative group inline-block py-1 px-2 transition duration-300 ease-in-out"
              >
                Contact
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#023f82] scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Store Address */}
        <div className="space-y-4">
          <h2 className="text-md md:text-sm py-4 lg:text-md font-semibold text-white">
            Our Location
          </h2>
          <div className="text-md pt-2 md:text-sm lg:text-md">
            <address className="not-italic">
              87-C, 11th Commercial Street,
              <br />
              Suite 2/2, Phase II Extension,
              <br />
              DHA, Karachi-Pakistan
              <br />
              <div className="mt-2 space-y-1">
                <div>
                  <a href="tel:+922135804268" className="hover:text-[#023f82] transition-colors">
                    +9221-35804268
                  </a>
                </div>
                <div>
                  <a href="tel:+922135894268" className="hover:text-[#023f82] transition-colors">
                    +9221-35894268
                  </a>
                </div>
                <div>
                  <a href="tel:+922137220480" className="hover:text-[#023f82] transition-colors">
                    +9221-37220480
                  </a>
                </div>
                <div>
                  <a href="https://wa.me/923333204268" className="hover:text-[#023f82] transition-colors" target="_blank" rel="noopener noreferrer">
                    +92-333-3204268
                  </a>
                </div>
              </div>
            </address>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-md md:text-sm lg:text-md font-semibold text-white">
            Follow Us
          </h2>
          <div className="flex pt-2 space-x-4">
            <a
              href="https://www.facebook.com"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svg/facebook.svg"
                alt="Facebook"
                width={24}
                height={24}
                className="transition-transform duration-300 transform hover:scale-110 hover:drop-shadow-lg"
              />
            </a>

            <a
              href="https://wa.me/923333204268"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svg/whatsapp.svg"
                alt="WhatsApp"
                width={24}
                height={24}
                className="transition-transform duration-300 transform hover:scale-110 hover:drop-shadow-lg"
              />
            </a>

            <a
              href="https://www.instagram.com"
              className="group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/svg/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
                className="transition-transform duration-300 transform hover:scale-110 hover:drop-shadow-lg mt-[2px]"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} HZ Group LLC - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
