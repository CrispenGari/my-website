import React from "react";
import "./Banner.css";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaGraduationCap,
} from "react-icons/fa";
interface Props {}
const Banner: React.FC<Props> = () => {
  return (
    <div className="banner">
      <div className="banner__content">
        <div className="banner__social">
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

        <h1>
          Hello, Welcome to Crispen Gari's site.
          <span>
            building brains from scratch using artificial neural networks (ann)
          </span>
        </h1>
        <p>
          <span> Data Science, </span>
          <span> Web Development, </span>
          <span> Mobile Development</span> <span>and</span>
          <span> Desktop Development </span>
        </p>
        <h1>
          Research, Software Development, Tutorship, Software Consultant, Data
          Analysis and Artificial Intelligence.
        </h1>
        <p>
          Building Softwares with Human Intelligence using Artificial Neural
          Networks.
        </p>
      </div>
    </div>
  );
};

export default Banner;
