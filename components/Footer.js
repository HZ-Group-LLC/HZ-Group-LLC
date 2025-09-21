"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-4 md:px-16 shadow-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Quick Links */}
        <div>
          <h2 className="text-md md:text-sm py-2 font-semibold text-white border-b border-gray-700 mb-4">
            Quick Links
          </h2>
          <ul className="space-y-2 text-md md:text-sm">
            <li>
              <Link href="/" className="hover:text-[#023f82] transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#023f82] transition-colors">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-[#023f82] transition-colors">Services</Link>
            </li>
            <li>
              <Link href="/contactus" className="hover:text-[#023f82] transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Pakistan Address */}
        <div>
          <h2 className="text-md md:text-sm py-2 font-semibold text-white flex items-center gap-2 border-b border-gray-700 mb-4">
            <span role="img" aria-label="Pakistan" className="inline-block align-middle mr-2">🇵🇰</span>
            Pakistan Office
          </h2>
          <div className="bg-gradient-to-br from-[#181818] via-[#232323] to-[#1a3c2b] rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[220px]">
            <address className="not-italic text-sm leading-relaxed mb-4">
              <span className="font-semibold text-[#23a455]">Address:</span>
              <br />
              87-C, 11th Commercial Street, Suite 2/2,<br />
              Phase II Extension, DHA,<br />
              Karachi, Pakistan, 75500
            </address>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image src="/svg/phone.svg" alt="Phone" width={20} height={20} />
                <a href="tel:+923353316418" className="hover:text-[#23a455] transition-colors text-sm font-medium">
                  +92 335 3316418
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/svg/phone.svg" alt="Phone" width={20} height={20} />
                <a href="tel:+923333204268" className="hover:text-[#23a455] transition-colors text-sm font-medium">
                  +92 333 3204268
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
                <a href="https://wa.me/923333204268" className="hover:text-[#23a455] transition-colors text-sm font-medium" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +92 333 3204268
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* USA Address */}
        <div>
          <h2 className="text-md md:text-sm py-2 font-semibold text-white flex items-center gap-2 border-b border-gray-700 mb-4">
            <span role="img" aria-label="USA" className="inline-block align-middle mr-2">🇺🇸</span>
            USA Office
          </h2>
          <div className="bg-gradient-to-br from-[#181818] via-[#232323] to-[#233c5a] rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[220px]">
            <address className="not-italic text-sm leading-relaxed mb-4">
              <span className="font-semibold text-[#023f82]">Registered Address:</span>
              <br />
              7820 Donington Park Drive,<br />
              Cumming, GA 30040, USA
            </address>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image src="/svg/phone.svg" alt="Phone" width={20} height={20} />
                <a href="tel:+19135688097" className="hover:text-[#023f82] transition-colors text-sm font-medium">
                  +1 (913) 568-8097
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
                <a href="https://wa.me/19135688097" className="hover:text-[#23a455] transition-colors text-sm font-medium" target="_blank" rel="noopener noreferrer">
                  WhatsApp: +1 (913) 568-8097
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-md md:text-sm py-2 font-semibold text-white border-b border-gray-700 mb-4">
            Follow Us
          </h2>
          <div className="flex gap-4 pt-4 justify-center md:justify-start">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/svg/facebook.svg" alt="Facebook" width={32} height={32} className="hover:scale-110 transition-transform" />
            </a>
            <a href="https://wa.me/923333204268" target="_blank" rel="noopener noreferrer">
              <Image src="/svg/whatsapp.svg" alt="WhatsApp" width={32} height={32} className="hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/svg/instagram.svg" alt="Instagram" width={32} height={32} className="hover:scale-110 transition-transform" />
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