import {
  FaReact,
  FaJsSquare,
  FaCss3Alt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiFirebase,
  SiTailwindcss,
  SiKotlin,
  SiPython,
  SiFigma,
  SiScratch,
} from "react-icons/si";

const skills = [
  {
    name: "Kotlin",
    icon: <SiKotlin size={30} />,
    color: "#0095D5",
  },
  {
    name: "UI/UX Design",
    icon: <SiFigma size={30} />,
    color: "#F24E1E",
  },
  {
    name: "Python",
    icon: <SiPython size={30} />,
    color: "#3776AB",
  },
  {
    name: "Data Analyst",
    icon: <FaJsSquare size={30} />,
    color: "#F7DF1E",
  },
  {
    name: "Scratch",
    icon: <SiScratch size={30} />,
    color: "#FF6A00",
  },
  {
    name: "Git & GitHub",
    icon: <FaGithub size={30} />,
    color: "#181717",
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={30} />,
    color: "#FFCA28",
  },
  {
    name: "HTML & CSS",
    icon: <FaCss3Alt size={30} />,
    color: "#264DE4",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare size={30} />,
    color: "#F7DF1E",
  },
  {
    name: "React.js",
    icon: <FaReact size={30} />,
    color: "#61DAFB",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss size={30} />,
    color: "#38B2AC",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs size={30} />,
    color: "#026E00",
  },
];

export default skills;
