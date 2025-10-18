import { useState } from "react";
import sun from "../public/assets/icons/sun.svg";
import moon from "../public/assets/icons/moon.svg";
import { Link } from "react-router";

import pin from "../public/assets/icons/pin.png";
import url from "../public/assets/icons/url.png";
import twitter from "../public/assets/icons/twitter.png";
import office_building from "../public/assets/icons/office-building.png";
import user from "../public/assets/images/user.png";
import search from "../public/assets/icons/search.png";

function App() {
  const [count, setCount] = useState(null);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState(true);

  let bgColor = mode ? "#141D2F" : "#F6F8FF";
  let cardColor = mode ? "#1E2A47" : "#FEFEFE";
  let textColor = mode ? "white" : "black";
  let boxShadow = !mode ? "0px 16px 30px -10px rgba(70, 96, 187, 0.2)" : "none";
  let modes = mode ? sun : moon;

  let users = count ? (
    <div
      className="flex flex-col p-12 mt-6 rounded-2xl max-w-[730px] max-sm:w-[573px] "
      style={{ backgroundColor: cardColor, color: textColor, boxShadow }}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            className="w-[117px] h-[117px] rounded-[50%]"
            src={count.avatar_url}
            alt=""
          />
          <div className="ml-9">
            <h3 className="font-bold text-[26px]">{count.login}</h3>
            <p className="font-normal text-[16px] text-[#0079FF]">
              @{count.login}
            </p>
            <p className="text-[15px] font-normal text-gray-400 mt-5">
              {count.bio}
            </p>
          </div>
        </div>
        <h4 className="text-[15px] font-normal text-gray-400 mt-2">
          {count.created_at
            ? new Date(count.created_at).toDateString()
            : "Joined 25 Jan 2011"}
        </h4>
      </div>

      <div className="flex items-center">
        <div className="w-40"></div>
        <div>
          <div
            className="px-8 py-4 w-120 rounded-[10px] flex items-center mt-8"
            style={{ backgroundColor: mode ? "#141D2F" : "#F0F0F0" }}
          >
            <div>
              <p className="font-normal text-[13px] text-gray-400">Repos</p>
              <h3 className="font-bold text-[22px] mt-1">
                {count.public_repos}
              </h3>
            </div>
            <div className="ml-[99px]">
              <p className="font-normal text-[13px] text-gray-400">Followers</p>
              <h3 className="font-bold text-[22px] mt-1">{count.followers}</h3>
            </div>
            <div className="ml-[82px]">
              <p className="font-normal text-[13px] text-gray-400">Following</p>
              <h3 className="font-bold text-[22px] mt-1">{count.following}</h3>
            </div>
          </div>

          <ul className="list-none flex flex-wrap w-[440px] mt-9">
            <li className="flex items-center gap-[19px]">
              <img src={pin} alt="" />
              {count.location || "Not Available"}
            </li>
            <li className="flex items-center gap-[19px] ml-10">
              <img src={twitter} alt="" />
              {count.twitter_username || "Not Available twitter"}
            </li>
            <li className="flex items-center gap-[19px] mt-[19px]">
              <img src={url} alt="" />
              {count.blog || "Not Available"}
            </li>
            <li className="flex items-center gap-[19px] mt-[19px] ml-[85px]">
              <img src={office_building} alt="" /> @github
            </li>
          </ul>
        </div>
      </div>
    </div>
  ) : (
    <div
      className="flex flex-col p-12 mt-6 rounded-2xl max-w-[730px] max-sm:w-[573px] "
      style={{ backgroundColor: cardColor, color: textColor, boxShadow }}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            className="w-[117px] h-[117px] rounded-[50%]"
            src={user}
            alt=""
          />
          <div className="ml-9">
            <h3 className="font-bold text-[26px]">The Octocat</h3>
            <p className="font-normal text-[16px] text-[#0079FF]">@octocat</p>
            <p className="text-[15px] font-normal text-gray-400 mt-5">
              This profile has no bio
            </p>
          </div>
        </div>
        <h4 className="text-[15px] font-normal text-gray-400 mt-2">
          Joined 25 Jan 2011
        </h4>
      </div>

      <div className="flex items-center">
        <div className="w-40"></div>
        <div>
          <div
            className="px-8 py-4 w-120 rounded-[10px] flex items-center mt-8"
            style={{ backgroundColor: mode ? "#141D2F" : "#F0F0F0" }}
          >
            <div>
              <p className="font-normal text-[13px] text-gray-400">Repos</p>
              <h3 className="font-bold text-[22px] mt-1">8</h3>
            </div>
            <div className="ml-[99px]">
              <p className="font-normal text-[13px] text-gray-400">Followers</p>
              <h3 className="font-bold text-[22px] mt-1">3938</h3>
            </div>
            <div className="ml-[82px]">
              <p className="font-normal text-[13px] text-gray-400">Following</p>
              <h3 className="font-bold text-[22px] mt-1">9</h3>
            </div>
          </div>

          <ul className="list-none flex flex-wrap w-[440px] mt-9">
            <li className="flex items-center gap-[19px]">
              <img src={pin} alt="" />
              San Francisco
            </li>
            <li className="flex items-center gap-[19px] ml-10">
              <img src={twitter} alt="" />
              Not Available
            </li>
            <li className="flex items-center gap-[19px] mt-[19px]">
              <img src={url} alt="" />
              https://github.blog
            </li>
            <li className="flex items-center gap-[19px] mt-[19px] ml-[85px]">
              <img src={office_building} alt="" /> @github
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  function mess(e) {
    e.preventDefault();
    fetch(`https://api.github.com/search/users?q=${input}`)
      .then((res) => res.json())
      .then((count) => {
        if (count.items && count.items.length > 0) {
          const firstUser = count.items[0];
          fetch(`https://api.github.com/users/${firstUser.login}`)
            .then((res) => res.json())
            .then((fullUser) => {
              localStorage.setItem("User", JSON.stringify(fullUser));
              setCount(fullUser);
            });
        }
      });
  }

  return (
    <div
      className="w-full h-[100vh] flex justify-center items-center font-[space-mono]"
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      <Link to='/projects'>
        <span className="absolute right-5 top-5 text-5xl">&times;</span>
      </Link>
      <div>
        <div className="max-w-[730px] max-sm:max-w-[573px] flex items-center justify-between">
          <h3 className="font-bold text-[26px]">devfinder</h3>
          <div
            className="flex items-center gap-4 cursor-pointer"
            onClick={() => setMode(!mode)}
          >
            <h3 className="font-bold text-[13px]">{mode ? "LIGHT" : "DARK"}</h3>
            <img src={modes} alt="" />
          </div>
        </div>

        <form
          onSubmit={mess}
          className="mt-9 rounded-2xl flex items-center justify-between pr-2.5 max-w-[730px] max-sm:max-w-[573px] "
          style={{ backgroundColor: cardColor, boxShadow }}
        >
          <div className="gap-6 flex items-center pl-8 py-6">
            <img src={search} alt="" />
            <input
              type="text"
              placeholder="Search GitHub username…"
              onChange={(e) => setInput(e.target.value)}
              className="outline-0 max-w-[500px] max-sm:max-w-[254px] max-sm:w-[327px] placeholder:font-normal placeholder:text-[18px] placeholder:leading-[25px]"
              style={{ color: textColor, backgroundColor: "transparent" }}
            />
          </div>
          <button className="font-bold text-[16px] text-white py-[13.5px] px-6 bg-[#0079FF] rounded-[10px]">
            Search
          </button>
        </form>

        {users}
      </div>
    </div>
  );
}

export default App;
