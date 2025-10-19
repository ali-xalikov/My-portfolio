import { useState, useEffect } from "react";
import photo from "../../public/Images/photo.jpg";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Router from "../Router/Route";

function App() {
  const [burger, setBurger] = useState(false);
  const [mode, setMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  const isCarculation = location.pathname.startsWith(
    "/My-portfolio/projects/carculation"
  );
  const isFilms = location.pathname.startsWith(
    "/My-portfolio/projects/films"
  );
  const isTodo = location.pathname.startsWith("/My-portfolio/projects/to-do");
  const isYemak = location.pathname.startsWith("/My-portfolio/projects/yemak");
  const isGithub = location.pathname.startsWith("/My-portfolio/projects/github");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  let bg = mode ? "#f8fafc" : "#0f172a";
  let text = "#14b8a6";
  let texts = mode ? "#0f172a" : "#f8fafc";
  
  useEffect(() => {
    document.body.style.backgroundColor = bg
  }, [mode])
  useEffect(() => {
    document.body.style.backgroundColor = bg;
  }, []);
  const navItems = {
    en: ["Home", "About", "Projects", "Skills", "Contact"],
    uz: ["Bosh sahifa", "Haqida", "Loyihalar", "Ko'nikmalar", "Bog'lanish"],
    ru: ["Главная", "Обо мне", "Проекты", "Навыки", "Контакты"],
  };

  const introTexts = {
    en: {
      hi: "Hi, I'm ",
      description:
        "I am a front-end developer. I am a passionate Front-end Developer who loves to create clean and modern web experiences. My main focus is on creating responsive, fast and minimalistic web applications. I can turn ideas into interactive and user-friendly websites using React and JavaScript.",
      lightMode: "Light Mode",
      darkMode: "Dark Mode",
    },
    uz: {
      hi: "Salom, men ",
      description:
        "Men front-end dasturchiman. Toza va zamonaviy veb tajribalar yaratishni yaxshi ko‘radigan Front-end dasturchiman. Asosiy e'tiborim javob beruvchi, tez va minimalistik veb ilovalar yaratishga qaratilgan. G‘oyalarni React va JavaScript yordamida interaktiv va foydalanuvchi uchun qulay saytga aylantira olaman.",
      lightMode: "Yorug‘lik rejimi",
      darkMode: "Qorong‘u rejim",
    },
    ru: {
      hi: "Привет, я ",
      description:
        "Я фронтенд-разработчик. Я увлечён созданием чистых и современных веб-приложений. Мой основной фокус — создание адаптивных, быстрых и минималистичных веб-приложений. Я могу превращать идеи в интерактивные и удобные веб-сайты с помощью React и JavaScript.",
      lightMode: "Светлый режим",
      darkMode: "Тёмный режим",
    },
  };

  if (isCarculation || isFilms || isTodo || isYemak || isGithub) {
    return (
      <div className="min-h-screen w-full">
        <Router
          introTexts={introTexts}
          language={language}
          mode={mode}
          texts={texts}
          photo={photo}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundColor: bg,
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      {isCarculation ||
        isGithub ||
        isFilms ||
        isTodo ||
        isYemak || (
          <AnimatePresence>
            {isLoading && (
              <motion.div
                className="fixed top-0 left-0 w-full h-full bg-[#0f172a] flex items-center justify-center z-50"
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                style={{ perspective: 1000 }}
              >
                <motion.h1
                  className="text-3xl sm:text-5xl md:text-7xl text-teal-400 font-bold text-center px-4"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                >
                  Welcome to Ali's Portfolio
                </motion.h1>
              </motion.div>
            )}
          </AnimatePresence>
        )}

      <nav className="max-w-[1280px] mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        <Link to="/My-portfolio/">
          <div
            style={{ color: text }}
            className="font-rubik text-2xl sm:text-3xl cursor-pointer hover:text-teal-400 transition duration-200"
          >
            Ali Xalikov
          </div>
        </Link>

        <ul
          className="hidden min-[1200px]:flex gap-8 lg:gap-12 text-lg"
          style={{ color: texts }}
        >
          {navItems[language].map((item, idx) => (
            <Link
              key={idx}
              to={`/My-portfolio/${navItems["en"][idx].toLowerCase()}`}
            >
              <li className="relative group hover:text-teal-300 transition-all">
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all duration-500 group-hover:w-full"></span>
              </li>
            </Link>
          ))}
        </ul>

        <div className="hidden min-[900px]:flex items-center gap-3 lg:gap-5">
          <button
            onClick={() => setMode(!mode)}
            className="bg-teal-500 hover:bg-teal-600 text-white px-3 py-2 rounded-md shadow-md text-sm sm:text-base whitespace-nowrap"
          >
            {mode
              ? introTexts[language].lightMode
              : introTexts[language].darkMode}
          </button>

          <div className="flex gap-1 sm:gap-2">
            {["en", "uz", "ru"].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 sm:px-3 py-1 rounded-md text-sm font-medium transition ${
                  language === lang
                    ? "bg-teal-400 text-white shadow-md"
                    : "bg-transparent text-teal-400 hover:bg-teal-600 hover:text-white"
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div
          className="min-[900px]:hidden relative w-8 h-6 cursor-pointer"
          onClick={() => setBurger(!burger)}
        >
          <span
            className={`block absolute h-0.5 w-8 bg-teal-400 rounded transition-transform duration-300 ${
              burger ? "rotate-45 top-2.5" : "top-0"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-8 bg-teal-400 rounded transition-opacity duration-300 ${
              burger ? "opacity-0" : "top-2.5"
            }`}
          ></span>
          <span
            className={`block absolute h-0.5 w-8 bg-teal-400 rounded transition-transform duration-300 ${
              burger ? "-rotate-45 top-2.5" : "top-5"
            }`}
          ></span>
        </div>
      </nav>

      <hr className="border-t border-teal-400 mx-auto max-w-[1280px]" />

      <Router
        introTexts={introTexts}
        language={language}
        mode={mode}
        texts={texts}
        photo={photo}
      />

      {burger && (
        <div
          className="fixed top-0 right-0 max-w-[75%] sm:max-w-[60%] h-full border-l border-teal-400 z-50 flex flex-col p-6"
          style={{
            backgroundColor: bg,
          }}
        >
          <button
            onClick={() => setBurger(false)}
            className="self-start text-4xl text-teal-400"
          >
            &times;
          </button>

          <ul className="flex flex-col mt-10 gap-8 text-teal-400 text-left cursor-pointer text-lg">
            {navItems[language].map((item, idx) => (
              <Link
                key={idx}
                to={`/My-portfolio/${navItems["en"][idx].toLowerCase()}`}
                onClick={() => setBurger(false)}
              >
                <li className="relative group">
                  {item}
                  <span className="absolute right-0 -bottom-1 w-0 h-[2px] bg-teal-400 transition-all duration-500 group-hover:w-full"></span>
                </li>
              </Link>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-start gap-5">
            <button
              onClick={() => setMode(!mode)}
              className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md shadow-md transition text-sm"
            >
              {mode
                ? introTexts[language].lightMode
                : introTexts[language].darkMode}
            </button>

            <div className="flex gap-2">
              {["en", "uz", "ru"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                    language === lang
                      ? "bg-teal-400 text-white shadow-md"
                      : "bg-transparent text-teal-400 hover:bg-teal-600 hover:text-white"
                  }`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
