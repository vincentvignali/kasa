import { FC } from "react";
import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <div className="footer">
      <Link className="logo-container-footer" to="/">
        <img src="src/assets/LOGO (1).png" alt="" />
      </Link>
    </div>
  );
};

export default Footer;
