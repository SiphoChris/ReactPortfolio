import portfolioData from '../data/index.json';

const Hero = () => {
    const { personalInfo, cv } = portfolioData;
    const { name, title, contact, social } = personalInfo;
  
    return (
      <section className="min-h-screen relative -mt-32 pt-32 bg-black">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center scale-x-[-1]"
          style={{
            backgroundImage: "url('/images/images/bg-image.png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
  
        <div className="relative grid lg:grid-cols-2 grid-cols-1 items-center container mx-auto px-6 lg:px-24 py-12">
          {/* Text Content */}
          <div className="flex flex-col justify-between h-full gap-24 text-white">
            <div className="space-y-4 lg:pl-48 pl-6">
              <h1 className="text-5xl font-bold">Hello there,</h1>
              <h3 className="text-2xl font-bold">{name} here</h3>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {social.map((item, index) => (
                  <a 
                    key={index}
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <i className={`${item.icon} text-2xl hover:text-orange-600 transition-colors duration-300`}></i>
                  </a>
                ))}
              </div>
  
              {/* Contact Info */}
              <div className="space-y-2 mt-4">
                {contact.items.map((item, index) => (
                  <p key={index}>
                    <i className={item.icon}></i>&nbsp; {item.value}
                  </p>
                ))}
              </div>
            </div>
  
            <div className="space-y-4 lg:pl-48 pl-6">
              <p className="text-lg">{title}</p>
              <a
                href={cv.path}
                download
                className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full border-2 border-gray-200 hover:bg-orange-700 transition-colors duration-300"
              >
                {cv.text} <i className={cv.icon}></i>
              </a>
            </div>
          </div>
  
          {/* Profile Image */}
          <div className="flex justify-center items-center mt-12 lg:mt-0">
            <img 
              src="./images/images/profile-image.png" 
              alt="Profile" 
              className="w-96 rounded-full border-b-8 border-orange-600"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;