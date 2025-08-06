"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "With the help of the hospitable staff of Al Safar and Partners I was able to get my work done without any hassle. The help I received helped me a great deal to overcome the issues that I faced. I was always updated about my case and my queries never went unanswered.",
      name: "Mohammed Saif",
      position: "CEO/Company",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    },
    {
      quote:
        "Exceptional quality and timely delivery. Working with this team has been a game-changer for our organization. Their innovative solutions and dedicated support have helped us streamline our operations significantly.",
      name: "David Chen",
      position: "Operations Manager",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    },
    {
      quote:
        "The professionalism and expertise demonstrated throughout our partnership has been remarkable. They delivered results beyond our expectations and maintained excellent communication at every stage of the process.",
      name: "Lisa Rodriguez",
      position: "Project Lead",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="bg-[#4B2615] text-white py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What our clients are saying</h2>
          <p className="text-[#FFFFFF] text-opacity-60 text-base leading-relaxed max-w-2xl">
            Our clients range from individual investors, to local, international as well as fortune
            500 companies.Our clients range from individual investors, to local, international as well
            as fortune 500 companies.
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Client Image */}
            <div className="flex-shrink-0 relative w-64 h-80 rounded-lg overflow-hidden">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 256px"
                priority={false}
              />
            </div>

            {/* Testimonial Text */}
            <div className="flex-1 pt-4">
              <blockquote className="text-lg leading-relaxed mb-8 text-white/90">
                &quot;{currentTestimonial.quote}&quot;
              </blockquote>

              <div>
                <h4 className="text-xl font-semibold text-white mb-1">{currentTestimonial.name}</h4>
                <p className="text-white/70 text-sm">{currentTestimonial.position}</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-0 right-0 flex gap-2">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="text-white" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
