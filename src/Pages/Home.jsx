import { Link } from "react-router";
export default function Home({ introTexts, language, mode, texts, photo }) {
    return (
      <div className="max-w-[1280px] mx-auto px-8 flex justify-between items-center flex-wrap-reverse">
        <div className="text-[#f8fafc] max-[1113px]:mt-20 max-w-[600px]">
          <div className="mt-20">
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#14b8a6] w-[600px]">
              {introTexts[language].hi}
              <span
                className={`relative group cursor-pointer transition-all duration-500 ${
                  mode
                    ? "text-[#0f172a] hover:text-[#14b8a6]"
                    : "text-[#f8fafc] hover:text-[#14b8a6]"
                }`}
              >
                <Link to='/about'>Ali</Link>
                <span className="absolute -left-5 top-0 h-0.5 w-0 bg-teal-400 transition-all duration-500 group-hover:w-[30px]"></span>
                <span className="absolute -left-5 bottom-0 h-0.5 w-0 bg-teal-400 transition-all duration-500 group-hover:w-[30px]"></span>
                <span className="absolute -left-5 top-0 h-0 w-0.5 bg-teal-400 transition-all duration-500 group-hover:h-[30px]"></span>
                <span className="absolute -left-5 top-24 h-0 w-0.5 bg-teal-400 transition-all duration-500 group-hover:h-[30px]"></span>
                <span className="absolute left-24 top-0 h-0.5 w-0 bg-teal-400 transition-all duration-500 group-hover:w-[30px]"></span>
                <span className="absolute -right-5 top-0 h-0 w-0.5 bg-teal-400 transition-all duration-500 group-hover:h-[30px]"></span>
                <span className="absolute -right-5 top-24 h-0 w-0.5 bg-teal-400 transition-all duration-500 group-hover:h-[30px]"></span>
                <span className="absolute left-24 top-31 h-0.5 w-0 bg-teal-400 transition-all duration-500 group-hover:w-[30px]"></span>
              </span>
            </h1>
          </div>

        </div>

        <img
          className="cursor-pointer md:mx-auto max-w-[550px] w-full max-sm:rounded-[100%] mt-20 rounded-[250px] max-h-[600px] h-full opacity-[100%] duration-1000 hover:opacity-50 shadow-2xl shadow-teal-500 hover:shadows hover:bg-teal-500"
          src={photo}
          alt=""
        />
      </div>
    );
}