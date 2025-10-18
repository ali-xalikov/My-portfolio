
export default function Input({placeholder, ref , type = 'text'}) {
  return (
    <input
      ref={ref}
      placeholder={placeholder}
      type={type}
      className="p-4 mt-4 w-84 outline-0 border-0 caret-[#FC4747] text-white"
      autoComplete="current-password"
    />
  );
};
