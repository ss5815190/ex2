import "../style/Explore_section1.css";

const ExploreSection1 = () => {
  return (
    <div className="explore_section1">
      <div className="explore_section1_wrap">
        <div className="explore_section1_img">
          <img src="./imgs/explore-1-1.jpg.webp" alt="" />
        </div>

        <div className="explore_section1_txt">
          <div>
            <h1>Follow us on</h1>
            <p>Instagram</p>

            <a
              href="https://www.instagram.com/unite_divisionofme/"
              target="_blank"
              rel="noreferrer"
            >
              <h3>@unitedivisionofme</h3>
            </a>
            <div className="eplore_section1_a_line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExploreSection1;
