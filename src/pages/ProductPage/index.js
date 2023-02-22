import ProductDetail from "./commponents/product_detail.js";
import { lookData } from "../../components/data/lookData.js";
import { productCatalog } from "../../components/data/productCatalog.js";
const ProductPage = () => {
  return (
    <div>
      <ProductDetail lookData={lookData} productCatalog={productCatalog} />
    </div>
  );
};
export default ProductPage;
