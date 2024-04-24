import { useState, useEffect } from "react";
import DisplayProfile from "./displayProfile/displayProfile";
import DisplayRepos from "./displayRepos/displayRepos";
import { username } from "../../configuration/configuration";

const Projects = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const profileData = await res.json();

      setProfile(profileData);
    };

    getProfile();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="flex justify-center flex-wrap flex-row items-center w-11/12 max-w-screen-xl">
      <h1 className="text-accent mb-1 text-4xl">All of My Projects</h1>
      <small className="w-full text-center block mb-5">
        Some useful, some stupid, all fun!
      </small>
      <section>{profile && <DisplayProfile profile={profile} />}</section>
      <section className="flex flex-wrap justify-center bg-bg-repo dark:bg-bg-repo-dark mt-0 p-8 rounded-bl-3xl rounded-br-3xl">
        {profile && <DisplayRepos username={profile.login} />}
      </section>
    </div>
  );
};

export default Projects;
