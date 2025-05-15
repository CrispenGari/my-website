import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaGraduationCap,
} from "react-icons/fa";

interface Props {}
const Footer: React.FC<Props> = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__iterm">
          <h1>Social Media</h1>
          <div className="footer__social">
            <a
              href="https://www.facebook.com/crispen.gari/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="footer__social__facebook" />
            </a>
            <a
              href="https://www.linkedin.com/in/tinashe-crispen-garidzira-34437720b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="footer__social__linkedin" />
            </a>
            <a
              href="https://x.com/crispengari_"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="footer__social__x" />
            </a>
            <a
              href="https://www.instagram.com/crispen_gari_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="footer__social__instagram" />
            </a>
            <a
              href="https://github.com/CrispenGari"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="footer__social__github" />
            </a>
            <a
              href="https://scholar.google.com/citations?user=NlqEWgUAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGraduationCap className="footer__social__scholar" />
            </a>
          </div>
        </div>
        <div className="footer__iterm">
          <h1>Contacts</h1>
          <div>
            <span>Phone</span>
            <p>
              <span>+27 652 305 879</span>
              <br />
              <span>+27 684 671 609</span>
            </p>
          </div>
          <p>
            <span>Email</span>
            <span> crispengari@gmail.com</span>
          </p>
        </div>
      </div>

      <p>
        This is a web site created, owned and maintained by{" "}
        <strong>Crispen Gari</strong>.
      </p>
    </div>
  );
};

export default Footer;
