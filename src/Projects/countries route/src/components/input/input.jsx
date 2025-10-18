import Icon from "../../../public/assets/icons/IconSearch.png";

export default function Input({
  placeholder = "Search for movies or TV series",
  setText
}) {
  return (
    <div className="flex gap-4 items-center">
      <img src={Icon} alt="search icon" />
      <input
        type="text"
        className="bg-transparent border-none outline-none text-white placeholder-gray-400 w-full"
        placeholder={placeholder}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
