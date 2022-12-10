import { useEffect } from "react";

function PageTitle(props) {
  useEffect(() => {
    document.tittle = `Kasa | ${props.children}`;
  });
}

export default PageTitle;
