"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleDownloadClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsDisabled(true);

    const link = document.createElement("a");
    link.href = "/docs/Bhathiya_Lakshan.pdf";
    link.download = "Bhathiya_Lakshan.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setIsLoading(false);
      setIsDisabled(false);
    }, 1000);
  };

  return (
    <section className="py-8 lg:py-12 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-8 lg:px-12"
      >
        <div className="bg-primary/95 backdrop-blur-lg p-6 sm:p-8 lg:p-10 rounded-2xl border border-secondary shadow-[0_0_25px_rgba(255,179,71,0.5)] max-w-5xl mx-auto relative overflow-hidden">
          {/* Decorative Gradient Accent */}
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-primary to-secondary opacity-20 rounded-full blur-3xl -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Text Content */}
            <div className="col-span-1 lg:col-span-7 order-2 lg:order-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-box_primary mb-4 lg:mb-6 leading-tight">
                <span className="block text-transparent pb-4 bg-clip-text bg-white">
                  Bhathiya
                </span>
                <TypeAnimation
                  sequence={[
                    "Full-Stack",
                    2000,
                    "Web Developer",
                    2000,
                    ".NET Expert",
                    2000,
                  ]}
                  wrapper="span"
                  speed={30}
                  repeat={Infinity}
                  className="block text-2xl sm:text-3xl lg:text-4xl text-box_primary font-bold mt-1 lg:mt-2"
                />
              </h1>
              <p className="text-box_primary text-base sm:text-lg lg:text-xl font-medium max-w-sm mx-auto lg:mx-0 italic">
                Building the future with code & creativity
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/#contact"
                  className="group relative px-6 py-3 bg-gradient-to-r from-btn_primary to-btn_secondary text-foreground rounded-full font-semibold text-base lg:text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,179,71,0.7)]"
                >
                  <span className="relative z-10">Let’s Connect</span>
                  <span className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                </Link>
                <button
                  onClick={handleDownloadClick}
                  disabled={isDisabled}
                  className="group relative px-6 py-3 bg-box_primary text-primary rounded-full font-semibold text-base lg:text-lg border border-secondary/50 hover:bg-secondary hover:text-box_primary transition-all duration-500 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,179,71,0.7)] flex items-center justify-center"
                >
                  {isLoading ? (
                    <div className="animate-spin w-5 h-5 border-t-2 border-primary rounded-full"></div>
                  ) : (
                    <span className="relative z-10">Grab CV</span>
                  )}
                  <span className="absolute inset-0 bg-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="col-span-1 lg:col-span-5 order-1 lg:order-2 place-self-center relative">
              <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[320px] lg:h-[320px] mx-auto relative">
                <Image
                  src="/images/h3.png"
                  alt="hero image"
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2  hover:rotate-6 hover:scale-110 transition-all duration-500 z-10"
                  width={320}
                  height={320}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-transparent opacity-30 rounded-full blur-xl animate-spin-slow -z-10" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
