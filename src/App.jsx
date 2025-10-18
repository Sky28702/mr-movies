import { useEffect, useState } from "react";
import React, { useRef } from "react";
import { getMovies, searchMovies, revenueMovies } from "./api/movies";
import Search from "./components/Search";
import Card from "./components/Card";
import Filter from "./components/Filter";
import { useDebounce } from "react-use";

import { IconPlayerPlayFilled } from "@tabler/icons-react";
import { IconDownload } from "@tabler/icons-react";

import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  let [movieCard, setMovieCard] = useState([]);
  let [page, setPage] = useState(1);
  // let [loading, setLoading] = useState("");
  let [filter, setFilter] = useState("popular");
  let [searchKey, setSearchKey] = useState("");
  let [searchedData, setSearchdData] = useState([]);
  const [debouncedSearchKey, setDebouncedSearchKey] = useState();
  const [heroData, setHeroData] = useState([]);

  const [emoji, setEmoji] = useState("");
  useDebounce(() => setDebouncedSearchKey(searchKey), 1500, [searchKey]);
  // study it ^ from docs later

  function searchValue(value) {
    setSearchKey(value);
  }

  function selectedValue(value) {
    setFilter(value);
    setPage(1);
    setMovieCard([]);
  }

  useEffect(() => {
    // if (searchKey !== "") {
    // searchMovies(setSearchdData, debouncedSearchKey);
    // } else {
    getMovies(page, setMovieCard, filter);
    // }
    revenueMovies(setHeroData);

    if (filter === "popular") {
      setEmoji("🔥"); // fire emoji
    } else if (filter === "upcoming") {
      setEmoji("🎬"); // clapperboard emoji
    } else if (Filter === "top_rated") {
      setEmoji("🌟"); // star emoji
    } else {
      setEmoji("📽️");
    }
  }, [page, filter]);

  useEffect(() => {
    searchMovies(setSearchdData, debouncedSearchKey);
  }, [debouncedSearchKey]);

  function showMore() {
    setPage((prevPage) => prevPage + 1);
  }

  function viewClick() {
    navigate(`/view/${heroData.id}`);
  }

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  // simple functions
  return (
    <main className="text-white flex justify-center flex-col p-2">
      <section className="mt-4 mb-4">
        {/* // ! HERO SECTION  */}
        <div className="w-full relative p-6 rounded-4xl " key={heroData.id}>
          <img
            src={`https://image.tmdb.org/t/p/original/${heroData.backdrop_path}`}
            // src={`https://image.tmdb.org/t/p/w500/${heroData.backdrop_path}`}
            className="absolute inset-0 w-full h-full opacity-70 object-cover rounded-4xl -z-10"
          />
          {/* // ! NOW TRENDING STARTS  */}
          <div className="backdrop-blur-md rounded-2xl py-1  max-w-36  text-center mb-32">
            &#128293;Top of all time &nbsp;
          </div>

          {/* // ! TAGS S PARENTS */}
          <div className="flex flex-row justify-start gap-4 mb-6">
            <div className="backdrop-blur-md  py-1 rounded-2xl   text-center px-2 ">
              Best on Box office
            </div>

            <div className="backdrop-blur-md  rounded-2xl  py-1 px-2 text-center ">
              Top
            </div>
          </div>

          {/* // ! Title of Movie */}
          <div className="text-white text-[36px] font-semibold leading-10 mb-2">
            {heroData.original_title}
          </div>
          {/* // ! Description of Movie */}
          <div className="max-w-100 text-[18px]  text-slate-300 mb-8">
            <p>{heroData.overview}</p>
          </div>

          {/* // ! Buttons to interact */}
          <div className="flex flex-row gap-4">
            <button
              className="flex bg-white text-black text-[16px] rounded-4xl py-4 cursor-pointer px-8 gap-4"
              onClick={viewClick}
            >
              <IconPlayerPlayFilled /> View
            </button>

            <button
              className="text-white border hover:bg-white hover:text-black border-white flex text-[16px] rounded-4xl py-4 px-8 cursor-pointer gap-4 transitionnpm"
              onClick={handleScrollToBottom}
            >
              <IconDownload stroke={2} /> Explore
            </button>
          </div>
        </div>
      </section>
      <div className="flex flex-row items-center gap-2 justify-between">
        <Search click={searchValue} />

        {searchKey === "" ? <Filter click={selectedValue} /> : <div></div>}
      </div>

      {/* for search babes
      <div>
        <h1 className="  text-white mb-4 p-4 font-bold text-3xl capitalize">
          Search Found {searchedData.length}
        </h1>
        <div
          className="grid grid-cols-4 gap-4 mb-6
      "
        >
          {searchedData.map((movie) => (
            <Card
              key={movie.id}
              title={movie.original_title}
              language={movie.original_language}
              image={movie.poster_path}
              rating={movie.vote_average}
              time={movie.release_date.split(`-`)[0]}
            />
          ))}
        </div>
      </div> */}

      {searchKey === "" ? (
        <div>
          <h1 className="  text-white mb-4 p-4 font-bold text-3xl capitalize">
            {filter === "top_rated"
              ? "Top Rated"
              : filter === "now_playing"
              ? "Now Playing"
              : filter}

            {emoji}
          </h1>

          <div
            className="grid  md:grid-cols-4  grid-cols-1 md:gap-4 mb-6  
      "
          >
            {movieCard.map((movie, index) => (
              <Card
                key={`filter-${movie.id}-${index}`}
                id={movie.id}
                title={movie.original_title}
                language={movie.original_language}
                image={movie.poster_path}
                rating={movie.vote_average}
                time={
                  movie.release_date ? movie.release_date.split("-")[0] : "N.A"
                }
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="  text-white mb-4 font-bold text-3xl capitalize">
            Search Found {searchedData.length}
          </h1>
          <div
            className="grid  md:grid-cols-4  grid-cols-1 md:gap-4 mb-6  
      "
          >
            {searchedData.map((movie, index) => (
              <Card
                key={`search-${movie.id}-${index}`}
                id={movie.id}
                title={movie.original_title}
                language={movie.original_language}
                image={movie.poster_path}
                rating={movie.vote_average}
                time={
                  movie.release_date ? movie.release_date.split("-")[0] : "N.A"
                }
              />
            ))}
          </div>
        </div>
      )}

      {searchKey === "" ? (
        <div className=" text-[20px] text-center mb-4">
          <button onClick={showMore} className="cursor-pointer">
            Show More....
          </button>
        </div>
      ) : (
        <div hidden></div>
      )}
    </main>
  );
}

export default App;
