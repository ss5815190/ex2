import "../style/overlap.css";

const Overlap = () => {
  return (
    <div className="item2">
      <div className="overlap">
        <img className="imgh4-1" src="./imgs/h4-1.jpg.webp" alt="h4-1" loading="lazy"/>
        <img className="imgh4-2" src="./imgs/h4-2.jpg.webp" alt="h4-2" loading="lazy"/>
        <img className="imgh4-3" src="./imgs/h4-3.jpg.webp" alt="h4-3" loading="lazy"/>
      </div>
      <div className="overlap_contain">
        <div>
          <h2>Collection</h2>
          <p>2022</p>
          <div className="introduce">
            忙しく過ごす仕事の場に、お気に入りの服を選び、
            袖を通した時の“高揚感” と “楽しみ” を。
          </div>
        </div>
      </div>
    </div>
  );
};
export default Overlap;

