import { Link } from "react-router-dom";
import routes from "../../Routes/routes";

const NavBar = ({ currentPath }) => {
  return (
    <nav className="sticky top-0 bg-bg-main dark:bg-bg-main-dark dark:text-text-dark flex justify-around items-center">
      {routes.map((route) => {
        if (route.hide) return null;

        return route.external ? (
          <a
            key={route.path}
            href={route.path} // Ensures exact external URL is used
            target="_blank"
            rel="noopener noreferrer"
            className="white"
          >
            {route.name}
          </a>
        ) : (
          <Link
            key={route.path}
            to={route.path} // Internal navigation handled by React Router
            className={route.path === currentPath ? "text-accent" : "white"}
          >
            {route.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;

