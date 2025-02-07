import { useEffect } from 'react';
import data from '../data/index.json';

const Achievements = () => {
  const { achievements } = data.result;
  const { certifications } = achievements;
  const certificates = certifications.certificates;

  useEffect(() => {
    // Get the target carousel element
    const carouselElement = document.getElementById('default-carousel');
    
    // Import Flowbite carousel when component mounts
    import('flowbite').then(({ Carousel }) => {
      // Get carousel items
      const items = carouselElement.querySelectorAll('[data-carousel-item]');
      
      // Initialize the carousel
      if (carouselElement && items.length > 0) {
        new Carousel(carouselElement, items, {
          interval: 3000,
          indicators: true,
          animation: 'slide'
        });
      }
    });
  }, []);

  return (
    <section className="achievements md:px-24 py-16 bg-[#333]">
      <h2 className="text-center text-3xl font-bold text-white mb-4">
        Achievements &nbsp; <i className={certifications.icon}></i>
      </h2>
      <p className="text-center text-md text-white mb-8">
        {certifications.title}
      </p>

      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className={index === 0 ? "duration-700 ease-in-out" : "hidden duration-700 ease-in-out"}
              data-carousel-item={index === 0 ? "active" : ""}
            >
              <img
                loading={index === 0 ? "eager" : "lazy"}
                src={certificate.image}
                alt={certificate.title}
                className="absolute block w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {certificates.map((_, index) => (
            <button
              key={index}
              type="button"
              className="w-3 h-3 rounded-full bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800"
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6 10"
              fill="none"
              aria-hidden="true"
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

        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6 10"
              fill="none"
              aria-hidden="true"
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