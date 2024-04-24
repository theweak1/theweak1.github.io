import devicons from "../devicons/devicons";

const RepoList = ({ userHome, repo, hideForks }) => {
  if (repo.fork && hideForks) {
    return null; // Return null to render nothing
  }

  const langUrl = `${userHome}?tab=repositories&q=&language=${repo.language}`;
  const starsUrl = `${userHome}/${repo.name}/stargazers`;
  const forksUrl = `${userHome}/${repo.name}/network/members`;

  return (
    <li className="w-full min-h-44 rounded-xl my-4 mx-0 border border-accent p-4 text-center bg-bg-repo dark:bg-bg-repo-dark hover:bg-bg-main hover:dark:bg-bg-main-dark shadow-custom">
      <h3 className="m-1 w-full text-center text-accent">{repo.name}</h3>
      <span>{repo.description ? repo.description : <p>No description available</p>}</span>
      <br />
      <br />
      <span className="flex justify-around items-center">
        {repo.stargazers_count > 0 && (
          <a href={starsUrl}>
            <span>⭐ {repo.stargazers_count}</span>
          </a>
        )}
        {repo.language && (
          <a href={langUrl}>
            <span>
              {devicons[repo.language]} {repo.language}
            </span>
          </a>
        )}

        {repo.forks_count > 0 && (
          <a href={forksUrl}>
            <span>
              {devicons["Git"]} {repo.forks_count}
            </span>
          </a>
        )}
      </span>
      {repo.homepage && repo.homepage !== "" ? (
        <>
          <br />
          <br />
          <a
            className="py-3 px-5 bg-bg-main dark:bg-bg-main-dark rounded-3xl border-2 border-accent text-text dark:text-text-dark hover:bg-accent hover:border-2 hover:border-text scale-110 "
            href={repo.html_url}
          >
            Code {devicons["Github"]}
          </a>
          <a
            className="py-3 px-5 bg-bg-main dark:bg-bg-main-dark rounded-3xl border-2 border-accent text-text dark:text-text-dark hover:bg-accent hover:border-2 hover:border-text scale-110 "
            href={repo.homepage}
          >
            Live {devicons["Chrome"]}
          </a>
          <br />
        </>
      ) : (
        <>
          <br />
          <br />
          <a
            className="py-3 px-5 bg-bg-main dark:bg-bg-main-dark rounded-3xl border-2 border-accent text-text dark:text-text-dark hover:bg-accent hover:border-2 hover:border-text scale-110 "
            href={repo.html_url}
          >
            View Project {devicons["Github"]}
          </a>
        </>
      )}
      <br />
    </li>
  );
};

export default RepoList;
