"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from 'next/navigation';
import { useGetContents } from '../apis/useDataController';
import { toast } from 'react-toastify';
import Loader from './Loader';
import { IMAGE_BASE_URL } from "../apis/axios";


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter()
  const { data, isLoading, error } = useGetContents();

  useEffect(() => {
    if (error) {
      toast.error('Something went wrong');
    }
  }, [error]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % data?.meta?.pagination?.total);
    }, 5000);
    return () => clearInterval(timer);
  }, [data?.meta?.pagination?.total]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % data?.meta?.pagination?.total);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + data?.meta?.pagination?.total) % data?.meta?.pagination?.total);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <section className="relative h-screen overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out"
              style={{
                backgroundImage: `url('${IMAGE_BASE_URL}${data?.data[currentSlide].background?.url}')`,
                filter: "sepia(30%) saturate(80%) brightness(0.7)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-orange-300 transition-colors duration-300 hover:cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft size={48} className="drop-shadow-lg" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-orange-300 transition-colors duration-300 hover:cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight size={48} className="drop-shadow-lg" />
            </button>

            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-6 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 mt-14 items-center max-w-7xl mx-auto">
                  <div className="text-white space-y-2">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 transform transition-all duration-700 ease-out">
                      {data?.data[currentSlide]?.title}
                    </h1>

                    <p className="text-lg lg:text-lg leading-relaxed mb-8 max-w-2xl transform transition-all duration-700 ease-out delay-200 opacity-90">
                      {data?.data[currentSlide]?.description}
                    </p>

                    <button
                      onClick={() => { router.push(`/contentDetails/${data?.data[currentSlide]?.id}`) }}
                      className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:cursor-pointer">
                      Read More
                    </button>
                  </div>

                  {/* Right Image */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                      <div className="w-40 h-80 lg:w-70 lg:h-[340px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 ease-out">
                        <Image
                          src={`${IMAGE_BASE_URL}${data?.data[currentSlide].image?.url}`}
                          alt={data?.data[currentSlide]?.title}
                          width={384}
                          height={480}
                          className="object-cover"
                          priority={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute left-8 top-3/4 transform -translate-y-1/2 z-20 flex flex-col space-y-4">
              {data?.data?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 border-2 border-white/50 ${currentSlide === index
                    ? "bg-white scale-125 border-white"
                    : "bg-white/20 hover:bg-white/40 hover:scale-110"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Hero;
