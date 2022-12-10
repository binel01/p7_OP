import Error from "../components/Error";
import UseTitle from "../index";

function NotFound() {
  UseTitle("NotFound");
  return <Error />;
}

export default NotFound;
