import Nav from "./component/nav/Nav"
import { Routes, Route, } from "react-router-dom";
import Hero from "./component/Hero"
import Card from "./component/Card"
import Props from "./component/Props"



function App() {
  return (
    <div className="App ">
      <Nav />

      <Routes>
        <Route path="" element={<Hero />} />
          <Route path="/info" element={<Props/>} />
      </Routes>
    </ div>
  );
}

export default App;
