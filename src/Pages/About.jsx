import { Link } from "react-router";

export default function About({ language, mode, texts, aboutTexts, photo }) {
  return (
    <div className="max-w-[1280px] mx-auto px-8 flex justify-between items-center flex-wrap mt-10">
      <div className="max-w-[600px] text-[#f8fafc]">
        <h2
          className={`text-5xl md:text-7xl font-bold mb-6 ${
            mode ? "text-[#0f172a]" : "text-[#14b8a6]"
          }`}
        >
          {aboutTexts[language].title}
        </h2>

        <p
          className="text-base md:text-lg leading-relaxed opacity-90 mb-8"
          style={{ color: texts }}
        >
          {aboutTexts[language].description}
        </p>

        <div className="flex gap-5 items-center">
          <a
            href="https://github.com/ali-xalikov"
            target="_blank"
            className={`px-6 py-3 rounded-full border ${
              mode
                ? "border-[#0f172a] text-[#0f172a]"
                : "border-teal-400 text-[#f8fafc]"
            } hover:bg-teal-500 hover:text-white transition-all duration-300`}
          >
            GitHub
          </a>
        </div>
      </div>

      <img
        className="cursor-pointer md:mx-auto max-w-[550px] w-full max-sm:rounded-[100%] mt-10 rounded-[250px] max-h-[600px] h-full opacity-[100%] duration-1000 hover:opacity-50 shadow-2xl shadow-teal-500 hover:shadows hover:bg-teal-500"
        src={photo}
        alt="About me"
      />
    </div>
  );
}
