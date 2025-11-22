import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
async function getMovies(page, setMovieCard, filter) {
  try {
    if (filter === "favourite") {
      console.log(`just a dummy`);
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${filter}?api_key=${API_KEY}&language=en-US&page=${page}`
      );

      setMovieCard((prevMovies) => [...prevMovies, ...res.data.results]);
    }
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
// fi
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

async function signUp(data, setRegisterSuccess, setSuccessState) {
  const res = await axios.post(`http://localhost:8000/signup`, data);
  setRegisterSuccess(res.data.message);
  setSuccessState(res.data.success);
}

async function login(data, setError, setErrorMessage) {
  const res = await axios.post(`http://localhost:8000/signin`, data);
  setError(res.data.success);
  setErrorMessage(res.data.message);
  return res;
}

async function fav(data, setIsClick) {
  const res = await axios.post(`http://localhost:8000/modfav`, data);

  setIsClick(res.data.click);
}

async function statusLike(data, setIsClick) {
  const res = await axios.post(`http://localhost:8000/statusLike`, data);

  setIsClick(res.data.click);
}

async function favMovie(data) {
  const res = await axios.post(`http://localhost:8000/readFavMovies`, data);
  return res;
}

async function viewCount(data) {
  const res = await axios.post(`http://localhost:8000/viewCount`, data);
  return res;
}

export {
  getMovies,
  searchMovies,
  revenueMovies,
  getMovieDetails,
  signUp,
  login,
  fav,
  statusLike,
  favMovie,
  viewCount,
};
