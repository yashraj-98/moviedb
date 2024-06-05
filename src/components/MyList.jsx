import { useList } from "../context/ListContext";
import Card from "./PosterCard";

export default function MyList() {
  const { list } = useList();
  return (
    <>
      <h1 className="text-xl font-bold text-white md:text-3xl">My List</h1>
      <div className="flex gap-4 overflow-x-scroll overflow-y-hidden text-white">
        {list.map((movie) => (
          <div key={movie.id} className="md:min-w-[200px] min-w-[160px]">
            <Card movie={movie} />
          </div>
        ))}
      </div>
    </>
  );
}
