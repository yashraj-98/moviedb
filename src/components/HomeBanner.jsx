import useAxios from "../hooks/useAxios";
import requests from "../consts/requests";
import { useEffect, useState } from "react";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import { useList } from "../context/ListContext";
import GenrePill from "./GenrePill";
import { Link } from "react-router-dom";
import Loader from "./Loader";

export default function HomeBanner() {
  const { list, handleAddToList, handleRemoveFromList, isFavorite } = useList();
  const [movie, setMovie] = useState([]);

  const { response } = useAxios(requests.fetchTrending);
  useEffect(() => {
    if (response) {
      const randomMovieIndex = response
        ? Math.floor(Math.random() * response.results.length - 1)
        : null;
      const randomMovie = response.results[randomMovieIndex];
      setMovie(randomMovie);
    }
  }, [response, list]);

  const favorite = isFavorite(movie?.id);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function toggleFavorite() {
    if (favorite) {
      handleRemoveFromList(movie);
    } else {
      handleAddToList(movie);
    }
  }

  if (!movie) {
    return <Loader />;
  }

  return (
    <>
      <header
        className="bg-cover relative bg-center h-[600px]"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
          <div className="absolute bottom-[8rem] md:left-12 left-8 text-white">
            <h1 className="md:text-5xl text-2xl md:max-w-[24rem] max-w-[48rem] font-bold mb-4">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            {movie && movie?.genre_ids && <GenrePill id={movie?.genre_ids} />}
            <p className="max-w-md mt-4 mb-4 text-xs text-gray-300 md:text-sm">
              {truncate(movie?.overview, 150)}
            </p>
            <div className="flex items-center gap-4">
              <Link
                to={`/movies/${encodeURIComponent(
                  movie?.title || movie?.name || movie?.original_name
                )}`}
                state={{ movie }}
                className="px-2 py-2 text-sm font-bold transition-all ease-in border-2 border-red-600 shadow-lg md:text-base md:px-4 rounded-3xl hover:bg-red-600"
              >
                Watch now
              </Link>
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
        </div>
      </header>
    </>
  );
}
