export default function Button({text, test}) {
    return (
      <button
        onClick={test}
        className="cursor-pointer w-84 h-12 text-center items-center justify-center bg-[#FC4747] mt-10 rounded-[6px] duration-500 hover:bg-white hover:text-black"
      >
        {text}
      </button>
    );
}