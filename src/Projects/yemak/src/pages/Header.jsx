import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Header({ value, setMess }) {
  const [rest, setRest] = useState(null);

  useEffect(() => {
    axios.get("https://yemak.uz/api/user/restaurant").then((res) => {
      setRest(res.data.data.restaurants);
    });
  }, []);

  const searched = rest?.filter((item) =>
    item.name.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
      <header className="w-[1080px] mx-auto mt-[45px] ">
        <h3 className="font-bold text-[32px]">Restoranlar</h3>
        <div className="flex flex-wrap gap-6 mt-10">
          {searched?.length > 0
            ? searched.map((item, ind) => (
                <Link key={ind} to={`/My-portfolio/projects/yemak/page/${item.id}`}>
                  <div
                    className="w-[344px] transition-all duration-500 rounded-2xl cursor-pointer hover:scale-105"
                    onClick={() => setMess(item)}
                  >
                    <img
                      src={item.image}
                      className="w-full rounded-2xl"
                      alt=""
                    />
                    <p className="mt-3 ml-4">{item.name}</p>
                  </div>
                </Link>
              ))
            : // Skeleton loader
              Array(20)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="w-[344px] rounded-2xl overflow-hidden animate-pulse"
                  >
                    <div className="h-[200px] bg-gray-300 rounded-2xl"></div>
                    <div className="mt-3 ml-4 h-5 w-2/3 bg-gray-300 rounded"></div>
                  </div>
                ))}
        </div>
      </header>
    </>
  );
}
