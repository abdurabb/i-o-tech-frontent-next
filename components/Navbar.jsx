
"use client";

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { openServiceModal, closeServiceModal } from '../redux/rootReducer';
import ModalServices from './ModalServices';
import { Modal } from '@mui/material';
import { Menu, Close, Search } from '@mui/icons-material';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter()
  const dispatch = useDispatch();
  const isModalOpen = useSelector(state => state.root.isServiceModalOpen);
  const isTeamInView = useSelector(state => state.root.isTeamInView);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTargets = useSelector((state) => state.root.scrollTargets);

  const scrollToTeam = () => {
    const el = document.getElementById("team");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };


  const scrollToTestimonials = () => {
    const el = document.getElementById("testimonials");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <nav
      className={`${isModalOpen || isTeamInView ? 'bg-[#4B2615]' : 'bg-transparent'
        } text-white fixed w-full z-50 transition-colors duration-300 px-4 py-3`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        {isModalOpen ? (
          <div className="text-lg font-bold">
            <Image src="/logo.png" alt="LOGO" width={56} height={56} />
          </div>
        ) : (
          <div className="text-lg font-bold" />
        )}

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <a href="#home" className="hover:text-gray-300 transition-colors">
              About us
            </a>
          </li>
          <li
            onClick={() => dispatch(openServiceModal())}
            className="cursor-pointer hover:text-gray-300 transition-colors"
          >
            Services ↓
          </li>
          <li>
            <button
              onClick={scrollToTeam}
              // onClick={()=>{  scrollToTeam}}
              className="hover:text-gray-300 transition-colors hover:cursor-pointer"
            >
              Our Team
            </button>
          </li>
          <li>
            <a
              href="#blogs"
              onClick={scrollToTestimonials}
              className="hover:text-gray-300 transition-colors"
            >
              Blogs
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 transition-colors">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <Search className="text-white cursor-pointer hover:text-gray-300 transition-colors" />
          <button className="bg-transparent border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-[#441f13] transition-all duration-300">
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <Close /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && !isModalOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-[#441f13] p-4 rounded">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)}>
                About us
              </a>
            </li>
            <li
              onClick={() => {
                dispatch(openServiceModal());
                setMenuOpen(false);
              }}
            >
              Services
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToTeam();
                  setMenuOpen(false);
                }}
              >
                Our Team
              </button>
            </li>
            <li>
              <a
                href="#blogs"
                onClick={() => {
                  scrollToTestimonials();
                  setMenuOpen(false);
                }}
              >
                Blogs
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-4 mt-4">
            <Search className="text-white" />
            <button className="bg-transparent border border-white text-white px-4 py-2 rounded">
              Book Appointment
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal open={isModalOpen} onClose={() => dispatch(closeServiceModal())}>
        <ModalServices onClose={() => dispatch(closeServiceModal())} />
      </Modal>
    </nav>
  );
};

export default Navbar;
