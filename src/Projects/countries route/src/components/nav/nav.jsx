import Movie from "../../../public/assets/icons/Movie.png";
import Shape from "../../../public/assets/icons/Shape.png";
import Shape1 from "../../../public/assets/icons/Shape1.png";
import Tv from "../../../public/assets/icons/Tv.png";
import Bookmark from "../../../public/assets/icons/Marked.png";
import Oval from "../../../public/assets/icons/Oval.png";
import { Link } from "react-router";

export default function Nav() {
  return (
    <nav className="fixed left-0 md:left-4 top-4 bg-[#161D2F] w-[80px] h-[100vh] rounded-2xl py-6 flex flex-col items-center z-50">
      <img src={Movie} alt="Movie" className="w-6 h-6" />

      <div className="flex flex-col items-center gap-6 mt-18">
        <Link to="/projects/films/home">
          <img src={Shape} alt="Home" className="w-5 h-5" />
        </Link>
        <Link to="/projects/films/movie">
          <img src={Shape1} alt="Movie" className="w-5 h-5" />
        </Link>
        <Link to="/projects/films/tv">
          <img src={Tv} alt="TV" className="w-5 h-5" />
        </Link>
        <Link to="/projects/films/bookmark">
          <img src={Bookmark} alt="Bookmark" className="w-5 h-5" />
        </Link>
      </div>

      <img
        src={Oval}
        alt="Avatar"
        className="w-8 h-8 rounded-full mb-2 mt-[70vh]"
      />
    </nav>
  );
}
