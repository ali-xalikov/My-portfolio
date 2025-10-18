import { useState, useEffect } from "react";
import Input from "../input/input";
import Trending from "../trending/trending";
import Cards from "../Cards/Cards";

export default function MoviesTab() {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://entertainment-web-app-api-67zg.onrender.com/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const trendingMovies = movies.filter((movie) => movie.isTrending);
  const recommended = movies.filter((movie) => !movie.isTrending);

  const matchedMovies = recommended.filter((movie) =>
    movie.title.toLowerCase().includes(input.trim().toLowerCase())
  );

  return (
    <div className="ml-[80px] md:ml-[112px] px-4 md:px-10 py-6 space-y-8 max-w-[1440px] mx-auto">
      <Input setText={setInput} />
      {!input && <Trending movie={trendingMovies} />}
      

      <h2 className="text-white font-normal text-2xl md:text-3xl">
        Recommended for you
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {(input.trim() ? matchedMovies : recommended).map((movie) => (
          <Cards
            key={movie._id}
            img={movie.thumbnail?.regular?.medium}
            width="small"
            title={movie.title}
            year={movie.year}
            category={movie.category}
            rating={movie.rating}
            isBookmarked={movie.isBookmarked}
            movieId={movie._id}
          />
        ))}

        {input.trim() && matchedMovies.length === 0 && (
          <p className="text-white col-span-4">No matching movie found.</p>
        )}
      </div>
    </div>
  );
}
