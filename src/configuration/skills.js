import { username } from "./configuration";

const baseUrl = `https://github.com/${username}?tab=repositories&q=&language=`;
const skillsData = [
  {
    language: "javascript",
    name: "Javascript",
    icon: "devicon-javascript-plain colored",
  },
  {
    language: "javascript",
    name: "React",
    icon: "devicon-react-original colored",
  },
  {
    language: "javascript",
    name: "NodeJS",
    icon: "devicon-nodejs-plain colored",
  },
  {
    language: "python",
    name: "Python",
    icon: "devicon-python-plain colored",
    color: "#3472a6",
  },
  {
    language: "shell",
    name: "Bash",
    icon: "devicon-bash-plain",
  },
  {
    language: "lua",
    name: "Lua",
    icon: "devicon-lua-plain colored",
    color: "blue",
  },
  {
    language: "go",
    name: "Go",
    icon: "devicon-go-plain colored",
  },
  {
    language: "shell",
    name: "Linux",
    icon: "devicon-linux-plain",
  },
  {
    language: "dockerfile",
    name: "Docker",
    icon: "devicon-docker-plain colored",
  },

  {
    name: "GitHub",
    icon: "devicon-github-plain",
  },
  {
    name: "Heroku",
    icon: "devicon-heroku-plain colored",
  },
  {
    name: "Git",
    icon: "devicon-git-plain colored",
  },
  {
    name: "Neovim",
    icon: "devicon-vim-plain colored",
  },
];

const skills = skillsData.map((skill) => ({
  ...skill,
  ...(skill.language && { url: `${baseUrl}${skill.language}` }),
}));

export default skills;
