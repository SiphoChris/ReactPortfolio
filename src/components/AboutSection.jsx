import data from '../data/index.json';

const About = () => {
  const { about } = data.result;
  return (
    <section id="ABOUT" className="bg-gray-200 py-16 px-4 md:px-24">
      <h2 className="text-center text-3xl font-bold mb-16">About Me</h2>
      <article className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32">
        <div className="illustration-container">
          <img
            src="src/assets/images/illustrations/undraw_about-me_5990.svg"
            alt="Illustration"
            className="w-64"
          />
        </div>
        <p className="w-[45ch] text-lg leading-relaxed">
          {about.description}
        </p>
      </article>
    </section>
  );
};

export default About;
