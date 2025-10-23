"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import MovieCard from "./MovieCard";

interface Movie {
  id: number;
  imageString: string;
  title: string;
  overview: string;
  WatchLists: { id: string }[];
  youtubeString: string;
  age: number;
  duration: number;
  release: number;
}

export default function TrendingSlider({ movies }: { movies: Movie[] }) {
  return (
    <div className="mt-8 relative z-0">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="w-full overflow-visible"
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id} className="!overflow-visible"> 
            <div className="relative h-48 group transition-transform duration-300 ease-in-out">
              <Image
                src={movie.imageString}
                alt={movie.title}
                width={500}
                height={400}
                className="rounded-md absolute w-full h-full object-cover"
              />
              <div
                className="
                  absolute inset-0 
                  transform scale-100 group-hover:scale-110 
                  opacity-0 group-hover:opacity-100 
                  transition-all duration-300 ease-in-out 
                  z-50
                "
              >
                <div
                  className="
                    bg-gradient-to-b from-transparent via-black/60 to-black 
                    w-full h-full rounded-md 
                    flex items-center justify-center 
                    relative border border-gray-700 shadow-lg
                  "
                >
                  <Image
                    src={movie.imageString}
                    alt="Movie"
                    width={800}
                    height={800}
                    className="absolute w-full h-full -z-10 rounded-md object-cover opacity-90"
                  />

                  <MovieCard
                    movieId={movie.id}
                    overview={movie.overview}
                    title={movie.title}
                    watchListId={movie.WatchLists?.[0]?.id}
                    youtubeUrl={movie.youtubeString}
                    watchList={movie.WatchLists.length > 0 ? true : false}
                    age={movie.age}
                    time={movie.duration}
                    year={movie.release}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
