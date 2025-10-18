import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import BookmarkIcon from "../../../public/assets/icons/NoMark.png";
import MarkedIcon from "../../../public/assets/icons/Group 27.png";
import MovieIcon from "../../../public/assets/icons/Shape 2.png";
import TvIcon from "../../../public/assets/icons/Shape 3.png";

export default function Cards({
  img,
  title,
  year,
  category,
  rating,
  width,
  movieId,
}) {
  const [isSaved, setIsSaved] = useState(false);
  const [waiting, setWaiting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const raw = localStorage.getItem("bookmarkedIds");
    const ids = raw ? JSON.parse(raw) : [];
    setIsSaved(ids.includes(String(movieId)));
  }, [movieId]);


  const toggleBookmark = async () => {
    const token = localStorage.getItem("PostToken");

    if (!token) {
      alert("Tizimga kirishingiz kerak!");
      navigate("/login");
      return;
    }

    if (waiting) return;
    setWaiting(true);

    try {
      const res = await fetch(
        "https://entertainment-web-app-api-67zg.onrender.com/api/user/add_bookmark",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ movieId }),
        }
      );

      const result = await res.json();

      if (res.ok) {
        const ids = JSON.parse(localStorage.getItem("bookmarkedIds")) || [];
        const id = String(movieId);

        let newList;
        if (isSaved) {
          newList = ids.filter((item) => item !== id);
          setIsSaved(false);
        } else {
          newList = [...ids, id];
          setIsSaved(true);
        }

        localStorage.setItem("bookmarkedIds", JSON.stringify(newList));
      } else {
        alert(result.message || "Xatolik yuz berdi.");
      }
    } finally {
      setWaiting(false);
    }
  };

  const isMovie = category === "Movie";
  const catIcon = isMovie ? MovieIcon : TvIcon;

  const BookmarkButton = (
    <img
      src={isSaved ? MarkedIcon : BookmarkIcon}
      alt="bookmark"
      className={`absolute top-5 right-5 ${
        width === "big" ? "w-8 h-8" : "w-6 h-6"
      } cursor-pointer ${waiting ? "opacity-50" : ""}`}
      onClick={toggleBookmark}
    />
  );

  if (width === "big") {
    return (
      <div
        className="w-[470px] h-[230px] p-6 rounded-[6px] relative bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      >
        {BookmarkButton}
        <div className="absolute bottom-5 text-white">
          <p className="text-xs text-gray-300 flex gap-2 items-center mb-1">
            <span>{year}</span>
            <span>• {category}</span>
            <span>• {rating}</span>
          </p>
          <h3 className="text-sm font-semibold truncate">{title}</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col text-left text-white">
      <div
        className="w-[280px] h-[174px] p-6 rounded-[6px] relative bg-cover"
        style={{ backgroundImage: `url(${img})` }}
      >
        {BookmarkButton}
      </div>
      <div className="mt-2">
        <p className="text-xs text-gray-300 flex items-center">
          <span>{year}</span>
          <span className="flex items-center ml-2">
            •<img src={catIcon} alt="" className="ml-2" /> {category}
          </span>
          <span className="ml-2">• {rating}</span>
        </p>
        <h3 className="text-sm font-semibold truncate">{title}</h3>
      </div>
    </div>
  );
}
