import { useState } from "react";
import Pill from "./Pill";
import GenreCards from "./GenreCards";

const genres = ["Action", "Horror", "Documentary", "Comedy"];

export default function GenreSelector() {
  const [activeGenre, setActiveGenre] = useState("Action");

  function handleClick(genre) {
    setActiveGenre(genre);
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-4 text-white">
      <h1 className="text-xl font-bold md:text-2xl">
        Find your favorite genre
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {genres.map((genre, id) => (
          <Pill
            key={id}
            genre={genre}
            onClick={() => handleClick(genre)}
            active={activeGenre === genre}
          />
        ))}
      </div>
      <GenreCards genre={activeGenre} />
    </div>
  );
}
