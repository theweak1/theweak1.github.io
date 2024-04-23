import Home from "../Pages/home/Home";
import DisplayLinks from "../Pages/displayLinks/displayLinks";
import About from "../Pages/about/About";
import Projects from "../Pages/projects/projects";

const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
    title: "Home",
  },
  {
    path: "/about",
    element: <About />,
    name: "about me",
    title: "About me",
  },
  {
    path: "/projects",
    element: <Projects />,
    name: "Projecs",
    title: "theweak1's Projects",
  },
  {
    path: "/links",
    element: <DisplayLinks />,
    name: "Links",
    title: "theweak1's Links",
  },
];

export default routes;
