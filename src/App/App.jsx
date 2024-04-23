import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import NavBar from "../components/navBar/navBar";
import routes from "../components/routes/routes";

function App() {
  return (
    <Router>
      <NavBar />
      <main className="bg-bg-main dark:bg-bg-main-dark text-text dark:text-text-dark min-h-screen flex items-center justify-center box-border">
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
    </Router>
  );
}

export default App;
