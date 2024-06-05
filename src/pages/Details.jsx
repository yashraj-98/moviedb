import { useLocation } from "react-router-dom";
import DetailBanner from "../components/DetailBanner";
import Cast from "../components/Cast";
import { useEffect, useState } from "react";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import { Close } from "@mui/icons-material";
import Cards from "../components/Cards";
import requests from "../consts/requests";

export default function MovieDetails() {
  const [trailerUrl, setTrailerUrl] = useState("");
  const location = useLocation();
  const { movie } = location.state;

  const opts = {
    height: window.innerWidth < 768 ? "100%" : "600",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  async function fetchUrl() {
    try {
      const url = await movieTrailer(
        movie?.title || movie?.name || movie?.original_name || ""
      );
      const urlParams = new URLSearchParams(new URL(url).search);
      setTrailerUrl(urlParams.get("v"));
    } catch (err) {
      console.error(err);
    }
  }

  function handleClick() {
    if (movie) {
      if (trailerUrl) {
        setTrailerUrl("");
        enableScroll();
      } else {
        fetchUrl();
        disableScroll();
      }
    }
  }

  useEffect(() => {
    return () => {
      enableScroll();
    };
  }, []);

  function disableScroll() {
    window.scrollTo({ top: 0, behavior: "smooth" });

    setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 500);
  }

  function enableScroll() {
    document.body.style.overflow = "auto";
  }

  return (
    <div className="relative flex flex-col h-full text-white bg-black">
      <DetailBanner movie={movie} handleClick={handleClick} />
      {trailerUrl && (
        <div
          className="absolute flex items-center justify-center w-screen h-screen transition-all ease-in-out bg-black/50"
          onClick={handleClick}
        >
          <button
            className="absolute w-12 h-12 rounded-full bg-red-600/60 top-10 drop-shadow-lg"
            onClick={handleClick}
          >
            <Close fontSize="large" />
          </button>
          <YouTube videoId={trailerUrl} opts={opts} className="w-[50%]" />
        </div>
      )}
      <main className="flex flex-col gap-4 px-16 mb-8">
        <Cast movie={movie} />
        <Cards url={requests.fetchTrending} title="More Trending movies" />
      </main>
    </div>
  );
}
