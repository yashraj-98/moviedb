import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";

import { useList } from "../context/ListContext";

export default function PosterCard({ movie }) {
  const { handleAddToList, handleRemoveFromList, isFavorite } = useList();
  const favorite = isFavorite(movie.id);

  function toggleFavorite() {
    if (favorite) {
      handleRemoveFromList(movie);
    } else {
      handleAddToList(movie);
    }
  }

  return (
    <div className="h-[280px] max-w-[200px] bg-cover cursor-pointer relative rounded-md overflow-hidden">
      <Link
        to={`/movies/${encodeURIComponent(
          movie.title || movie.name || movie.original_name
        )}`}
        state={{ movie }}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
          alt={movie.title || movie.name || movie.original_name}
          className="transition-all ease-in hover:scale-105"
          loading="lazy"
        />
      </Link>
      <div className="absolute bottom-0 flex items-center justify-between w-full px-4 py-2 text-sm font-bold text-white bg-black/30">
        {movie.title || movie.name || movie.original_name}
        {favorite ? (
          <Favorite
            className="text-red-600 cursor-pointer"
            onClick={toggleFavorite}
          />
        ) : (
          <FavoriteBorderOutlined
            className="cursor-pointer hover:text-red-600"
            onClick={toggleFavorite}
          />
        )}
      </div>
    </div>
  );
}
