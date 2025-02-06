import data from '../data/index.json';
import SkillCard from './SkillsCard';
import ProjectCard from './ProjectCard';

const Skills = () => {
  const { skills } = data.result;
  return (
    <section id="SKILLS" className="py-16 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Technical Skills */}
        <article className="mb-24">
          <h2 className="text-center text-3xl font-bold mb-16">Technical Skills</h2>
          <div className="technical-skills-container flex flex-wrap justify-center items-center gap-8">
            {skills.technical.map((skill, index) => (
              <SkillCard key={index} icon={skill.icon} name={skill.name} />
            ))}
          </div>
        </article>
        {/* Technical Tools */}
        <article className="technical-tools mb-24">
          <h2 className="text-center text-3xl font-bold mb-16">Technical Tools</h2>
          <div className="technical-tools-container flex flex-wrap justify-center items-center gap-8">
            {skills.tools.map((tool, index) => (
              <SkillCard key={index} icon={tool.icon} name={tool.name} />
            ))}
          </div>
        </article>
        {/* Personal Skills */}
        <article className="personal-skills">
          <h2 className="text-center text-3xl font-bold mb-16">Personal Skills</h2>
          <div className="personal-skills-container flex flex-wrap justify-center gap-4">
            {skills.personal.map((skill, index) => (
              <div key={index} className="border border-gray-400 rounded-full px-2 md:px-4 py-1 md:py-2">
                {skill}
              </div>
            ))}
          </div>
        </article>
      {/* Projects */}
      <article className="projects my-24">
        <h2 className="text-center text-3xl font-bold mb-16">Projects</h2>
        <div className="projects-container flex flex-wrap justify-center gap-8">
          {skills.projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
        ))}
        </div>
      </article>
      </div>
    </section>
  );
};

export default Skills;
