import React, { JSX } from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";

type TTech = {
  name: string;
  color: string;
  explanation: string;
  icon: JSX.Element;
  id: number;
  path: string;
  iconColor: string;
  languages: {
    icon: JSX.Element;
    color: string;
  }[];
};
interface Props {
  tech: TTech;
}
const NavItem: React.FC<Props> = ({ tech }) => {
  const navRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("naviterm--animatable");
            obs.unobserve(entry.target);
          } else {
            entry.target.classList.remove("naviterm--animatable");
          }
        });
      },
      {
        root: null,
        threshold: 1,
        rootMargin: "0px",
      }
    );

    if (navRef.current) {
      observer.observe(navRef.current);
    }

    return () => {
      // eslint-disable-next-line
      if (navRef.current) observer.unobserve(navRef.current);
    };
  }, []);

  return (
    <div className="naviterm" ref={navRef}>
      <Link to="/" className="naviterm__link" style={{ color: tech.color }}>
        {tech.name}
        <span style={{ color: tech.iconColor, marginLeft: 8 }}>
          {tech.icon}
        </span>
      </Link>
      <p>{tech.explanation}</p>
      <div className="navitems__langs">
        {tech.languages?.map((lang: any, i: number) => (
          <span key={i} style={{ color: lang.color, marginRight: "10px" }}>
            {lang.icon}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NavItem;
