import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import MovieResults from "../components/MovieResults";
import axios from "axios";
import Loading from "../components/Loading";

const Main = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  function onSearch() {
    fetchMovies(searchTerm);
    console.log(searchTerm);
  }

  async function fetchMovies(search) {
    setLoading(true)
    const { data } = await axios.get(
      search
        ? `https://api.themoviedb.org/3/search/movie?api_key=09dc28db888e1d72ae7b845dad32eb2c&query=${search}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=09dc28db888e1d72ae7b845dad32eb2c`
    );
    const filteredMovies = data.results.filter(
      (movie) => movie && movie.title && movie.poster_path
    );
    setMovieList(filteredMovies);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Search
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={onSearch}
      />
      {loading ? 
      <Loading /> : 
      <MovieResults movies={movieList} />}
    </>
  );
};

export default Main;
