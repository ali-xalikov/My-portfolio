import { useRef, useEffect } from "react";
import Input from "../components/inputs/Input";
import Button from "../components/button/button";
import movie from "../../public/assets/icons/Movie.png";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const inputRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current.style.borderBottom = "1px solid #5A698F";
    passwordRef.current.style.borderBottom = "1px solid #5A698F";
    localStorage.clear();
  }, []);

  async function testing() {
    let email = inputRef.current.value;
    let password = passwordRef.current.value;

    let PostData = { email, password };
    let emailValid = email.includes("@");
    let passwordValid = password.length > 7;

    inputRef.current.style.borderBottom = emailValid
      ? "1px solid #5A698F"
      : "1px solid #FC4747";
    passwordRef.current.style.borderBottom = passwordValid
      ? "1px solid #5A698F"
      : "1px solid #FC4747";

    if (!emailValid || !passwordValid) return;

    let res = await fetch(
      "https://entertainment-web-app-api-67zg.onrender.com/api/user/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(PostData),
      }
    );

    let data = await res.json();

    if (data.token) {
      localStorage.setItem("PostToken", data.token);
      navigate("/My-portfolio/projects/films/home");
    }
  }

  return (
    <div className="bg-[#10141E]">
      <img src={movie} className="w-8 mt-[78px] mx-auto" alt="" />
      <div className="text-white w-full p-8 bg-[#161D2F] text-left mt-20 rounded-[20px] max-w-[400px] mx-auto">
        <h2 className="text-[32px] mb-6">Login</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            testing();
          }}
        >
          <Input placeholder="Email" type="email" ref={inputRef} />
          <Input placeholder="Password" type="password" ref={passwordRef} />
          <Button text="Login to your account" />
        </form>
        <p className="text-center mt-6 text-[15px]">
          Don’t have an account?{" "}
          <Link
            to="/My-portfolio/projects/films/sign"
            className="text-[#FC4747] cursor-pointer hover:text-white duration-500"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
