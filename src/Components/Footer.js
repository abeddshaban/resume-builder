import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bgblack">
      <section>
        <section className="content_center paddingtop20">
          <Link to="" className="link">
            <Button
              style={{
                color: "#ffffff",
              }}
            >
              terms
            </Button>
          </Link>
          <Link to="" className="link">
            <Button
              style={{
                color: "#ffffff",
              }}
            >
              home
            </Button>
          </Link>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
