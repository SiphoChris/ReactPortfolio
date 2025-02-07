import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {/* Preloader Overlay with Blur Effect */}
      {isLoading && (
        <section
          className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-secondary z-50 transition-opacity duration-500 ease-in-out backdrop-blur-lg"
        >
          <div className="w-20 h-20 border-6 border-t-[#FF4500] border-opacity-60 border-gray-700 rounded-full animate-spin"></div>
        </section>
      )}
    </>
  );
};

export default Preloader;
