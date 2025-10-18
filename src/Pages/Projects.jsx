import Carculator from "../../public/Images/Carculator.png";
import Films from "../../public/Images/Films.png";
import ToDo from "../../public/Images/Todo.png";
import Yemak from "../../public/Images/Yemak.png";
import github from "../../public/Images/github.png";


import { Link } from "react-router";
export default function Projects({ introTexts, language }) {
  const projectTexts = {
    en: [
      {
        title: "Calculator",
        description:
          "Simple and modern calculator built with React & Tailwind CSS.",
        link: "/projects/carculation",
        img: Carculator,
      },
      {
        title: "To-Do",
        description: "Simple and modern To Do built with React & Tailwind CSS.",
        link: "/projects/to-do",
        img: ToDo,
      },
      {
        title: "Films and movies",
        description:
          "Simple and modern films and movies app built with React & Tailwind CSS.",
        link: "/projects/films",
        img: Films,
      },
      {
        title: "Yemak",
        description:
          "Simple and modern yemak app built with React & Tailwind CSS.",
        link: "/projects/yemak",
        img: Yemak,
      },
      {
        title: "Github searcher",
        description:
          "Simple and modern Github searcher app built with React & Tailwind CSS.",
        link: "/projects/github",
        img: github,
      },
    ],
    uz: [
      {
        title: "Kalkulyator",
        description:
          "React & Tailwind CSS bilan yaratilgan sodda va zamonaviy kalkulyator.",
        link: "/projects/carculation",
        img: Carculator,
      },
      {
        title: "To-Do",
        description:
          "React & Tailwind CSS bilan yaratilgan sodda va zamonaviy To-Do ilovasi.",
        link: "/projects/to-do",
        img: ToDo,
      },
      {
        title: "Filmlar va kinolar",
        description:
          "React & Tailwind CSS bilan yaratilgan sodda va zamonaviy filmlar ilovasi.",
        link: "/projects/films",
        img: Films,
      },
      {
        title: "Yemak",
        description:
          "React & Tailwind CSS bilan yaratilgan sodda va zamonaviy yemak ilovasi.",
        link: "/projects/yemak",
        img: Yemak,
      },
      {
        title: "Github searcher",
        description:
          "React & Tailwind CSS bilan yaratilgan sodda va zamonaviy Github qidiruv ilovasi.",
        link: "/projects/github",
        img: github,
      },
    ],
    ru: [
      {
        title: "Калькулятор",
        description:
          "Простой и современный калькулятор на React & Tailwind CSS.",
        link: "/projects/carculation",
        img: Carculator,
      },
      {
        title: "To-Do",
        description: "Приложение To-Do на React & Tailwind CSS.",
        link: "/projects/to-do",
        img: ToDo,
      },
      {
        title: "Фильмы и кино",
        description:
          "Простое и современное приложение для фильмов на React & Tailwind CSS.",
        link: "/projects/films",
        img: Films,
      },
      {
        title: "Yemak",
        description:
          "Простое и современное приложение yemak на React & Tailwind CSS.",
        link: "/projects/yemak",
        img: Yemak,
      },
      {
        title: "Github searcher",
        description:
          "Простое и современное приложение Github Searcher на React & Tailwind CSS.",
        link: "/projects/github",
        img: github,
      },
    ],
  };

  return (
    <div className="flex items-center justify-center flex-wrap gap-10 w-[1280px] mx-auto mt-20">
      {projectTexts[language].map((project, idx) => (
        <Link key={idx} to={project.link}>
          <div className="relative group w-[340px] rounded-[25px] border border-teal-400 overflow-hidden shadow-lg hover:shadow-teal-400/50 transition-all duration-500 cursor-pointer">
            <span className="absolute inset-0 rounded-[25px] border-[1px] border-transparent group-hover:border-teal-400 transition-all duration-500"></span>
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[330px] object-cover rounded-t-[25px] transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="px-4 mt-4 mb-4">
              <h3 className="text-3xl font-bold text-teal-400 group-hover:text-white transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-slate-400 mt-2 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                {project.description}
              </p>
            </div>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-t from-teal-400 via-transparent to-transparent transition-all duration-700 rounded-[25px]"></div>
            <span className="absolute top-0 left-0 h-0.5 w-0 bg-teal-400 group-hover:w-full transition-all duration-500"></span>
            <span className="absolute bottom-0 right-0 h-0.5 w-0 bg-teal-400 group-hover:w-full transition-all duration-500"></span>
            <span className="absolute bottom-0 left-0 w-0.5 h-0 bg-teal-400 group-hover:h-full transition-all duration-500"></span>
            <span className="absolute top-0 right-0 w-0.5 h-0 bg-teal-400 group-hover:h-full transition-all duration-500"></span>
          </div>
        </Link>
      ))}
    </div>
  );
}
