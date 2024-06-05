import { useNavigate, useParams } from "react-router-dom";
import { getGenreId } from "../consts/genre";
import useAxios from "../hooks/useAxios";
import requests from "../consts/requests";
import { useEffect, useState } from "react";
import BackdropCard from "../components/BackdropCard";
import Loader from "../components/Loader";
import Page404 from "./Page404";

export default function MoviesByGenre() {
  const [movies, setMovies] = useState([]);
  const { genre } = useParams();
  const genreId = getGenreId(genre);
  const navigate = useNavigate();

  const { response: resPage1, loading: load1 } = useAxios(
    `${requests.fetchGenre(genreId)}&page=1`
  );
  const { response: resPage2, loading: load2 } = useAxios(
    `${requests.fetchGenre(genreId)}&page=2`
  );

  useEffect(() => {
    if (resPage1 && resPage2) {
      const totalMovies = [...resPage1.results, ...resPage2.results];
      setMovies(totalMovies);
    }
  }, [resPage1, resPage2]);

  return (
    <>
      {load1 && load2 ? (
        <div className="flex items-center justify-center h-screen">
          <Loader />
        </div>
      ) : !movies.length ? (
        <Page404 />
      ) : (
        <div className="flex flex-col h-full gap-12 p-20">
          <h1 className="text-2xl font-bold tracking-wide text-white md:text-4xl">
            Trending {genre} movies
          </h1>
          <div className="grid grid-cols-1 gap-8 text-white sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3">
            {movies.map((movie) => (
              <BackdropCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
