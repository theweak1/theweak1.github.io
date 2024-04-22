import DisplayLinks from "../displayLinks/displayLinks";
import Home from "../home/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
    name: "Home",
  },
  {
    path: "/links",
    element: <DisplayLinks />,
    name: "Links",
  },
];

export default routes;
