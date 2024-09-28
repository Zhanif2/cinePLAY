import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import MovieResults from "../components/MovieResults";
import axios from "axios";
import Loading from "../components/Loading";

const Main = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState('DEFAULT');

  function onSearch() {
    fetchMovies(searchTerm);
  }

  
  function filterMovies(movies, filter) {
    let filteredMovies = [...movies]; 
    if (filter === 'OLD_TO_NEW') {
      filteredMovies.sort((a, b) => b.Year - a.Year); 
    } else if (filter === 'NEW_TO_OLD') {
      filteredMovies.sort((a, b) => a.Year - b.Year); 
    }
    return filteredMovies; 
  }

  async function fetchMovies(search = '') {
    setLoading(true);
    const { data } = await axios.get(
      search
        ? `https://api.themoviedb.org/3/search/movie?api_key=09dc28db888e1d72ae7b845dad32eb2c&query=${search}`
        : `https://api.themoviedb.org/3/movie/popular?api_key=09dc28db888e1d72ae7b845dad32eb2c`
    );
    
    const filteredMovies = data.results.filter(
      (movie) => movie && movie.title && movie.poster_path && movie.release_date
    ).map(movie => ({ ...movie, Year: new Date(movie.release_date).getFullYear() })); 

    const sortedMovies = filterMovies(filteredMovies, filter);
    setMovieList(sortedMovies); 

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
      <div className="filter__header">
        <div className="filters">
          <select
            className="filter"
            id="movieFilter"
            defaultValue='DEFAULT'
            onChange={(event) => {
              setFilter(event.target.value); 
              fetchMovies(searchTerm); 
            }}
          >
            <option className="filter__content" value="DEFAULT" disabled>Sort</option>
            <option className="filter__content" value="OLD_TO_NEW">Oldest</option>
            <option className="filter__content" value="NEW_TO_OLD">Newest</option>
          </select>
        </div>
      </div>
      {loading ? 
        <Loading /> : 
        <MovieResults movies={movieList} />}
    </>
  );
};

export default Main;
