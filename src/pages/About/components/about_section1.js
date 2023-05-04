import "../style/about_section1.css";

const About_section1 = () => {
  
  return (
    <div className="about_section1">
      <div className="about_section1_wrap">
        <div className="about_section1_img">
          <img
            className="about_section1_img-1"
            src="./imgs/about-1-1.jpg.webp"
            alt=""
            
          />
          <img
            className="about_section1_img-2"
            src="./imgs/about-1-2.jpg.webp"
            alt=""
            
          />
        </div>

        <div className="about_section1_txt">
          <h1 className="about_section1_title">
            <p>For your</p>
            <p>ESSENTIAL</p>
            <p>STYLE</p>
          </h1>
          <h3 className="about_section1_contain1">
            <p>今までになかった</p>
            <p>“選べる自由”</p>
          </h3>
          <div className="about_section1_contain2">
            SNS などの誕生により誰もが素直に自身を表現出来るようになった今、 70
            年以上の歴史を持つCHITOSE
            のオリジナルブランド「UNITE」はファッションディレクター
            榎本実穂氏を迎え、ハイポジションライン「UNITE DIVISION OF
            ME」をスタートいたしました。
          </div>
        </div>
      </div>
    </div>
  );
};
export default About_section1;
