import { Link } from "react-router-dom";

export default function BackdropCard({ movie }) {
  return (
    <div className="h-[200px] max-w-[360px] bg-cover cursor-pointer relative rounded-md overflow-hidden">
      <Link
        to={`/movies/${encodeURIComponent(
          movie.title || movie.name || movie.original_name
        )}`}
        state={{ movie }}
      >
        <div className="relative flex flex-col">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie.title || movie.name || movie.original_name}
            className="transition-all ease-in hover:scale-105"
            loading="lazy"
          />
          <div className="absolute bottom-0 flex items-center justify-between w-full px-4 py-2 text-sm font-bold bg-black/30">
            {movie.title || movie.name || movie.original_name}
          </div>
        </div>
      </Link>
    </div>
  );
}
