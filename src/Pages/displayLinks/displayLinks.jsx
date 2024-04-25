import links from "../../configuration/links";
import LinkList from "./linkList/linkList";
import SearchInput from "../../components/SearchInput/searchInput";
import { useState } from "react";

const DisplayLinks = () => {
  const [filteredLinks, setFilteredLinks] = useState(links);

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setFilteredLinks(links);
      return;
    }

    const filtered = links.filter(
      (link) =>
        link.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        link.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredLinks(filtered);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="mb-1 text-accent text-4xl"> Find Me </h1>
      <small className="block w-full text-center mb-5">
        Everywhere on the internet!
      </small>
      <section className="flex flex-wrap justify-center items-center p-8 rounded-b-3xl mb-16">
        <SearchInput onSearch={handleSearch} placeHolder={"Search Links"} />
        <ul className="list-none p-0 w-full flex flex-wrap justify-center items-start">
          {filteredLinks.map((link) => (
            <LinkList key={link.name} link={link} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default DisplayLinks;
