import "../style/product_detail.css";
import { useParams } from "react-router-dom";
// import {lookData} from"../../../components/data/lookData.js";
// import {productCatalog} from"../../../components/data/productCatalog.js";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ProductDetail = ({ lookData, productCatalog }) => {
  let params = useParams();
  const displayNumber = []; //需要顯示的商品編號
  const displayCatalog = []; //畫面上顯示資訊,最後map的陣列
  const history = useNavigate(); //等於v5 useHistory 
  //可以將useNavigate帶入-1的方式，當使用者點擊的時候就能回上一頁
  
  function foundproduct(e) {
    //console.log(e)
    const number = e.split("\n"); 
    for (let i = 0; i < number.length; i++) {
      //找編號
      let a = number[i].split(" ");
      displayNumber.push(a[a.length - 1]); //取最後dom-xxxx push到display
    }
    //console.log(displayNumber);//印出需要取得的商品編號

    for (let k = 0; k < displayNumber.length; k++) {
      //找編號對應資料
      for (let j = 0; j < productCatalog.length; j++) {
        if (displayNumber[k] === productCatalog[j].productNumber) {
          // console.log(productCatalog[j].productNumber);
          displayCatalog.push(productCatalog[j]);
          //console.log(displayCatalog); //debug 印出要顯示資訊
        }
      }
    }
  }

  return (
    <div className="product" >
      <div
        className="product_img"
        style={{ backgroundImage: `url(${lookData[params.id - 1].img})` }}
      ></div>
      <div className="product_shoop">
        <div className="product_information">
          {foundproduct(lookData[params.id - 1].productNumber)}
          {displayCatalog.map((el) => (
            <div className="ifwrap" key={el.id}>
              <div className="pnumber">
                <h4>{el.productNumber}</h4>
              </div>
              <div className="pname">{el.name}</div>
              <div className="pdetail">{el.introduction}</div>
              <a href={el.link}>online store</a>
            </div>
          ))}
        </div>
        <div className="close_icon">
          <div
            onClick={() => history(-1)}
            className="close_wrap"
            to={`/Collection`}
          >
            <div className="o">Close</div>
            <div className="ui_toggle">
              <div className="close">
                <div className="c close_a"></div>
                <div className="c close_b"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetail;
