"use client";

import React, { useEffect, useRef,useImperativeHandle, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MessageCircle, Phone, Mail } from "lucide-react";
import { useGetMembers } from "../apis/useDataController";
import Loader from "./Loader";
import { toast } from "react-toastify";
import { IMAGE_BASE_URL } from "../apis/axios";
import { setTeamInView } from '../redux/rootReducer'
import { useDispatch } from "react-redux";


const OurTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { data, isLoading, error } = useGetMembers();
  const dispatch = useDispatch()
  const teamRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        dispatch(setTeamInView(entry.isIntersecting));
      },
      { threshold: 0.4 }
    );

    if (teamRef.current) observer.observe(teamRef.current);

    return () => {
      if (teamRef.current) observer.unobserve(teamRef.current);
    };
  }, [dispatch]);


  useEffect(() => {
    if (error) {
      toast.error("Something Went Wrong");
    }
  }, [error]);

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil((data?.data?.length || 0) / itemsPerSlide);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const getCurrentSlideMembers = () => {
    const start = currentIndex * itemsPerSlide;
    const end = start + itemsPerSlide;
    return data?.data?.slice(start, end) || [];
  };

  return (
    <section id="team" ref={teamRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Team</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s
          </p>
        </div>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="relative max-w-6xl mx-auto flex items-center px-4 sm:px-6 lg:px-8">
            <button onClick={prevSlide} disabled={currentIndex === 0} aria-label="Previous slide">
              <ChevronLeft />
            </button>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
              {getCurrentSlideMembers().map((member, idx) => (
                <div
                  key={`${currentIndex}-${idx}`}
                  className="rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
                >
                  <div className="relative mb-6 w-full h-48 mx-auto rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={
                        member?.image?.formats?.small?.url
                          ? `${IMAGE_BASE_URL}${member.image.formats.small.url}`
                          : member?.image?.url || "/placeholder.png"
                      }
                      alt={member?.name || "Team Member"}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority={false}
                    />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{member?.name}</h3>
                    <p className="text-gray-500 uppercase text-sm font-medium tracking-wide">{member?.role}</p>
                  </div>

                  {/* Contact Icons */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={`https://wa.me/${member?.whatsapp?.replace(/[^0-9]/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 text-black rounded-full flex items-center justify-center transition-transform hover:scale-110"
                      title="WhatsApp"
                    >
                      <MessageCircle size={18} />
                    </a>
                    <a
                      href={`tel:${member?.phone}`}
                      className="w-10 h-10 text-black rounded-full flex items-center justify-center transition-transform hover:scale-110"
                      title="Phone"
                    >
                      <Phone size={18} />
                    </a>
                    <a
                      href={`mailto:${member?.email}`}
                      className="w-10 h-10 text-black rounded-full flex items-center justify-center transition-transform hover:scale-110"
                      title="Email"
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex >= totalSlides - 1}
              aria-label="Next slide"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OurTeam;
