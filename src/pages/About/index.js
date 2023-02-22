import Nav from "../../components/nav.js";
import About_section1 from "./components/about_section1.js";
import About_section2 from "./components/about_section2.js";
import About_banner from "./components/about_banner.js";
import About_section3 from "./components/about_section3.js";
import Footer from "../Homee/components/footer.js";
const About = () => {
  return (
    <div>
      <Nav />
      <About_section1 />
      <About_section2 />
      <About_banner />
      <About_section3 />
      <Footer />
    </div>
  );
};
export default About;
