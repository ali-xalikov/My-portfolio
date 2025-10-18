import Cards from "../Cards/Cards";

export default function Trending({ movie }) {
  const trendingMovies = movie?.filter((item) => item.isTrending);

  return (
    <div className="text-white text-left">
      <h2 className="mb-4 text-2xl font-normal mt-8">Trending</h2>

      <div className="flex overflow-x-hidden gap-6 w-[1200px]">
        {trendingMovies?.map((item, index) => (
          <div key={index}>
            <Cards
              img={item.thumbnail.regular.large}
              width="big"
              title={item.title}
              year={item.year}
              category={item.category}
              rating={item.rating}
              isBookmarked={item.isBookmarked}
              movieId={item._id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
