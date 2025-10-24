import MovieCard from "@/app/components/MovieCard";
import { authOptions } from "@/app/utils/auth";
import { prisma } from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string | string[] };
}) {
  const qParam = Array.isArray(searchParams.q)
    ? searchParams.q[0]
    : searchParams.q;
  const query = (qParam || "").trim();

  const session = await getServerSession(authOptions);
  const userEmail = session?.user?.email as string | undefined;

  if (!query) {
    return (
      <div className="px-5 mt-10 text-gray-300">
        Type something to search for movies or shows.
      </div>
    );
  }

  // Broad fetch so DB limits results; we'll filter to "word startsWith" below
  const results = await prisma.movie.findMany({
    where: {
      OR: [
        { title: { contains: query, mode: "insensitive" } },
        { overview: { contains: query, mode: "insensitive" } },
      ],
    },
    select: {
      id: true,
      imageString: true,
      title: true,
      age: true,
      duration: true,
      release: true,
      youtubeString: true,
      overview: true,
      WatchLists: {
        where: {
          userId: userEmail,
        },
      },
    },
  });

  // Keep only items where any word in the title startsWith the query
  const qLower = query.toLowerCase();
  const byWordStart: typeof results = [];
  const seen = new Set<number>();

  for (const m of results) {
    const words = m.title.split(/\s+/);
    const hasWordStart = words.some((w) => w.toLowerCase().startsWith(qLower));
    if (hasWordStart) {
      byWordStart.push(m);
      seen.add(m.id);
    }
  }

  if (byWordStart.length === 0) {
    return (
      <div className="px-5 mt-10 text-gray-300">No results for &quot;{query}&quot;.</div>
    );
  }

  const ordered = byWordStart;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
      {ordered.map((movie) => (
        <div key={movie.id} className="relative h-60">
          <Image
            src={movie.imageString}
            alt={movie.title}
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"
          />
          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
              <Image
                src={movie.imageString}
                alt={movie.title}
                width={800}
                height={800}
                className="absolute w-full h-full -z-10 rounded-lg object-cover"
              />

              <MovieCard
                key={movie.id}
                age={movie.age}
                movieId={movie.id}
                overview={movie.overview}
                time={movie.duration}
                title={movie.title}
                watchListId={movie.WatchLists[0]?.id}
                watchList={movie.WatchLists.length > 0}
                year={movie.release}
                youtubeUrl={movie.youtubeString}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}