
const SkillCard = ({ icon, name }) => {
  return (
    <div className="skill-card p-6 border-none bg-gray-100 rounded-md flex flex-col items-center">
      <img src={icon} alt={`${name} icon`} className="w-16 h-16 grayscale hover:grayscale-0" />
      <p className="mt-2 text-center">{name}</p>
    </div>
  );
};

export default SkillCard;
