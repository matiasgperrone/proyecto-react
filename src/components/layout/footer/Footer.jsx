import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./footer.css";
import { Box } from "@mui/material";
import { blue, red } from "@mui/material/colors";

const Footer = () => {
  return (
    <div className="footer-container">
      <button className="footer-button">
        <TwitterIcon />
      </button>
      <button className="footer-button">
        <FacebookIcon />
      </button>
      <button className="footer-button">
        <WhatsAppIcon />
      </button>
      <button className="footer-button">
        <InstagramIcon />
      </button>
      <button className="footer-button">
        <LinkedInIcon />
      </button>
    </div>
  );
};

export default Footer;
