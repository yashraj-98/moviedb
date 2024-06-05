import { createContext, useContext, useState } from "react";

const ListContext = createContext();

function ListProvider({ children }) {
  const [list, setList] = useState(() => {
    const storedMovies = localStorage.getItem("list");
    return storedMovies ? JSON.parse(storedMovies) : [];
  });

  function handleAddToList(movie) {
    const updatedList = [...list, movie];
    setList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  }

  function handleRemoveFromList(movie) {
    const updatedList = list.filter((item) => item.id !== movie.id);
    setList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));
  }

  function isFavorite(movieId) {
    return list.some((item) => item.id === movieId);
  }

  return (
    <ListContext.Provider
      value={{ list, handleAddToList, handleRemoveFromList, isFavorite }}
    >
      {children}
    </ListContext.Provider>
  );
}

function useList() {
  const context = useContext(ListContext);
  if (context === undefined)
    throw new Error("ListContext was used outside ListProvider");
  return context;
}

export { ListProvider, useList };
