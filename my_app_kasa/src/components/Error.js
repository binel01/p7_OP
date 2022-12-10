import "../style/Error.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error">
      <h1 className="numbError">404</h1>
      <p className="textError">Oups ! La page que vous demandez n'exsite pas.</p>
      <Link to="/" className="back">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
