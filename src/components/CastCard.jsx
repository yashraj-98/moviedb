import blank from "../assets/blank-profile.jpg";
export default function CastCard({ celeb }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="overflow-hidden bg-cover w-[120px] h-[160px] md:h-[300px] sm:h-[200px] md:w-[240px] sm:w-[160px] rounded-2xl">
        {celeb.profile_path ? (
          <img
            src={`https://image.tmdb.org/t/p/original/${celeb?.profile_path}`}
            alt={celeb.name}
          />
        ) : (
          <img src={blank} alt={celeb.name} />
        )}
      </div>
      <div>
        <h3 className="text-center md:text-xl">{celeb.name}</h3>
        <h5 className="text-center text-gray-400 md:text-lg">
          {celeb.character}
        </h5>
      </div>
    </div>
  );
}
