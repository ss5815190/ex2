import "../style/item.css";


const Item = () => {
  return (
    <div className="itemmob">
      <div className="item">
        <div className="item_slogon">
          <h2>
            For your
            <br />
            ESSENTIAL
            <br />
            STYLE
          </h2>
        </div>
        <div className="img_h2mob">
          <div className="img_h2">
            <img src="./imgs/h2.jpg.webp" alt="h2" loading="lazy"/>
          </div>
        </div>
        <div className="item_contain">
          <h3>一身白</h3>
          <div className="c1">
            好白 找不到形容詞了。 好白 找不到形容詞了。 好白 找不到形容詞了。
            好白 找不到形容詞了。
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
