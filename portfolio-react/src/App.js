import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Games from "./Routes/Games";

function App() {
  console.log("render");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Games" element={<Games />} />
      </Routes>
    </Router>
  );
}

export default App;
