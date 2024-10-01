import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import MovieInfo from "./pages/MovieInfo";
import React, { useRef } from "react";
import Favourites from "./pages/Favourites";

function App() {
  const location = useLocation();

  const homeRef = useRef(null);
  const mainRef = useRef(null);
  const movieInfoRef = useRef(null);
  const favouritesRef = useRef(null);

  return (
    <>
      <Nav />
      <TransitionGroup component={null}> 
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={300}
          nodeRef={
            location.pathname === "/" ? homeRef :
            location.pathname === "/main" ? mainRef :
            location.pathname.startsWith("/movie-info") ? movieInfoRef : 
            favouritesRef
          } 
        >
          <div
            ref={
              location.pathname === "/" ? homeRef :
              location.pathname === "/main" ? mainRef :
              location.pathname.startsWith("/movie-info") ? movieInfoRef : 
              favouritesRef
            }
            className="transition-container"
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/main" element={<Main />} />
              <Route path="/movie-info/:id" element={<MovieInfo />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}

export default App;
