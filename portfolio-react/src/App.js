import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import TGB from "./Routes/TGB";
import HIM from "./Routes/HIM";

function App() {
  console.log("render");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Games/TGB" element={<TGB />} />
        <Route path="/Games/HIM" element={<HIM />} />
      </Routes>
    </Router>
  );
}

export default App;
