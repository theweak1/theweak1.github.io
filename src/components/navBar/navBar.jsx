import { Link } from "react-router-dom";
import routes from "../routes/routes";

const NavBar = () => {
  return (
    <div className="sticky top-0 bg-bg-main dark:bg-bg-main-dark dark:text-text-dark">
      <nav className="flex justify-around items-center">
        {routes.map((route) => (
          <Link key={route.path} to={route.path}>
            {route.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
