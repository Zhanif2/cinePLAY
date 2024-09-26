import Nav from "./components/Nav"
import Home from "./pages/Home";
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
  <div className="App">
    <Nav/>
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/main" element= {<Main/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
