"use client";

import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Slide {
  id: number;
  Heading: string;
  EventSchedule: string;
  Description: string;
}

interface SlideProps {
  slides: Slide[];
}

const RangkaianSlide: React.FC<SlideProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => {
      const nextIndex = prevSlide + 1;
      return nextIndex < slides.length ? nextIndex : prevSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => {
      const nextIndex = prevSlide - 1;
      return nextIndex >= 0 ? nextIndex : prevSlide;
    });
  };

  return (
    <>
      {slides.map((slide, index) => (
        <div key={index} className={`${index == currentSlide ? "flex" : "hidden"} flex-col gap-8 w-full h-full`}>
          <div className="flex flex-col items-center gap-2">
            <h2 className="rounded-full bg-white text-secondary font-bold text-[56px] px-12">
             {slide.Heading}
            </h2>
            <h3 className="rounded-full bg-white text-secondary font-bold text-[40px] px-4">
              32 Agustus - 12 November 2023
            </h3>
          </div>
          <div className="backdrop-blur-md bg-gradient-to-br from-accent/40 border border-accent/50 rounded-xl p-4 space-y-8">
            <p className=" text-white font-montserrat">
              {slide.Description}
            </p>

            <div className="flex justify-center items-center">
              <img src="/assets/images/Naga.png" alt="logo" className="w-16" />
              <img
                src="/assets/images/Naga.png"
                alt="logo"
                className="w-16 transform scale-x-[-1]"
              />
            </div>
          </div>

          <div className="mt-auto flex justify-between ">
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={prevSlide}
                className="bg-white/30 rounded-full p-1"
              >
                <FiChevronLeft className="text-white text-5xl" />
              </button>
              <span className="text-white text-lg font-montserrat">
                Sebelum
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-white text-lg font-montserrat">
                Sesudah
              </span>
              <button
                onClick={nextSlide}
                className="bg-white/30 rounded-full p-1"
              >
                <FiChevronRight className="text-white text-5xl" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RangkaianSlide;
{
  /* <div>
      <button onClick={prevSlide}>Previous</button>
      <div>
        {slides.map((slide, index) => (
          <>
            <p
            key={slide.id}
            style={{ display: index === currentSlide ? 'block' : 'none' }}
          >{slide.imageUrl}</p>
          </>
        ))}
      </div>
      <button onClick={nextSlide}>Next</button>
    </div> */
}
