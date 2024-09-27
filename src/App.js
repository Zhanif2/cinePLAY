import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import MovieInfo from "./pages/MovieInfo";
import React from "react";

function App() {
  const location = useLocation();

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
            <Route path="/main" element={<Main />} />
            <Route path="/movie/:id" element={<MovieInfo />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  );
}

export default App;
