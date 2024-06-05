const genre = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  10749: "Romance",
  878: "Sci-Fi",
  53: "Thriller",
  27: "Horror",
  36: "History",
  10402: "Music",
  9648: "Mystery",
  10752: "War",
  37: "Western",
  10759: "Action and Adventure",
  10765: "Sci-Fi and Fantasy",
};

function getGenreNames(genreIds) {
  return genreIds.map((id) => genre[id]);
}

function getGenreId(genreName) {
  for (const id in genre) {
    if (genre[id] === genreName) {
      return id;
    }
  }
  return null;
}

export { getGenreNames, getGenreId };
