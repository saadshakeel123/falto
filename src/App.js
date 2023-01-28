import Nav from "./component/nav/Nav"
import { Routes, Route, } from "react-router-dom";
import Hero from "./component/Hero"
import Props from "./component/Props"
import Switzerland from "./component/Switzerland";
import Spain from "./component/Spain";
import Italy from "./component/Italy"
import Countries from "./component/Countries";


function App() {
  return (
    <div className="App ">
      <Nav />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/info" element={<Props />} />
        <Route path="/countries" element={<Countries />} >
          <Route path="switzerland" element={<Switzerland />} />
          <Route path="spain" element={<Spain />} />
          <Route path="italy" element={<Italy />} />
        </Route>
      </Routes>
    </ div>
  );
}

export default App;
