import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
const Home = () => {
  return (
    <div className="home">
      <Nav/>
      <Landing/>
      <Footer/>
    </div>
  );
};

export default Home;
