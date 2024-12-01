import Home from "../Pages/home/Home";
import DisplayLinks from "../Pages/displayLinks/displayLinks";
import Projects from "../Pages/projects/projects";

const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
    title: "Theweak1's Space",
    hide: false,
  },
  {
    path: "/projects",
    element: <Projects />,
    name: "Projects",
    title: "Theweak1's Projects",
    hide: false,
  },
  {
    path: "/links",
    element: <DisplayLinks />,
    name: "Links",
    title: "Theweak1's Links",
    hide: false,
  },
  {
    path: "https://theweak1.github.io/theweak1blog/",
    name: "BlogList",
    hide: false,
    external: true
  },
];

export default routes;
