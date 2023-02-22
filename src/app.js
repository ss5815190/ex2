import Homee from "./pages/Homee";
import About from "./pages/About";
import Explore from "./pages/Explore";
import Collection from "./pages/Collection";
import ProductPage from "./pages/ProductPage";
import ScrollToTop from "./pages/ScrollToTop.js";
import { HashRouter,BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" exact element={<Homee />} />
        <Route path="/About" element={<About />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Collection" element={<Collection />} />
        <Route path="/Collection/:id" element={<ProductPage />} />
      </Routes>
    </HashRouter>
  );
};
export default App;
