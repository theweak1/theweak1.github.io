import { HashRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/navBar/navBar";
import routes from "../components/routes/routes";

function App() {
  return (
    <Router>
      <NavBar />
      <main className="bg-bg-main dark:bg-bg-main-dark text-text dark:text-text-dark min-h-screen flex items-center justify-center box-border">
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
