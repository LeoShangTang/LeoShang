import bg2 from "./assets/media/BG2.jpg";
import HomePage from "./pages/home/HomePage";
import CSProject from "./pages/cs-project/CsProject";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  // bg-white bg-opacity-85
  return (
    <Router>
      <div className="flex flex-col relative items-center justify-center">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:name" element={<CSProject />} />
        </Routes>
        <div className="fixed inset-0 z-[-1] bg-cover bg-center bg-white bg-opacity-75" />
        <div
          className="fixed inset-0 z-[-2] bg-cover bg-center opacity-95"
          style={{ backgroundImage: `url(${bg2})` }}
        />
      </div>
    </Router>
  );
};

export default App;
