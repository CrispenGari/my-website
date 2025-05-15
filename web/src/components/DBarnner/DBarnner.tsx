import React from "react";
import "./DBarnner.css";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaGraduationCap,
} from "react-icons/fa";

type TBanner = { name: string; displayName: string; color: string };
interface Props {
  banner: TBanner;
}
const DBarnner: React.FC<Props> = ({ banner: { color, displayName } }) => {
  return (
    <div className="d__banner">
      <div className="d__banner__content">
        <div className="d__banner__social">
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
            <FaLinkedin className="d__banner__social__linkedin" />
          </a>
          <a
            href="https://x.com/crispengari_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="d__banner__social__x" />
          </a>
          <a
            href="https://www.instagram.com/crispen_gari_/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="d__banner__social__instagram" />
          </a>
          <a
            href="https://github.com/CrispenGari"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="d__banner__social__github" />
          </a>
          <a
            href="https://scholar.google.com/citations?user=NlqEWgUAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGraduationCap className="d__banner__social__scholar" />
          </a>
        </div>
        <h1>
          Hello, Welcome to Crispen Gari&apos;s site.
          <span>
            building brains from scratch using artificial neural networks (ann)
          </span>
        </h1>
        <p style={{ color }}>{displayName}</p>
      </div>
    </div>
  );
};

export default DBarnner;
