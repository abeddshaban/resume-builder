import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Styles/PageNotFoud.css";

const PageNotFound = () => {
  return (
    <div className="pagenotfound_div">
      <section className="pagenotfound_section">
        <span>404</span>
        <span>Page Not Found</span>
        <p>
          Sorry but the page you are trying to access is not found or it is
          under construction.
        </p>
        <Link to="/" className="link">
          <Button variant="outlined">Back to home</Button>
        </Link>
      </section>
    </div>
  );
};

export default PageNotFound;
