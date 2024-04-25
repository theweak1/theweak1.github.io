import skills from "../../../configuration/skills";

const Skill_List = () => {
  return (
    <ul className="block my-0 mx-auto p-0 pt-5">
      {skills.map((skill) => (
        <li
          key={skill.name}
          className="inline-block m-2 py-1 px-2 text-text dark:text-text-dark rounded-xl bg-bg-repo dark:bg-bg-repo-dark list-none cursor-default shadow-custom hover:scale-110"
        >
          {skill.url ? (
            <a
              href={skill.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text dark:text-text-dark "
            >
              <i className={`${skill.icon} ${skill.color} text-lg`}>
                {skill.name}
              </i>
            </a>
          ) : (
            <i className={`${skill.icon} ${skill.color}`}>{skill.name}</i>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Skill_List;
