import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Games from "./Routes/Games";

const RedirectComponent = () => {
  const navigate = useNavigate();
  navigate("/");
  React.useEffect(() => {
    // 'https://새도메인.com' 부분을 새 도메인으로 변경해주세요
    navigate("https://scom.com", { replace: true });
  }, [navigate]);
  return null;
};

function App() {
  console.log("render");
  return (
    <Router>
      <Routes>
        <Route path="*" element={<RedirectComponent />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Games" element={<Games />} />
      </Routes>
    </Router>
  );
}

export default App;
