import LogoFooter from "../assets/LOGO-FOOTER.svg";
import "../style/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <img
        src={LogoFooter}
        alt="Le logo de l'agence Kasa"
        className="logo_footer"
      />
      <p className="text_footer">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
