import React, { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import b1 from "../assets/brands/b1.png";
import b2 from "../assets/brands/b2.png";
import b3 from "../assets/brands/b3.png";
import b4 from "../assets/brands/b4.png";
import b5 from "../assets/brands/b5.png";
import b6 from "../assets/brands/b6.png";
import b7 from "../assets/brands/b7.png";
import b8 from "../assets/brands/b8.png";
import b9 from "../assets/brands/b9.png";
import b10 from "../assets/brands/b10.png";
import b11 from "../assets/brands/b11.png";
import b12 from "../assets/brands/b12.png";
import b13 from "../assets/brands/b13.png";

const Brands = () => {
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    });
  }, [controls, prefersReducedMotion]);

  const handleMouseEnter = () => {
    if (prefersReducedMotion) return;
    controls.stop();
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion) return;
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 25,
        ease: "linear",
      },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center py-8 bg-white/40 backdrop-blur-sm rounded-2xl">
      <div
        className="relative w-full max-w-[1200px] overflow-hidden px-4 group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className="w-full flex flex-row justify-center items-center gap-8 min-w-[200%]"
          animate={controls}
          style={{ willChange: "transform" }}
        >
          <img
            src={b1}
            alt="Brand 1"
            loading="lazy"
            className="w-20 h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
          />
          <img
            src={b2}
            alt="Brand 2"
            loading="lazy"
            className="w-[180px] h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
          />
          <img
            src={b4}
            alt="Brand 4"
            loading="lazy"
            className="w-20 h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
          />

          <img
            src={b5}
            alt="Brand 5"
            loading="lazy"
            className="w-[180px] h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
          />
          <img
            src={b6}
            alt="Brand 6"
            loading="lazy"
            className="w-[180px] h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
          />
          <img
            src={b7}
            alt="Brand 7"
            loading="lazy"
            className="w-[180px] h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
          />
          <img
            src={b8}
            alt="Brand 8"
            loading="lazy"
            className="w-20 h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
          />
          <img
            src={b9}
            alt="Brand 9"
            loading="lazy"
            className="w-[180px] h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
          />
          <img
            src={b10}
            alt="Brand 10"
            loading="lazy"
            className="w-[130px] h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
          />

          <img
            src={b13}
            alt="Brand 4"
            loading="lazy"
            className="w-20 h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
          />

          <img
            src={b11}
            alt="Brand 11"
            loading="lazy"
            className="w-[180px] h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
          />
          <img
            src={b12}
            alt="Brand 12"
            loading="lazy"
            className="w-[180px] h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
          />
          <img
            src={b3}
            alt="Brand 3"
            loading="lazy"
            className="w-[180px] h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
          />
          {/* duplicate for seamless loop */}
          <img
            src={b1}
            alt="Brand 1 duplicate"
            loading="lazy"
            className="w-20 h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
            aria-hidden="true"
          />
          <img
            src={b2}
            alt="Brand 2 duplicate"
            loading="lazy"
            className="w-[180px] h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
            aria-hidden="true"  
          />
          <img
            src={b3}
            alt="Brand 3 duplicate"
            loading="lazy"
            className="w-[180px] h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
            aria-hidden="true"
          />
          <img
            src={b4}
            alt="Brand 4 duplicate"
            loading="lazy"
            className="w-[180px] h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
            aria-hidden="true"
          />
          <img
            src={b5}
            alt="Brand 5 duplicate"
            loading="lazy"
            className="w-[180px] h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
            aria-hidden="true"
          />
          <img
            src={b6}
            alt="Brand 6 duplicate"
            loading="lazy"
            className="w-[180px] h-20 shrink-0 opacity-80 hover:opacity-100 scale-100 hover:scale-105 transition-transform duration-300 ease-out grayscale hover:grayscale-0"
            aria-hidden="true"
          />
        </motion.div>
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-linear-to-r from-white via-white/70 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-linear-to-l from-white via-white/70 to-transparent" />
      </div>
    </div>
  );
};

export default Brands;
