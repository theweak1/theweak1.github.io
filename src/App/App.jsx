import { useState, useEffect } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import NavBar from "../components/navBar/navBar";
import routes from "../Routes/routes";

function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}

// New component that can use hooks from react-router-dom
function AppInner() {
  const [currentPath, setCurrentPath] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div className="md:max-w-5xl lg:max-w-full overflow-hidden">
      <NavBar currentPath={currentPath} />
      <main className="bg-bg-main dark:bg-bg-main-dark text-text dark:text-text-dark min-h-screen flex items-center justify-center box-border ">
        <Routes>
          {routes.map(({ path, element, title }) => (
            <Route
              key={path}
              path={path}
              element={
                <>
                  <Helmet>
                    <title>{title}</title>
                  </Helmet>
                  {element}
                </>
              }
            />
          ))}
        </Routes>
      </main>
      <footer className="text-center bg-bg-main dark:bg-bg-main-dark text-text dark:text-text-dark text-lg">
        <h4>
          Made with ❤ by
          <a
            href="https://github.com/theweak1/projects"
            className="text-accent"
          >
            Theweak1
          </a>
        </h4>
      </footer>
    </div>
  );
}

export default App;
