import React, { useState, useEffect } from "react";
import RepoList from "./repoList/repoList";
import SearchInput from "../../../SearchInput/searchInput";
import { hideForks, maxPages } from "../../../../configuration/configuration";

const DisplayRepos = ({ username }) => {
  const [repos, setRepos] = useState([]);
  const [filteredRepos, setFilteredRepos] = useState(repos);

  useEffect(() => {
    const getRepos = async () => {
      let rep = [];
      for (let i = 1; i <= maxPages; i++) {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?&sort=pushed&per_page=100&page=${i}`,
        );
        const data = await response.json();
        rep = rep.concat(data);
      }

      // Sort by stars and then by forks
      rep.sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          b.forks_count - a.forks_count,
      );
      setRepos(rep);
      setFilteredRepos(rep); // Set filteredRepos here if you want all repos to be shown initially
    };

    if (username) {
      getRepos();
    }
  }, [username]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredRepos(repos);
      return;
    }

    const filtered = repos.filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredRepos(filtered);
  };

  const userHome = `https://github.com/${username}`;
  return (
    <React.Fragment>
      <SearchInput onSearch={handleSearch} placeHolder={"Search projects"} />
      <ul className="w-full flex flex-wrap justify-center items-start list-none p-0 box-border my-4">
        {filteredRepos.map((repo) => (
          <RepoList
            key={repo.name}
            repo={repo}
            userHome={userHome}
            hideForks={hideForks}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default DisplayRepos;
