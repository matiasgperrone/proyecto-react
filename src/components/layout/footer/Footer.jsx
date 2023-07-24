import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <Link className="footer-button">
        <TwitterIcon />
      </Link>
      <Link className="footer-button">
        <FacebookIcon />
      </Link>
      <Link className="footer-button">
        <WhatsAppIcon />
      </Link>
      <Link className="footer-button">
        <InstagramIcon />
      </Link>
      <Link className="footer-button">
        <LinkedInIcon />
      </Link>
    </div>
  );
};

export default Footer;
