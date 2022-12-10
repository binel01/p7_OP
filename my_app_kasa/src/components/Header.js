import Logo from "../assets/LOGO.svg";
import { Link } from "react-router-dom";
import "../style/Header.css";

function Header() {
  return (
    <header className="header">
      <img className="logo_header" src={Logo} alt="Logo de l'agence Kasa" />
      <nav className="header_links">
        <div>
          <Link to={`/`}>Accueil</Link>
        </div>
        <div>
          <Link to={`/About`}>A propos</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
