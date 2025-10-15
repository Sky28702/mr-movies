import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
async function getMovies(page, setMovieCard, filter) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${filter}?api_key=${API_KEY}&language=en-US&page=${page}`
    );

    setMovieCard((prevMovies) => [...prevMovies, ...res.data.results]);
  } catch (error) {
    console.error(error);
  }
}

async function searchMovies(setSearchedData, searchKey) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${searchKey}&api_key=${API_KEY}`
    );

    setSearchedData(() => [...res.data.results]);
  } catch (error) {
    console.error(error);
  }
}

async function revenueMovies(setHeroData) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=revenue.desc&page=1`
    );
    const result = [...res.data.results].slice(0, 4); // it will silce it down to upto 4
    const random = Math.floor(Math.random() * 4); // it will random a number from 1 to 4 and gonna sotre it in const random
    const randomData = result[random]; // const randomData will take array as value, with [random] as index
    setHeroData(randomData);
  } catch (error) {
    console.error(error);
  }
}

async function getMovieDetails(id, setMovieDetails) {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    setMovieDetails(res.data);
  } catch (error) {
    console.error(error);
  }
}

export { getMovies, searchMovies, revenueMovies, getMovieDetails };
