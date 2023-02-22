import "../style/collection_section2.css";
import { Link } from "react-router-dom";
const CollectionSection2 = ({ lookData }) => {
  return (
    <div>
      <div className="collection_section2">
        <div className="collection_section2_wrap">
          <div className="collection_section2_img">
            <img
              className="collection_section2_img_1"
              src="./imgs/about-1-1.jpg.webp"
              alt=""
              
            />
          </div>
          <Link to={`/Collection/${lookData[8].id}`}>
            <div className="collection_section2_img">
              <div
                style={{ backgroundImage: `url(${lookData[8].img})`}}
                className="collection_section2_img_2"
              >
                <div className="details">+ Details</div>
              </div>
              <div className="collection_section2_img_2_txt">
                <p>{lookData[8].productNumber}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Link to={`/Collection/${lookData[9].id}`}>
        <div
          style={{ backgroundImage: `url(${lookData[9].img})` }}
          className="collection_banner"
        >
          <div className="details">+ Details</div>
        </div>
        <div className="collection_banner_txt">
          <p>{lookData[9].productNumber}</p>
        </div>
      </Link>
    </div>
  );
};
export default CollectionSection2;
