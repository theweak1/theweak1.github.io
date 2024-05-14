import { Link } from "react-router-dom";
import links from "../../configuration/links";
import DisplayExperience from "./displayExperience/displayExperience";
import DisplaySkills from "./displaySkills/displaySkills";
import adjetives from "../../configuration/adjetive";
import useTypewriter from "../../hooks/typewriter";

const Home = () => {
  // useTypewriter({list of adjetives}, {writting speed}, {wait time before deleting and writting again}, {deleting speed})
  const typewriter = useTypewriter(adjetives, 200, 2000, 100);

  return (
    <div className="mx-auto">
      <div
        className=" flex h-auto justify-center items-center"
        style={{ minHeight: "100vmin" }}
      >
        <div
          className="z-10 text-center items-center relative"
          style={{ padding: "15vmin" }}
        >
          <img
            className="border-2 border-accent rounded-full h-auto min-w-56 max-w-md mx-auto"
            alt="Me"
            src={`https://github.com/theweak1.png`}
          />{" "}
          <h2 className="text-accent text-2xl m-3">
            ______________________________________
          </h2>
          <h1 className="m-0 text-text dark:text-text-dark text-4xl">
            Lenier Ortiz
          </h1>
          <h2 className="text-accent text-2xl m-3">
            <u>theweak1</u>
          </h2>
          <h2 className="text-accent text-2xl m-3">
            I&apos;m{" "}
            <span className="typewriter">
              {typewriter}
              <span className="wrap"></span>
            </span>
          </h2>
          <nav className="text-center mr-10">
            <ul>
              {links.map((link) => (
                <li key={link.url} className="inline-block list-none">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-2xl text-gray-300 p-2.5"
                  >
                    <i
                      className={`${link.icon} ${link.color}  hover:text-accent`}
                      title={link.name}
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <div className="p-3 border-b border-text dark:border-text-dark text-center ">
        <h2 className="text-text dark:text-text-dark">About Me</h2>
        <p className="p-2 text-center my-0 mx-auto">
          Hey traveller, welcome to my little space on the internet. <br />
          You can find my{" "}
          <Link
            to="/blog"
            className="text-accent text-bold hover:text-accent hover:bg-alt hover:dark:bg-alt-dark hover:border border-accent rounded-s"
          >
            blog
          </Link>
          ,{" "}
          <Link
            to="/projects"
            className="text-accent text-bold hover:text-accent hover:bg-alt hover:dark:bg-alt-dark hover:border border-accent rounded-s"
          >
            projects{" "}
          </Link>
          and{" "}
          <Link
            to="/links"
            className="text-accent text-bold hover:text-accent hover:bg-alt hover:dark:bg-alt-dark hover:border border-accent rounded-s"
          >
            more links
          </Link>{" "}
          here.
          <br />
          Feel free to{" "}
          <a
            href={links[0].url}
            target="_blank"
            rel="noopener"
            className="text-accent text-bold hover:text-accent hover:bg-alt hover:dark:bg-alt-dark hover:border border-accent rounded-s"
          >
            shoot me a mail{" "}
          </a>
          if anything here managed to catch your attention.
        </p>
      </div>
      <DisplayExperience />
      <DisplaySkills />
    </div>
  );
};

export default Home;
