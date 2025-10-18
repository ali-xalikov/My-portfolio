import { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import Nav from "../components/nav/nav";
import Input from "../components/inputs/Input";
import WordSearch204 from "../components/404Page/404Page";

export default function Bookmark() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    fetch("https://entertainment-web-app-api-67zg.onrender.com/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  let bookmarkedIds = JSON.parse(localStorage.getItem("bookmarkedIds")) || [];

  let bookmarkedMovies = movies?.filter((movie) =>
    bookmarkedIds.includes(movie._id)
  );

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <Nav />
      <div className="ml-[80px] md:ml-[112px] pr-4">
        <h2 className="font-normal text-[32px] text-left text-white mt-8">
          Bookmarkeds
        </h2>
        <div className="flex flex-wrap gap-6 mt-9">
          {bookmarkedMovies && bookmarkedMovies.length > 0 ? (
            bookmarkedMovies.map((movie, index) => (
              <Cards
                key={index}
                img={movie.thumbnail?.regular?.medium}
                width="small"
                title={movie.title}
                year={movie.year}
                category={movie.category}
                rating={movie.rating}
                isBookmarked={true}
                movieId={movie._id}
              />
            ))
          ) : (
            <WordSearch204 />
          )}
        </div>
      </div>
    </div>
  );
}
