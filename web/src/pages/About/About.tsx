import React from "react";
import "./About.css";
import { AboutContent, DBanner, Footer, Header } from "../../components";
import { abouts, banners } from "../../data";
import { useLocation } from "react-router-dom";
interface Props {}
const About: React.FC<Props> = () => {
  const [banner, setBanner] = React.useState(banners[0]);
  const location = useLocation();
  React.useEffect(() => {
    const b = banners.find(
      (banner) => String(location.pathname).split("/")[1] === banner.name
    );
    if (!!b) {
      setBanner(b);
    }
  }, [location]);
  return (
    <div className="about">
      <Header />
      <DBanner banner={banner} />
      <h1>About Me</h1>
      <div className="about__container">
        {abouts
          .filter((ab) => ab.id === 1)
          .map((about) => (
            <AboutContent key={about.id} about={about} />
          ))}
        <div className="about__container__right">
          {abouts
            .filter((ab) => ab.id !== 1)
            .map((about) => (
              <AboutContent key={about.id} about={about} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
