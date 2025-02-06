import data from '../data/index.json';
import { Download } from 'lucide-react';

const HeroSection = () => {
  const { personalInfo, about, cv } = data.result;

  return (
    <section
      id="HOME"
      className="min-h-screen bg-cover bg-center bg-no-repeat pt-[8rem]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('src/assets/images/images/bg-image.png')",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Left: Text */}
        <div className="hero-text text-white flex flex-col gap-12 mx-auto">
          <div>
            <h1 className="text-4xl md:text-6xl mb-4">Hello there,</h1>
            <h3 className="text-2xl md:text-3xl">{personalInfo.name} here</h3>
            <div className="socials flex space-x-4 mt-6">
              {personalInfo.social.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-orange-500 transition-colors"
                >
                  {/* Using the icon class from JSON (or replace with a lucide-react icon) */}
                  <i className={`${social.icon} text-3xl`}></i>
                </a>
              ))}
            </div>
            <br />
            <div className="mt-4">
              {personalInfo.contact.items.map((item, index) => (
                <p key={index} className="flex items-center">
                  <i className={`${item.icon} mr-2`}></i> {item.value}
                </p>
              ))}
            </div>
          </div>
          <div >
            <p className="text-xl">{personalInfo.title}</p>
            <a
              href={cv.path}
              download
              className="inline-flex items-center gap-2 bg-orange-500 text-white py-2 px-4 border-2 border-gray-100 rounded-full hover:bg-orange-600 transition-colors mt-4"
            >
              <Download size={18} /> {cv.text}
            </a>
          </div>
        </div>
        {/* Right: Profile Image */}
        <div className="hero-image flex justify-center items-center">
          <img
            src="src/assets/images/images/profile-image.png"
            alt="Profile"
            className="w-60 md:w-92 rounded-full border-b-8 border-orange-500"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
