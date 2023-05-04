//import ScrollToTop from "../ScrollToTop.js";<ScrollToTop />
import Nav from "../../components/nav.js";
import Home from "./components/home.js";
import Item from "./components/item.js";
import Banner from "./components/banner.js";
import Overlap from "./components/overlap.js";
import Footer from "./components/footer.js";
import Cssdisplay from "../../components/cssdisplay.js";

const Homee = () => {
  Cssdisplay('img')
  return (
    <div>
      
      <Nav />
      <Home />
      <Item />
      <Banner />
      <Overlap />
      <Footer />
    </div>
  );
};
export default Homee;
