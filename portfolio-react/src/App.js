import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Home from "./Routes/Home";
import TGB from "./Routes/TGB";
import HIM from "./Routes/HIM";
import About from "./Routes/About";

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
        <Route path="/Games/TGB" element={<TGB />} />
        <Route path="/Games/HIM" element={<HIM />} />
      </Routes>
    </Router>
  );
}

export default App;
