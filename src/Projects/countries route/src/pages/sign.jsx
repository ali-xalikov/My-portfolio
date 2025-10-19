import { useRef, useEffect, useState } from "react";
import Input from "../components/inputs/Input";
import Button from "../components/button/button";
import movie from "../../public/assets/icons/Movie.png";
import { useNavigate, Link } from "react-router-dom";

export default function Sign() {
  const fullNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fullNameRef.current.style.borderBottom = "1px solid #5A698F";
    emailRef.current.style.borderBottom = "1px solid #5A698F";
    passwordRef.current.style.borderBottom = "1px solid #5A698F";
  }, []);

  async function handleSignUp() {
    let fullName = fullNameRef.current.value;
    let email = emailRef.current.value;
    let password = passwordRef.current.value;

    let isEmailValid = email.includes("@");
    let isPasswordValid = password.length >= 8;

    fullNameRef.current.style.borderBottom =
      fullName.length > 1 ? "1px solid #5A698F" : "1px solid #FC4747";
    emailRef.current.style.borderBottom = isEmailValid
      ? "1px solid #5A698F"
      : "1px solid #FC4747";
    passwordRef.current.style.borderBottom = isPasswordValid
      ? "1px solid #5A698F"
      : "1px solid #FC4747";

    if (!isEmailValid || !isPasswordValid || fullName.length < 2) {
      setErrorMsg("Iltimos, barcha maydonlarni to‘g‘ri to‘ldiring.");
      return;
    }

    const PostData = {
      full_name: fullName,
      email: email,
      password: password,
    };

      const res = await fetch(
        "https://entertainment-web-app-api-67zg.onrender.com/api/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(PostData),
        }
      );

      const data = await res.json();

      if (data.token) {
        localStorage.setItem("PostToken", data.token);
        navigate('/login')
      } else {
        setErrorMsg(data.message || "Ro‘yxatdan o‘tishda xatolik yuz berdi.");
      }
  }

  return (
    <div>
      <img src={movie} className="w-8 mt-[78px] mx-auto" alt="" />
      <div className="text-white w-full p-8 bg-[#161D2F] text-left mt-20 rounded-[20px] max-w-[400px] mx-auto">
        <h2 className="text-[32px] mb-6">Sign up</h2>

        {errorMsg && <p className="text-[#FC4747] mb-4">{errorMsg}</p>}

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp();
          }}
        >
          <Input placeholder="Full name" type="text" ref={fullNameRef} />
          <Input placeholder="Email" type="email" ref={emailRef} />
          <Input
            placeholder="Password"
            type="password"
            ref={passwordRef}
          />
          <Button text="Create an account" />
        </form>

        <p className="text-center mt-6 text-[15px]">
          Already have an account?{" "}
          <Link
            to="/My-portfolio/projects/films/login"
            className="text-[#FC4747] cursor-pointer hover:text-white duration-500"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
