import { prisma } from "../utils/db";
import TrendingSlider from "./TrendingSlider";

async function getData() {
  const data = await prisma.movie.findMany({
    where: {
      category: {
        in: ["trending-movie", "trending-show"],
      },
    },
    select: {
      id: true,
      overview: true,
      title: true,
      WatchLists: true,
      imageString: true,
      youtubeString: true,
      age: true,
      release: true,
      duration: true,
    },
  });
  return data;
}

export default async function Trending() {
  const data = await getData();
  return <TrendingSlider movies={data} />;
}
