import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import MovieVideo from "../components/MovieVideo";
import RecentlyAdded from "../components/RecentlyAdded";
import Trending from "../components/Trending";
export default async function HomePage() {
  const session = await getServerSession(authOptions);
  console.log(session?.user?.name);
  return (
    <>
      <div className="p-5 lg:p-0">
        <MovieVideo />
        <h2 className="text-3xl font-bold mt-3">Trending</h2>
      </div>
      <Trending/>
      <h2 className="text-3xl font-bold mt-5">Recently Added</h2>
      <RecentlyAdded />
    </>
  );
}
