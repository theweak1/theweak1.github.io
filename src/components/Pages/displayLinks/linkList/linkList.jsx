import IconBuilder from "../../../iconBuilder/iconBuilder";
import urlBuilder from "../../../urlBuilder/urlBuilder";

const LinkList = ({ link }) => {
  return (
    <li className="w-full min-h-20 rounded-lg my-4 p-4 text-center border-accent border">
      <a
        href={urlBuilder(link)}
        target="_blank"
        className="no-underline text-accent"
      >
        <div>
          <h2
            className="w-full text-center m-0 text-text dark:text-text-dark"
            dangerouslySetInnerHTML={{ __html: IconBuilder(link) + link.name }}
          ></h2>
          <p className="m-0">{link.description}</p>
        </div>
      </a>
    </li>
  );
};

export default LinkList;
