
'use client';

import React, { useRef } from 'react';
import Hero from './Hero';
import OurTeam from './OurTeam';
import Testimonials from './Testimonials';


export default function HomeContent() {
  const teamRef = useRef(null);
  const testimonialsRef = useRef(null);

  return (
    <>
      <Hero />
      <div ref={teamRef}>
        <OurTeam />
      </div>
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
    </>
  );
}
