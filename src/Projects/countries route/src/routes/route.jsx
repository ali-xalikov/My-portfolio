import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Link,
} from "react-router-dom";
import { useEffect } from "react";
import Login from "../pages/Login";
import Sign from "../pages/sign";
import Movies from "../pages/Movies";
import Movie from "../pages/movie";
import Tv from "../pages/tv";
import Bookmark from "../pages/bookmark";

export default function Router() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("PostToken");

  useEffect(() => {
    document.body.style.backgroundColor = "#10141E";

   if (!token && location.pathname !== "/My-portfolio/projects/films/login") {
     navigate("/My-portfolio/projects/films/login", { replace: true });
   }

   if (token && location.pathname === "/My-portfolio/projects/films/login") {
     navigate("/My-portfolio/projects/films/", { replace: true });
   }
   if (!token && location.pathname.endsWith("/login") === false) {
     navigate("login", { replace: true });
   }

   if (token && location.pathname.endsWith("/login")) {
     navigate("/", { replace: true });
   }
  }, [token, location.pathname, navigate]);

  return (
    <div>
      <Link to="/My-portfolio/projects">
        <span className="text-white text-5xl absolute top-5 right-5 cursor-pointer">
          &times;
        </span>
      </Link>

      <Routes>
       <Route path="/My-portfolio/projects/films/login" element={<Login />} />
       <Route path="/My-portfolio/projects/films/sign" element={<Sign />} />
       <Route path="/My-portfolio/projects/films/" element={<Movies />} />
       <Route path="/My-portfolio/projects/films/all" element={<Movies />} />
       <Route path="/My-portfolio/projects/films/home" element={<Movies />} />
       <Route path="/My-portfolio/projects/films/movie" element={<Movie />} />
       <Route path="/My-portfolio/projects/films/tv" element={<Tv />} />
       <Route path="/My-portfolio/projects/films/bookmark" element={<Bookmark />} />
       <Route path="login" element={<Login />} />
       <Route path="sign" element={<Sign />} />
       <Route index element={<Movies />} />
       <Route path="all" element={<Movies />} />
       <Route path="home" element={<Movies />} />
       <Route path="movie" element={<Movie />} />
       <Route path="tv" element={<Tv />} />
       <Route path="bookmark" element={<Bookmark />} />
      </Routes>
    </div>
  );
}

