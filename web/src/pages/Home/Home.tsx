import React from "react";
import "./Home.css";
import {
  Banner,
  Card,
  Footer,
  Header,
  HomeCard,
  NavItem,
  Prompt,
} from "../../components";
import { techs, lessons, projects } from "../../data";
interface Props {}
const Home: React.FC<Props> = () => {
  return (
    <div className="home">
      <Header />
      <Banner />
      <Prompt />
      <Card />

      <h1>Crispen's Technology Stack</h1>
      <div className="home__container">
        {techs
          .filter((tech) => tech.id === 1)
          .map((tech) => (
            <NavItem key={tech.id} tech={tech} />
          ))}
        <div className="home__container__right">
          {techs
            .filter((tech) => tech.id !== 1)
            .map((tech) => (
              <NavItem key={tech.id} tech={tech} />
            ))}
        </div>
      </div>

      <h1>You want Tutorship Services?</h1>
      <div className="home__container">
        {lessons.map((lesson, i) => (
          <HomeCard key={i.toString()} data={lesson} />
        ))}
      </div>

      <h1>You want to propose for a new Project?</h1>
      <div className="home__container">
        {projects.map((project, i) => (
          <HomeCard key={i.toString()} data={project} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
