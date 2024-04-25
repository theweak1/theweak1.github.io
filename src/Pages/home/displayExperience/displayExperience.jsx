const DisplayExperience = () => {
  return (
    <div className="py-12 px-4 text-center border-b border-text dark:border-text-dark bg-alt dark:bg-alt-dark">
      <h2 className="heading text-text dark:text-text-dark">Experience</h2>
      <div
        className="relatvie"
        style={{ maxWidth: "1000px", margin: "30px auto 0 auto" }}
      >
        <div data-date="June 2021 – Present" className="shadow-custom">
          <h3>Incubyte</h3>
          <h4>Tech Lead</h4>
          <p>
            Tech Lead with expertise in Ruby on Rails and Next.js, working with
            a US-based client in the mental health industry. Committed to
            delivering top-notch software quality, ensuring client satisfaction
            and team happiness.
          </p>
          <ul>
            <li>
              Deliver high-quality code for clients, inspire through exemplary
              code, work, and conduct, and provide technical leadership.
            </li>
            <li>
              Encourage diverse ideas, handle personal issues, and foster a
              supportive environment for the team.
            </li>
            <li>
              Enable continuous learning, sharing of knowledge, and foster both
              individual and collective professional growth.
            </li>
            <li>
              Guide the team through challenges, unblock technical roadblocks,
              and swiftly address issues hindering progress.
            </li>
            <li>
              Actively listen to team and client needs, keenly observe changes
              in team dynamics and client expectations, and adapt strategies
              accordingly.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DisplayExperience;
