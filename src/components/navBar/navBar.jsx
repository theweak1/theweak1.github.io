import { Link } from "react-router-dom";
import routes from "../../Routes/routes";

const NavBar = ({ currentPath }) => {
  return (
    <nav className="sticky top-0 bg-bg-main dark:bg-bg-main-dark dark:text-text-dark flex justify-around items-center">
      {routes.map((route) =>
        route.hide ? null : route.external ? (
          <a
            key={route.path}
            href={route.path}
            target="_blank"
            rel="noopener noreferrer"
            className="white hover:text-accent"
          >
            {route.name}
          </a>
        ) : (
          <Link
            key={route.path}
            to={route.path}
            className={route.path === currentPath ? "text-accent" : "white"}
          >
            {route.name}
          </Link>
        ),
      )}
    </nav>
  );
};

export default NavBar;
