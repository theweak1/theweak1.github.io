import "@fortawesome/fontawesome-free/js/all.js";
import { username } from "./configuration";

const links = [
  {
    name: "Mail",
    description: "Want to talk? Write me a mail",
    url: "mailto:iamtheweak1@gmail.com",
    icon: "fa fa-envelope",
    color: "#0088cc",
  },
  {
    name: "GitHub",
    description: "My favourite place :)",
    url: `https://github.com/${username}`,
    icon: "fa-brands fa-github",
    color: "black dark:white",
  },
  {
    name: "LinkedIn",
    description: "Career updates and thoughts",
    url: "https://pr.linkedin.com/in/lenier-ortiz-rodriguez-089b3a26b",
    icon: "fa-brands fa-linkedin",
    color: "#0077B5",
  },
];

export default links;
