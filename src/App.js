import Nav from "./component/Nav"
import { Routes, Route, } from "react-router-dom";
import Hero from "./component/Hero"
import Card from "./component/Card"



function App() {
  return (
    <div className="App ">
      <Nav />

      <Routes>
        <Route path="" element={<Hero />} />
          <Route path="/info" element={<Card/>} />
      </Routes>
    </ div>
  );
}

export default App;
