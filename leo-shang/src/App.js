import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import bg2 from "./assets/media/BG2.jpg";
import Loading from "./global-components/Loading";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const CSProject = lazy(() => import("./pages/cs-project/CsProject"));

const App = () => {
  return (
    <Router>
      <div className="flex flex-col relative items-center justify-center">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:name" element={<CSProject />} />
          </Routes>
        </Suspense>
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
