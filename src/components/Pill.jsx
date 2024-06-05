export default function Pill({ genre, active, onClick }) {
  return (
    <button
      className={`px-[12px] py-[4px] rounded-3xl border-2 border-red-600 font-semibold text-gray-300 transition-all ease-out ${
        active && "bg-red-600"
      }`}
      onClick={onClick}
    >
      {genre}
    </button>
  );
}
