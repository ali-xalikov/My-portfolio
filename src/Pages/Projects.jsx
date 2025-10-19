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
        link: "carculation",
        img: Carculator,
      },
      {
        title: "To-Do",
        description: "Simple and modern To Do built with React & Tailwind CSS.",
        link: "to-do",
        img: ToDo,
      },
      {
        title: "Films and movies",
        description:
          "Simple and modern films and movies app built with React & Tailwind CSS.",
        link: "films",
        img: Films,
      },
      {
        title: "Yemak",
        description:
          "Simple and modern yemak app built with React & Tailwind CSS.",
        link: "yemak",
        img: Yemak,
      },
      {
        title: "Github searcher",
        description:
          "Simple and modern Github searcher app built with React & Tailwind CSS.",
        link: "github",
        img: github,
      },
    ],
    uz: [
      {
        title: "Kalkulyator",
        description:
          "React & Tailwind CSS bilan yaratilgan sodda va zamonaviy kalkulyator.",
        link: "carculation",
        img: Carculator,
      },
      {
        title: "To-Do",
        description:
          "React & Tailwind CSS bilan yaratilgan sodda va zamonaviy To-Do ilovasi.",
        link: "to-do",
        img: ToDo,
      },
      {
        title: "Filmlar va kinolar",
        description:
          "React & Tailwind CSS bilan yaratilgan sodda va zamonaviy filmlar ilovasi.",
        link: "films",
        img: Films,
      },
      {
        title: "Yemak",
        description:
          "React & Tailwind CSS bilan yaratilgan sodda va zamonaviy yemak ilovasi.",
        link: "yemak",
        img: Yemak,
      },
      {
        title: "Github searcher",
        description:
          "React & Tailwind CSS bilan yaratilgan sodda va zamonaviy Github qidiruv ilovasi.",
        link: "github",
        img: github,
      },
    ],
    ru: [
      {
        title: "Калькулятор",
        description:
          "Простой и современный калькулятор на React & Tailwind CSS.",
        link: "carculation",
        img: Carculator,
      },
      {
        title: "To-Do",
        description: "Приложение To-Do на React & Tailwind CSS.",
        link: "to-do",
        img: ToDo,
      },
      {
        title: "Фильмы и кино",
        description:
          "Простое и современное приложение для фильмов на React & Tailwind CSS.",
        link: "films",
        img: Films,
      },
      {
        title: "Yemak",
        description:
          "Простое и современное приложение yemak на React & Tailwind CSS.",
        link: "yemak",
        img: Yemak,
      },
      {
        title: "Github searcher",
        description:
          "Простое и современное приложение Github Searcher на React & Tailwind CSS.",
        link: "github",
        img: github,
      },
    ],
  };

  return (
    <div className="flex items-center justify-center flex-wrap gap-10 w-[1280px] max-w-full mx-auto mt-20 px-4">
      {projectTexts[language].map((project, idx) => (
        <Link key={idx} to={`/My-portfolio/projects/${project.link}`}>
          <div
            className="
              relative group 
              max-w-[340px] h-auto 
              sm:max-w-[280px] 
              md:max-w-[320px] 
              rounded-[25px] border border-teal-400 
              overflow-hidden shadow-lg 
              hover:shadow-teal-400/50 transition-all duration-500 cursor-pointer
              
              max-[500px]:max-w-[380px] 
              max-[500px]:h-[180px] 
              max-[500px]:flex 
              max-[500px]:items-center 
              max-[500px]:gap-4
            "
          >
            <div className="overflow-hidden max-[500px]:w-[45%]">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[330px] object-cover rounded-t-[25px] transition-transform duration-700 group-hover:scale-110 max-[500px]:h-[180px] max-[500px]:rounded-[0]"
              />
            </div>
            <div className="px-4 mt-4 mb-4 max-[500px]:mt-0 max-[500px]:mb-0 max-[500px]:p-2 max-[500px]:w-[55%]">
              <h3 className="text-3xl font-bold text-teal-400 group-hover:text-white transition-colors duration-300 max-[500px]:text-xl">
                {project.title}
              </h3>
              <p className="text-slate-400 mt-2 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300 max-[500px]:text-xs max-[500px]:line-clamp-3">
                {project.description}
              </p>
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-t from-teal-400 via-transparent to-transparent transition-all duration-700 rounded-[25px]"></div>
          </div>
        </Link>
      ))}
    </div>
  );
}
