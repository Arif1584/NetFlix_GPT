import React from "react";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";
import useNowPlayingMovies from "../Hook/useNowPlayingMovies";
import usePopularMovies from "../Hook/usePopularMovies";
import useUpcomingMovies from "../Hook/useUpcomingMovies";
import useTopRatedMovies from "../Hook/useTopRatedMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
