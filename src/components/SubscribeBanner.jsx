import banner from "../assets/banner.png";
export default function SubscribeBanner() {
  return (
    <div className="relative justify-center hidden px-4 mt-16 bg-cover  md:flex">
      <div className="relative h-72 lg:w-[60%] lg:h-96">
        <img
          src={banner}
          alt="banner"
          className="w-full h-full rounded-lg filter brightness-50"
        />
        <div className="absolute flex flex-col gap-4 text-white right-8 top-1/2">
          <h1 className="text-2xl font-semibold ">Explore more with Premium</h1>
          <div className="flex items-center justify-around text">
            <button className="px-4 py-2 font-bold transition-all ease-in bg-red-600 border-2 border-red-600 shadow-lg rounded-3xl hover:bg-transparent">
              Subscribe now
            </button>
            <span className="font-medium text-red-300">Only ₹199/month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
