import Home from "./pages/Home";
import Search from "./pages/Search";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
  <div className="App">
    <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/search" element= {<Search/>}/>
    </Routes>
    </div>
  );
}

export default App;
