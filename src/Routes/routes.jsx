import Home from "../Pages/home/Home";
import DisplayLinks from "../Pages/displayLinks/displayLinks";
import Projects from "../Pages/projects/projects";

const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
    title: "Theweak1's Space",
  },
  {
    path: "/projects",
    element: <Projects />,
    name: "Projects",
    title: "Theweak1's Projects",
  },
  {
    path: "/links",
    element: <DisplayLinks />,
    name: "Links",
    title: "Theweak1's Links",
  },
];

export default routes;

