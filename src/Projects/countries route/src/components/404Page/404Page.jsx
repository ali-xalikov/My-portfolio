
import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";

const LETTERS = [
  "k",
  "v",
  "n",
  "z",
  "i",
  "x",
  "m",
  "e",
  "t",
  "a",
  "x",
  "l",
  { className: "one", value: "2" },
  { className: "two", value: "0" },
  { className: "three", value: "4" },
  "y",
  "y",
  "w",
  "v",
  "b",
  "o",
  "q",
  "d",
  "y",
  "p",
  "a",
  "v",
  "j",
  "a",
  "s",
  "c",
  "e",
  "w",
  "v",
  "x",
  "e",
  "p",
  "c",
  "f",
  "h",
  "q",
  "e",
  "s",
  "w",
  "q",
  "v",
  "o",
  "s",
  "m",
  "v",
  "f",
  "u",
  "z",
  "i",
  { className: "four", value: "n" },
  { className: "five", value: "o" },
  "x",
  "m",
  "e",
  "t",
  "a",
  "x",
  "l",
  "q",
  "e",
  "s",
  "w",
  "q",
  "v",
  "o",
  "s",
  "m",
  "v",
  "f",
  "u",
  "z",
  "i",
  "x",
  "m",
  "e",
  "t",
  "a",
  "x",
  "l",
  "z",
  "x",
  "x",
  "l",
  "e",
  "a",
  "n",
  "x",
  { className: "six", value: "c" },
  { className: "seven", value: "o" },
  { className: "eight", value: "n" },
  { className: "nine", value: "t" },
  { className: "ten", value: "e" },
  { className: "eleven", value: "n" },
  { className: "twelve", value: "t" },
  "m",
];

const WordSearch404 = () => {
  const ref = useRef({});

  useEffect(() => {
    const classSequence = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
    ];
    classSequence.forEach((cls, i) => {
      setTimeout(() => {
        const el = ref.current[cls];
        if (el)
          el.classList.add("bg-emerald-500", "text-white", "font-semibold");
      }, 1500 + i * 500);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-radial from-[#335B67] to-[#2C3E50] flex items-center justify-center px-4">
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8">
        <ul
          className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-1 w-full md:w-1/2"
          style={{ fontFamily: "Source Sans Pro, sans-serif" }}
        >
          {LETTERS.map((item, index) => {
            const value = typeof item === "string" ? item : item.value;
            const className = typeof item === "string" ? "" : item.className;
            return (
              <li
                key={index}
                ref={(el) => {
                  if (className) ref.current[className] = el;
                }}
                className={`w-full aspect-square text-center text-white/70 uppercase text-[1.6vw] sm:text-xl font-light bg-black/20 flex items-center justify-center transition-all duration-700 ${className}`}
              >
                {value}
              </li>
            );
          })}
        </ul>

        <div className="md:w-1/2 text-white space-y-6 text-base font-light">
          <h1 className="text-3xl sm:text-5xl font-normal leading-tight">
            We couldn't find what you were looking for.
          </h1>
          <p>
            Unfortunately the page you were looking for could not be found. It
            may be temporarily unavailable, moved or no longer exist.
          </p>
          <p>
            Check the URL you entered for any mistakes and try again.
            Alternatively, search for whatever is missing or take a look around
            the rest of our site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WordSearch404;
