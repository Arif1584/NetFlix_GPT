import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black w-screen">
        <div className="mt-0 md:-mt-64 pl-2 relative z-20 md:pl-5">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
