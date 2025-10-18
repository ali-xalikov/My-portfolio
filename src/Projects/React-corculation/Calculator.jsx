import { useState } from "react";
import { Link } from "react-router";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("theme1");

  const buttons = [
    ["7", "8", "9", "DEL"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "-"],
    [".", "0", "/", "x"],
  ];

  const calculateResult = (value) => {
    if (value === "" || /[+\-x/]$/.test(value)) return "Error";
    try {
      const expression = value.replace(/x/g, "*");
      const result = eval(expression);
      return result;
    } catch {
      return "Error";
    }
  };

  const handleClick = (val) => {
    if (val === "DEL") setInput((p) => p.slice(0, -1));
    else if (val === "RESET") setInput("");
    else if (val === "=") setInput(String(calculateResult(input)));
    else setInput((p) => p + val);
  };

  const themeClasses = {
    theme1: {
      bg: "bg-[#3A4663]",
      screen: "bg-[#181F33]",
      keypad: "bg-[#242D44]",
      del: "bg-[#647198] text-white",
      reset: "bg-[#647198] text-white",
      equal: "bg-[#D03F2F] text-white",
      btn: "bg-[#EAE3DC] text-[#434A59]",
    },
    theme2: {
      bg: "bg-[#96f952]",
      screen: "bg-[#88a773]",
      keypad: "bg-[#88a773]",
      del: "bg-[#beff91] text-black",
      reset: "bg-[#beff91] text-black",
      equal: "bg-[#45672e] text-white",
      btn: "bg-[#dfffcb] text-[#434A59]",
    },
    theme3: {
      bg: "bg-[#fe5858]",
      screen: "bg-[#e5a991]",
      keypad: "bg-[#e5a48b]",
      del: "bg-[#c37050] text-white",
      reset: "bg-[#c37050] text-white",
      equal: "bg-[#e16464] text-white",
      btn: "bg-[#f5d0c7] text-[#434A59]",
    },
  };

  const current = themeClasses[theme];

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${current.bg} transition-all duration-300`}
    >
      <Link to='/projects'>
        <span className="absolute right-5 top-5 text-5xl text-white">
          &times;
        </span>
      </Link>
      <header className="w-[340px] sm:w-[540px] text-white">
        <div className="flex justify-between items-center mb-5">
          <h3 className="text-2xl font-bold">calc</h3>
        </div>

        <div
          className={`rounded-lg h-28 flex items-center justify-end px-6 mb-6 ${current.screen}`}
        >
          <h4 className="text-white text-5xl font-bold truncate">
            {input || "0"}
          </h4>
        </div>

        <div className={`p-6 rounded-lg ${current.keypad}`}>
          {buttons.map((row, i) => (
            <div key={i} className="flex gap-5 mb-5 justify-center">
              {row.map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleClick(btn)}
                  className={`w-[70px] h-[60px] sm:w-[100px] sm:h-[64px] rounded-lg font-bold text-2xl sm:text-3xl ${current.btn}`}
                >
                  {btn}
                </button>
              ))}
            </div>
          ))}
          <div className="flex gap-5 justify-center">
            <button
              onClick={() => handleClick("RESET")}
              className={`w-[160px] sm:w-[227px] h-[64px] rounded-lg font-bold text-lg ${current.reset}`}
            >
              RESET
            </button>
            <button
              onClick={() => handleClick("=")}
              className={`w-[160px] sm:w-[227px] h-[64px] rounded-lg font-bold text-lg ${current.equal}`}
            >
              =
            </button>
          </div>
        </div>
      </header>

      <div className="flex gap-4 mt-10">
        <div
          className="w-5 h-5 rounded-full bg-[#fe5858] cursor-pointer"
          onClick={() => setTheme("theme3")}
        ></div>
        <div
          className="w-5 h-5 rounded-full bg-[#96f952] cursor-pointer"
          onClick={() => setTheme("theme2")}
        ></div>
        <div
          className="w-5 h-5 rounded-full bg-[#3A4663] cursor-pointer"
          onClick={() => setTheme("theme1")}
        ></div>
      </div>
    </div>
  );
}
