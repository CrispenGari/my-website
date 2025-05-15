import React from "react";
import "./Projects.css";
import { Footer, Header, ProjectCard } from "../../components";
import DBarnner from "../../components/DBarnner/DBarnner";
import { banners } from "../../data";
import { useLocation } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { baseUrl } from "../../constants";
interface Props {}
const Projects: React.FC<Props> = () => {
  const [banner, setBanner] = React.useState(banners[0]);
  const [state, setState] = React.useState({
    projectName: "",
    projectCategory: "",
    loading: false,
    projects: [],
  });
  const location = useLocation();
  React.useEffect(() => {
    const b = banners.find(
      (banner) => String(location.pathname).split("/")[1] === banner.name
    );
    if (!!b) {
      setBanner(b);
    }

    (async () => {
      setState((s) => ({ ...s, loading: true }));
      const res = await fetch(`${baseUrl}/api/v1/projects`, {
        method: "GET",
      });
      const data = await res.json();
      setState((s) => ({ ...s, projects: data }));
    })()
      .catch(() => {
        setState((s) => ({ ...s, loading: false, projects: [] }));
      })
      .finally(() => {
        setState((s) => ({ ...s, loading: false }));
      });
  }, [location]);

  return (
    <div className="projects">
      <Header />
      <DBarnner banner={banner} />
      <div className="projects__header">
        <h1>Individual Projects</h1>
        <div className="project__header__search">
          <div className="project__search__input">
            <input
              type="text"
              placeholder="Search project..."
              value={state.projectName}
              onChange={(e) =>
                setState((s) => ({ ...s, projectName: e.target.value.trim() }))
              }
            />
            <MdSearch className="project__header__search__icon" />
          </div>
          <div className="project__select__input">
            <select
              value={state.projectCategory}
              onChange={(e) =>
                setState((s) => ({ ...s, projectCategory: e.target.value }))
              }
            >
              <option value="">All</option>
              {[
                "Artificial Intelligence",
                "Mobile Development",
                "Desktop Development",
                "Web Development",
              ].map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <span>Select Project Category</span>
          </div>
        </div>
      </div>

      {state.loading ? (
        <div className="projects__container--no-project">
          <h1>Loading projects...</h1>
        </div>
      ) : (
        <div className="projects__container">
          {state.projects.map((project: any) => (
            <ProjectCard key={project._id} project={project} />
          ))}
          {state.projects.length === 0 && (
            <div className="projects__not__found">
              <h1>No project that matches your filter...</h1>
            </div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Projects;
