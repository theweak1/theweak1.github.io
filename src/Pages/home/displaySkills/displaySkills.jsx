import Skill_List from "../skill_List/skill_List";

const DisplaySkills = () => {
  return (
    <>
      <section className="pt-12 pl-4 pb-5 pr-4 text-center">
        <h2 className="relative inline-block text-3xl mb-8 text-text dark:text-text-dark">
          Skills
        </h2>
        <p className="border-b border-text dark:border-text-dark pb-5">
          I consider myself a tech agnostic developer, these are some of the
          tools that I have worked with in the past.
        </p>
        <Skill_List />
      </section>
    </>
  );
};

export default DisplaySkills;
