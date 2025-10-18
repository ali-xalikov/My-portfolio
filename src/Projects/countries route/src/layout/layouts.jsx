import Nav from "../components/nav/nav";
import MoviesTab from "../components/moviesTab/MoviesTab";

export default function Layouts() {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex">
      <Nav />
      <div className="flex-1 ml-[80px] md:ml-[112px]">
        <MoviesTab />
      </div>
    </div>
  );
}
