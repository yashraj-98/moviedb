import { useNavigate } from "react-router-dom";

export default function Page404() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-extrabold text-red-600 md:text-5xl">
        OOPS! Nothing to show here
      </h1>
      <button
        onClick={() => navigate(-1)}
        className="px-2 py-2 text-xl font-bold text-gray-400 border-2 border-red-600 md:text-3xl md:px-4 rounded-xl hover:border-white"
      >
        Go back
      </button>
    </div>
  );
}
