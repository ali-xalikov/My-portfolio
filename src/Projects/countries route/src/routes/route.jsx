import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "../pages/Login";
import Sign from "../pages/sign";
import Movies from "../pages/Movies";
import Movie from "../pages/movie";
import Tv from "../pages/tv";
import Bookmark from "../pages/bookmark";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function AppRoutes() {
  let navigate = useNavigate()
  const token = localStorage.getItem("PostToken");
  useEffect(() => {
    if (!token) {
      navigate('/projects/films/login')
    } else {
      navigate("/projects/films/home");
    }
    document.body.style.backgroundColor = "#10141E";

  }, [token])
  

  return (
    <div>
      <Link to='/projects'>
        <span className="text-white text-5xl absolute top-5 right-5 cursor-pointer">
          &times;
        </span>
      </Link>
      <Routes>
        <Route path="/all" element={<Movies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/home" element={<Movies />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </div>
  );
}
