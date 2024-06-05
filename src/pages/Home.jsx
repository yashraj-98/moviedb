import Banner from "../components/HomeBanner";
import Cards from "../components/Cards";
import GenreSelector from "../components/GenreSelector";
import MyList from "../components/MyList";
import SubscribeBanner from "../components/SubscribeBanner";
import requests from "../consts/requests";
import { useList } from "../context/ListContext";

export default function Home() {
  const { list } = useList();
  return (
    <div className="flex flex-col gap-8">
      <Banner />
      <main className="flex flex-col gap-8 px-8">
        {list.length && <MyList />}
        <Cards url={requests.fetchTopRated} title="Top Rated" />
        <Cards url={requests.fetchTrending} title="Trending" />
        <SubscribeBanner />
        <GenreSelector />
      </main>
    </div>
  );
}
