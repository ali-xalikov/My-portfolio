import { Route, Routes } from "react-router-dom"; // to‘g‘ri import
import Restaurants from "../pages/restauransts";
import Header from "../pages/Header";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Rout({ value }) {
  const [mess, setMess] = useState("");

  return (
    <div>
      <Link to='/projects'>
        <span className="absolute cursor-pointer right-5 top-5 text-5xl">
          &times;
        </span>
      </Link>
      <Routes>
        <Route path="/" element={<Header value={value} setMess={setMess} />} />
        <Route path="page/:userId" element={<Restaurants mess={mess} />} />
        <Route path="*" element={<Header value={value} setMess={setMess} />} />
      </Routes>
    </div>
  );
}
