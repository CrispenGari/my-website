import React from "react";
import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";
interface Props {
  project: any;
}
const ProjectCard: React.FC<Props> = ({ project }) => {
  const [readMore, setReadMore] = React.useState(false);

  const setReadMoreToggle = () => {
    setReadMore(!readMore);
  };

  return (
    <div className="project__card">
      <h1>
        {project.name} ({project?.year})
      </h1>
      <img src={project.cover} alt={project.name} loading="lazy" />
      <p className="project__card__type">{project.projectType}</p>
      <p>{project.description}</p>

      <span
        onClick={setReadMoreToggle}
        style={{ cursor: "pointer", color: "#0073b1" }}
      >
        {readMore ? "READ LESS" : "READ MORE"}
      </span>

      {readMore && (
        <p className="project__card__long_desc">{project.longDescription}</p>
      )}

      <div className="project__card__languages">
        {project.languages.map((lang: string) => (
          <span key={lang}>{lang} </span>
        ))}
      </div>

      <div className="project__card__bottom">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <FaGithub className="project__card__icon" /> Open on Github
        </a>
        <p>{project?.year}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
