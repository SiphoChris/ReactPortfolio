
import { useState, useEffect } from "react";
import data from "../data/index.json";

const Achievements = () => {
  const { achievements } = data.result;
  const { certifications } = achievements;
  const certificates = certifications.certificates;

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === certificates.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? certificates.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="achievements md:px-24 py-16 bg-[#333]">
      <h2 className="text-center text-3xl font-bold text-white mb-4">
        Achievements &nbsp; <i className={certifications.icon}></i>
      </h2>
      <p className="text-center text-md text-white mb-8">
        {certifications.title}
      </p>

      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        {/* Image Wrapper for Sliding Effect */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {certificates.map((certificate, index) => (
            <img
              key={index}
              src={certificate.image}
              alt={certificate.title}
              className="w-full flex-shrink-0 h-56 md:h-96 object-contain"
            />
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {certificates.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white/50" : "bg-[#FF4500]"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Previous button */}
        <button
          onClick={prevSlide}
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          aria-label="Previous slide"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF4500]/30 group-hover:bg-[#FF4500]/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6 10"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </span>
        </button>

        {/* Next button */}
        <button
          onClick={nextSlide}
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          aria-label="Next slide"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#FF4500]/30 group-hover:bg-[#FF4500]/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6 10"
              fill="none"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default Achievements;
