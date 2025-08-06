"use client";

import React from 'react';
import { Facebook, Twitter, Mail } from 'lucide-react';
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-[#4B2615] text-white py-6">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Side - Navigation Links */}
        <div className="flex flex-wrap gap-8 text-sm mb-4 md:mb-0">
          <Link href="#about" className="text-white hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link href="#strategy" className="text-white hover:text-gray-300 transition-colors">
            Our Strategy
          </Link>
          <Link href="#advantages" className="text-white hover:text-gray-300 transition-colors">
            Our Advantages
          </Link>
          <Link href="#responsibility" className="text-white hover:text-gray-300 transition-colors">
            Social Responsibility
          </Link>
          <Link href="#services" className="text-white hover:text-gray-300 transition-colors">
            Our Services
          </Link>
        </div>

        {/* Right Side - Contact Info and Social Icons */}
        <div className="flex items-center gap-6">
          {/* Contact Buttons */}
          <div className="flex gap-2">
            <button className="bg-white text-[#4B2615] px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
              Email
            </button>
            <button className="bg-[#6B4423] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#5A3820] transition-colors">
              Subscribe
            </button>
          </div>
          
          {/* Contacts Label */}
          <span className="text-sm text-white">Contacts</span>
          
          {/* Social Icons */}
          <div className="flex gap-3">
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
            <a 
              href="#" 
              className="text-white hover:text-gray-300 transition-colors"
              aria-label="Google Plus"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 12h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2zm-11-2V7h5.5c.3 0 .5-.1.7-.3l1.8-1.8c-.9-1.5-2.4-2.6-4.2-3.1C11.8.9 9.4.4 7 1.4 3.8 2.7 1.4 5.8 1 9.3c-.4 3.5 1.2 7 4.2 9.1 2.4 1.7 5.6 2.1 8.4 1.1 2.1-.8 3.9-2.3 5-4.3H12v-3h11v-1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-6 text-center text-sm text-white border-t border-white/20 pt-4">
        © 2024. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
