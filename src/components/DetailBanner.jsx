import {
  Add,
  HorizontalRule,
  KeyboardDoubleArrowDown,
  PlayArrow,
} from "@mui/icons-material";
import { useList } from "../context/ListContext";
import GenrePill from "./GenrePill";

export default function DetailBanner({ movie, handleClick }) {
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
    <div
      className="relative h-[900px] bg-center bg-cover"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
        <div className="absolute -mt-24 text-white top-1/2 md:left-24 left-12">
          <h1 className="md:text-6xl text-3xl max-w-[48rem] font-bold mb-4">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <GenrePill id={movie.genre_ids} />
          <p className="max-w-sm mt-4 text-xs md:max-w-2xl md:text-base">
            {movie.overview}
          </p>
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex items-center gap-4">
              <button
                className="w-8 h-8 bg-red-600 rounded-full md:w-12 md:h-12 drop-shadow-lg"
                onClick={handleClick}
              >
                <PlayArrow
                  fontSize={window.innerWidth < 768 ? "small" : "large"}
                />
              </button>
              <span className="text-lg font-semibold md:text-xl">
                Watch trailer
              </span>
            </div>
            <div className="flex items-center gap-4">
              {!favorite ? (
                <>
                  <button
                    className="w-8 h-8 text-center text-black transition-all ease-in-out bg-white rounded-full md:w-12 md:h-12 drop-shadow-lg"
                    onClick={toggleFavorite}
                  >
                    <Add
                      fontSize={window.innerWidth < 768 ? "small" : "large"}
                    />
                  </button>
                  <span className="text-lg font-semibold md:text-xl">
                    Add to List
                  </span>
                </>
              ) : (
                <>
                  <button
                    className="w-8 h-8 text-center text-white transition-all ease-in-out bg-gray-600 rounded-full md:w-12 md:h-12 drop-shadow-lg"
                    onClick={toggleFavorite}
                  >
                    <HorizontalRule
                      fontSize={window.innerWidth < 768 ? "small" : "large"}
                    />
                  </button>
                  <span className="text-lg font-semibold md:text-xl">
                    Remove From List
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
