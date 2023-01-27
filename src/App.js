import Nav from "./component/nav/Nav"
import { Routes, Route, } from "react-router-dom";
import Hero from "./component/Hero"
import Props from "./component/Props"
import Dropdown from "./component/Dropdown";
import { Spain } from "./component/Dropdown";


function App() {
  return (
    <div className="App ">
      <Nav />

      <Routes>
        <Route path="" element={<Hero />} />
        <Route path="/info" element={<Props />} />
        <Route path="/dropdown" element={<Dropdown />} >
          <Route path="/dropdown/spain" element={<Spain />} />
        </Route>
      </Routes>
    </ div>
  );
}

export default App;
