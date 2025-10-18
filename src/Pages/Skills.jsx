import { useEffect, useState } from "react";
import teal from "../../public/Images/teal.png";

export default function Skills({ mode, language }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const titles = {
    en: "Skills Level",
    uz: "Mahorat darajasi",
    ru: "Уровень навыков",
  };

  const skillsByLanguage = {
    en: [
      {
        skill: "HTML",
        level: 90,
        icon: teal,
        a: "https://html.spec.whatwg.org/",
      },
      {
        skill: "CSS",
        level: 85,
        icon: "https://cdn-icons-png.flaticon.com/512/1287/1287038.png",
        a: "https://www.w3.org/Style/CSS/Overview.en.html",
      },
      {
        skill: "JavaScript",
        level: 80,
        icon: "https://cdn-icons-png.freepik.com/256/10040/10040321.png?semt=ais_white_label",
        a: "https://JavaScript.com",
      },
      {
        skill: "React",
        level: 70,
        icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        a: "https://react.dev/learn",
      },
      {
        skill: "Tailwind",
        level: 75,
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        a: "https://tailwindcss.com/",
      },
      {
        skill: "Router",
        level: 55,
        icon: "https://images.seeklogo.com/logo-png/27/2/react-router-logo-png_seeklogo-273846.png",
        a: "https://reactrouter.com/",
      },
    ],
    uz: [
      { skill: "HTML", level: 90, icon: teal },
      {
        skill: "CSS",
        level: 85,
        icon: "https://cdn-icons-png.flaticon.com/512/1287/1287038.png",
      },
      {
        skill: "JavaScript",
        level: 80,
        icon: "https://cdn-icons-png.freepik.com/256/10040/10040321.png?semt=ais_white_label",
      },
      {
        skill: "React",
        level: 70,
        icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      },
      {
        skill: "Tailwind",
        level: 75,
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      {
        skill: "Router",
        level: 55,
        icon: "https://images.seeklogo.com/logo-png/27/2/react-router-logo-png_seeklogo-273846.png",
      },
    ],
    ru: [
      { skill: "HTML", level: 90, icon: teal },
      {
        skill: "CSS",
        level: 85,
        icon: "https://cdn-icons-png.flaticon.com/512/1287/1287038.png",
      },
      {
        skill: "JavaScript",
        level: 80,
        icon: "https://cdn-icons-png.freepik.com/256/10040/10040321.png?semt=ais_white_label",
      },
      {
        skill: "React",
        level: 70,
        icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
      },
      {
        skill: "Tailwind",
        level: 75,
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      },
      {
        skill: "Router",
        level: 55,
        icon: "https://images.seeklogo.com/logo-png/27/2/react-router-logo-png_seeklogo-273846.png",
      },
    ],
  };

  const skills = skillsByLanguage[language] || skillsByLanguage["en"];
  const title = titles[language] || titles["en"];

  return (
    <div className="max-w-[1280px] mx-auto px-8 flex flex-col items-center py-20 min-h-screen">
      <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 mb-20">
        {skills.map((item, index) => (
          <a href={item.a}>
            <div key={item.skill} className="flex flex-col items-center group">
              <div className="relative flex flex-col items-center gap-3 p-6 rounded-3xl bg-gray-800 text-white shadow-xl transition-all duration-300 shadow-fuchsia-500/30 hover:shadow-fuchsia-500/70 border border-transparent hover:scale-105 cursor-pointer">
                <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ring-2 ring-offset-2 ring-offset-gray-900 ring-fuchsia-500/50"></div>
                <img
                  src={item.icon}
                  alt={item.skill}
                  className="w-16 h-16 mx-auto mb-2 filter group-hover:drop-shadow-lg group-hover:drop-shadow-cyan-400"
                />
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 group-hover:scale-105 transition-transform">
                  {item.skill}
                </h3>
              </div>
              {index < skills.length && (
                <div className="w-16 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-400 mt-4 rounded-full"></div>
              )}
            </div>
          </a>
        ))}
      </div>

      <h2 className="text-3xl font-extrabold mb-12 text-white">{title}</h2>

      <div className="flex flex-wrap justify-center gap-16">
        {skills.map((item) => {
          const radius = 50;
          const circumference = 2 * Math.PI * radius;
          const offset = animated
            ? circumference - (circumference * item.level) / 100
            : circumference;
          return (
            <div
              key={item.skill}
              className="relative w-36 h-36 flex flex-col items-center justify-center transition-all duration-500 hover:scale-105 group"
            >
              <svg className="w-36 h-36 -rotate-90 shadow-2xl rounded-full shadow-cyan-400/20">
                <circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#1f2937"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#38bdf8"
                  strokeWidth="8"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  fill="transparent"
                  className="transition-all duration-[1500ms] ease-out drop-shadow-lg drop-shadow-cyan-400/50"
                />
              </svg>
              <img
                src={item.icon}
                alt={item.skill}
                className="absolute w-14 h-14 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[4.5rem] text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400 transition-transform duration-300 group-hover:translate-y-[5rem] group-hover:text-2xl">
                {item.level}%
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
