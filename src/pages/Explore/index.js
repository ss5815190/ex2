import Nav from "../../components/nav.js";
import ExploreSection1 from "./components/Explore_section1.js";
import ExploreSection2 from "./components/Explore_section2.js";
import ExploreBanner from "./components/Explore_banner.js";
import Footer from "../Homee/components/footer.js";
const Explore = () => {
  return (
    <div>
      <Nav />
      <ExploreSection1 />
      <ExploreBanner />
      <ExploreSection2 />
      <Footer />
    </div>
  );
};
export default Explore;
