import Nav from "../components/nav/nav";
import MoviesTab from "../components/moviesTab/MoviesTab";

export default function Movies() {
  return (
    <div className="w-full max-w-[1440px] ">
      <Nav />
      <div className="ml-[80px] md:ml-[112px]">
        <MoviesTab />
      </div>
    </div>
  );
}
