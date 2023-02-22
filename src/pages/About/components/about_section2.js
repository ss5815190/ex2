import "../style/about_section2.css";

const About_section2 = () => {
  return (
    <div className="about_section2">
      <div className="about_section2_wrap">
        <h2>
          <p>忙しく過ごす仕事の場に、</p>
          <p>お気に入りの服を選び、袖を通した時の</p>
          <p>“高揚感” と “楽しみ” を</p>
        </h2>
        <div className="about_section2_img">
          <img
            className="about_section2_img-1"
            src="./imgs/about-2-1.jpg.webp"
            alt=""
            loading="lazy"
          />
        </div>

        <div className="about_section2_txt">
          <div className="About_section2_contain">
            <p>
              そんな想いから生まれた「UNITE DIVISION OF ME」。
              機能性を重視したシンプルな従来のユニフォームから、
              より深く、美しさのあるものを目指しました。
            </p>
            <p>
              ディレクター榎本氏が自ら入念にユーザーにヒヤリングし、
              自身のデザイナーとしての経験を織り交ぜて完成させたラインは、
              制約ある中にも創意工夫がほどこされ、要望やマストなポイント
              をしっかり押さえつつも邪魔にはならない、ファッション視点から作
              り上げたシルエットやカラー、パターンへと展開しています。
            </p>
            <p>
              あえてイージーにはしない、でも決して窮屈ではない、想いのこもったユニフ
              ォームがここに存在しています。現代を生きる “素敵な何か” を求めてい
              る人たちに、あなたらしい真のスタイル -ESSENTIAL STYLE- を、確実
              な機能性と共に。
            </p>
            <p>
              CHITOSE
              の歴史と共に培ってきた信頼あるものづくりに、今までになかった
              「選べる自由」を備えもつ UNITE DIVISION OF ME をぜひ楽しんでいた
              だければと思います。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About_section2;
