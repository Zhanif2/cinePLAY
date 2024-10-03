import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import MovieInfo from "./pages/MovieInfo";
import React, { useEffect, useRef, useState } from "react";
import Favourites from "./pages/Favourites";

function App() {
  const location = useLocation();
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (movie) => {
    if (!favourites.some(favMovie => favMovie.id === movie.id)) {
      setFavourites(prevFavourites => [...prevFavourites, movie]);
    }
  };

  useEffect(() => {
    console.log("Updated favourites:", favourites);
  }, [favourites]);

  return (
    <>
      <Nav />
      <TransitionGroup>
        <CSSTransition
          key={location.key} 
          classNames="fade"
          timeout={300}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/main" element={<Main addToFavourites={addToFavourites} favourites={favourites} />} />
            <Route path="/movie-info/:id" element={<MovieInfo addToFavourites={addToFavourites} favourites={favourites} />} />
            <Route path="/favourites" element={<Favourites favourites={favourites} />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}

export default App;
