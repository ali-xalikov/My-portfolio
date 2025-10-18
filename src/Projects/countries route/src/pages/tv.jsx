import { useState, useEffect } from "react";
import Nav from "../components/nav/nav";
import Input from "../components/input/input";
import Cards from "../components/Cards/Cards";
import Trending from "../components/trending/trending";

export default function Tv() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://entertainment-web-app-api-67zg.onrender.com/api/movies")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMovies(data);
        } else {
          console.error("API noto‘g‘ri ma'lumot qaytardi:", data);
          setMovies([]);
        }
      })
  }, []);

  function isBookmarked(id) {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    return bookmarks.includes(id);
  }

  const tvSeries = movies.filter((movie) => movie.category === "TV Series");
  const trendingTV = tvSeries.filter((movie) => movie.isTrending);

  const matchedTV = tvSeries.filter((movie) =>
    movie.title?.toLowerCase().includes(input.trim().toLowerCase())
  );

  return (
    <div className="w-full max-w-[1440px]">
      <Nav />
      <div className="ml-[80px] md:ml-[112px] px-4 md:px-10 py-6 space-y-8 max-w-[1440px] mx-auto">
        <Input placeholder="Search for TV series" setText={setInput} />
        {!input && <Trending movie={trendingTV} />}
        <h2 className="font-normal text-[32px] text-left text-white mt-8">
          TV Series
        </h2>
        <div className="flex flex-wrap gap-6 w-[1440px] mt-9">
          {(input.trim() ? matchedTV : tvSeries).map((movie, index) => (
            <Cards
              key={index}
              img={movie?.thumbnail?.regular?.small || ""}
              width="small"
              title={movie.title || "Unknown Title"}
              year={movie.year || "N/A"}
              category={movie.category || "N/A"}
              rating={movie.rating || "N/A"}
              isBookmarked={isBookmarked(movie._id)}
              movieId={movie._id}
            />
          ))}

          {input.trim() && matchedTV.length === 0 && (
            <p className="text-white text-xl">No matching TV series found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
