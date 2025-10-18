import { useState, useEffect } from "react";
import Bitmap from "../../public/assets/images/Bitmap.jpg";
import Bitmap1 from "../../public/assets/images/Bitmap1.jpg";

import moon from "../../public/assets/icons/moon.svg";
import sun from "../../public/assets/icons/sun.png";

import check from "../../public/assets/icons/Check.png";
import check_dark from "../../public/assets/icons/Check dark.png";

import no from "../../public/assets/icons/no-check.png";
import Li from "./li/li";

function App() {
  const [todos, setTodos] = useState([]);
  const [mode, setMode] = useState(true);
  const [ul, setUl] = useState("All");

  function creteToDo(e) {
    e.preventDefault();
    const value = e.target.new.value.trim();
    if (!value) return;

    const newTodoItem = {
      value: value,
      check: false,
    };

    e.target.new.value = "";
    setTodos((prev) => [...prev, newTodoItem]);

    localStorage.setItem('Todos', JSON.stringify([...todos, newTodoItem ]))
  }
  const bg = mode ? "#FAFAFA" : "#171823";
  const bgInp = mode ? "#FFFFFF" : "#25273D";

  const bgi = mode
    ? Bitmap
    : Bitmap1;

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    const storedTodos = localStorage.getItem("Todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);


  function CheckToDo(index) {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, check: !todo.check } : todo
    );
    setTodos(updatedTodos);
  }
  

  function clearCompleted() {
    const activeTodos = todos.filter((todo) => !todo.check);
    setTodos(activeTodos);
  }

  return (
    <div
      className="min-h-screen transition-all duration-700 ease-in-out"
      style={{
        backgroundColor: bg,
      }}
    >
      <nav
        className="bg-no-repeat bg-[length:100%_300px] py-12 px-6 transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${bgi})`,
        }}
      >
        <div className="max-w-[540px] w-full mx-auto transition-all duration-700 ease-in-out">
          <div className="flex items-center justify-between text-white mb-10">
            <h1 className="text-3xl font-bold tracking-[10px]">TODO</h1>
            <img
              onClick={() => setMode(!mode)}
              src={mode ? moon : sun}
              alt="theme"
              className="w-6 h-6 cursor-pointer transition-transform duration-500 ease-in-out hover:rotate-360"
            />
          </div>

          <form
            onSubmit={creteToDo}
            className="flex items-center gap-6 shadow-[0_35px_50px_-15px_rgba(194,195,214,0.5)] rounded-[5px] h-[54px] px-5 transition-all duration-700 ease-in-out"
            style={{
              backgroundColor: bgInp,
            }}
          >
            <button type="submit">
              <img
                src={mode ? no : check_dark}
                alt="check-toggle"
                className="cursor-pointer w-5 h-5"
              />
            </button>
            <input
              name="new"
              type="text"
              placeholder="Create a new todo…"
              className="w-full outline-none border-none bg-transparent text-[#9495A5] text-[18px] font-[400] font-[Josefin Sans] placeholder-[#9495A5]"
            />
          </form>

          <div
            className="mt-6 rounded-[5px] p-5 transition-all duration-700 ease-in-out"
            style={{
              backgroundColor: bgInp,
              boxShadow: `0px 35px 50px -15px #${
                mode ? "C2C3D680" : "00000080"
              }`,
            }}
          >
            <div className="flex items-center gap-6 mb-5">
              <img
                src={mode ? check : check_dark}
                alt="check"
                className="w-5 h-5"
              />
              <p className="text-[#D1D2DA] line-through">
                Complete online JavaScript course
              </p>
            </div>

            <hr className="border-t border-[#E3E4F1] mb-3" />

            {ul === "All" ? (
              <ul className="flex flex-col items-center w-full">
                {(localStorage.getItem('Todos') ? JSON.parse(localStorage.getItem('Todos')) : todos).map((todo, index) => (
                  <Li
                    todos={todos}
                    setTodos={setTodos}
                    key={index}
                    text={todo.value}
                    check={todo.check}
                    onToggle={() => CheckToDo(index)}
                    index={index}
                    mode={mode}
                  />
                ))}
              </ul>
            ) : ul === "Active" ? (
              <ul className="flex flex-col items-center w-full">
                {todos
                  .filter((todo) => !todo.check)
                  .map((todo, index) => (
                    <Li
                      todos={todos}
                      setTodos={setTodos}
                      key={index}
                      text={todo.value}
                      check={todo.check}
                      onToggle={() => CheckToDo(index)}
                      index={index}
                      mode={mode}
                    />
                  ))}
              </ul>
            ) : (
              <ul className="flex flex-col items-center w-full">
                {todos
                  .filter((todo) => todo.check)
                  .map((todo, index) => (
                    <Li
                      todos={todos}
                      setTodos={setTodos}
                      key={index}
                      text={todo.value}
                      check={todo.check}
                      onToggle={() => CheckToDo(index)}
                      index={index}
                      mode={mode}
                    />
                  ))}
              </ul>
            )}

            <div className="flex items-center justify-between mt-5 text-[#9495A5] text-[14px]">
              <p>
                {ul === "All"
                  ? todos.length
                  : ul === "Active"
                  ? todos.filter((t) => !t.check).length
                  : todos.filter((t) => t.check).length}{" "}
                items left
              </p>
              <ul className="flex items-center gap-5">
                <li
                  className="cursor-pointer"
                  onClick={() => setUl("All")}
                  style={{
                    color: ul === "All" ? "#3A7CFD" : "#494C6B",
                  }}
                >
                  All
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => setUl("Active")}
                  style={{
                    color: ul === "Active" ? "#3A7CFD" : "#494C6B",
                  }}
                >
                  Active
                </li>
                <li
                  className="cursor-pointer"
                  onClick={() => setUl("Completed")}
                  style={{
                    color: ul === "Completed" ? "#3A7CFD" : "#494C6B",
                  }}
                >
                  Completed
                </li>
              </ul>
              <p
                onClick={clearCompleted}
                className="cursor-pointer hover:text-[#494C6B]"
              >
                Clear Completed
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );

}

export default App;
