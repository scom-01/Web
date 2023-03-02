import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";

function App() {
  console.log("render");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
