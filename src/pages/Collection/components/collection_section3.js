import "../style/collection_section3.css";
import { Link } from "react-router-dom";
//import {useRef,useEffect} from'react';

const CollectionSection3 = ({ lookData }) => {
  const look=lookData.filter(el=>el.id<9)
  return (
    <div className="collection_section3">
      <div className="c3_wrap">
        <h1 className="c3_title">Look</h1>
        <div className="c3_products">
          {
          
            look.map((el) => (

            <div className="c3_grid" key={el.id}>
              <Link to={`/Collection/${el.id}`}>
                <div
                  className="c3_grid_img"
                  style={{ backgroundImage: `url(${el.img})`}}
                >
                  <div className="details">+ Details</div>
                </div>
                <div className="c3_text">{el.productNumber}</div>
              </Link>
            </div>
          ))

          }
        
        </div>
      </div>
    </div>
  );
};
export default CollectionSection3;
