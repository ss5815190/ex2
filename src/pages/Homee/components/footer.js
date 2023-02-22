import "../style/footer.css";

const Footer = () => {
  return (
    <div style={{ marginTop: "5em" }}>
      <div className="hr">
        <div className="b"></div>
      </div>

      <div className="footer">
        <a
          href="https://unite-divisionofme.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          參考網頁
        </a>
      </div>
    </div>
  );
};
export default Footer;
//a 裡 target=_blank 另開視窗
