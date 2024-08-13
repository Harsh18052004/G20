import React from 'react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Animation = () => {
  const gsapRef = useRef();
  useEffect(() => {
    const ele = gsapRef.current;

    gsap.fromTo(
      ele,
      {
        y: 300,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: ele,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,         
        },
      }
    );
  }, []);

  return (
    <div className='flex items-center justify-center' ref={gsapRef}>
      <div className='textDiv font-Google text-[10rem] text-black'>FEATURED WORKS</div>
    </div>
  );
};

export default Animation;
