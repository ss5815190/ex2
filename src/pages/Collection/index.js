import Nav from "../../components/nav.js";
import Footer from "../Homee/components/footer.js";
import CollectionSection1 from "./components/collection_section1.js";
import CollectionSection2 from "./components/collection_section2.js";
import CollectionSection3 from "./components/collection_section3.js";

//import { irData } from "../../components/data/irregularData.js";
import { lookData } from "../../components/data/lookData.js";
const Collection = () => {
  return (
    <div>
      <Nav />
      <CollectionSection1 />
      <CollectionSection2 lookData={lookData} />
      <CollectionSection3 lookData={lookData} />
      <Footer />
    </div>
  );
};
export default Collection;
