<template>
  <div class="projects">
    <Header />
    <DBarnner :banner="banner" />
    <div class="projects__header">
      <h1>Individual Projects</h1>
      <div class="project__header__search">
        <div class="project__search__input">
          <input
            type="text"
            placeholder="Search project..."
            v-model.trim="projectName"
          />
          <v-icon class="project__header__search__icon"> mdi-magnify </v-icon>
        </div>
        <div class="project__select__input">
          <select v-model="projectCategory">
            <option
              v-for="category of categories"
              :key="category"
              :value="category"
            >
              {{ category }}
            </option>
          </select>
          <span>Select Project Category</span>
        </div>
      </div>
    </div>

    <div v-if="loading" class="projects__container--no-project">
      <h1>Loading projects...</h1>
    </div>
    <div v-else class="projects__container">
      <ProjectCard
        v-for="project of projectsToRender"
        :key="project._id"
        :project="project"
      />
      <div v-if="projectsToRender?.length === 0" class="projects__not__found">
        <h1>No project that matches your filter...</h1>
      </div>
    </div>
    <Footer />
    <CookiePolicy v-if="cookiesAccepted === false" />
  </div>
</template>

<script>
import {
  CookiePolicy,
  DBarnner,
  Footer,
  Header,
  ProjectCard,
} from "../../components";
import { baseUrl } from "../../constants";
import banners from "../../utils/banners";
export default {
  name: "Projects",
  components: {
    CookiePolicy,
    DBarnner,
    Footer,
    Header,
    ProjectCard,
  },
  computed: {
    cookiesAccepted() {
      return this.$store?.state?.cookies;
    },

    projectsToRender() {
      if (this.projectCategory === "All") {
        if (!this.projectName) {
          return this.projects;
        }
        return this.projects.filter((project) =>
          project.name?.toLowerCase().includes(this.projectName.toLowerCase())
        );
      } else {
        if (!this.projectName) {
          return this.projects.filter((project) =>
            project.projectType
              .toLowerCase()
              .includes(this.projectCategory.toLowerCase())
          );
        } else {
          return this.projects
            .filter((project) =>
              project.projectType
                .toLowerCase()
                .includes(this.projectCategory.toLowerCase())
            )
            .filter((project) =>
              project.name
                ?.toLowerCase()
                .includes(this.projectName.toLowerCase())
            );
        }
      }
    },
  },

  data() {
    return {
      banner: null,
      projects: null,
      loading: false,
      categories: [
        "All",
        "Artificial Intelligence",
        "Mobile Development",
        "Desktop Development",
        "Web Development",
      ],
      projectName: "",
      projectCategory: "All",
    };
  },
  mounted() {
    this.banner = banners.filter(
      (banner) =>
        String(this.$router.currentRoute.path).split("/")[1] === banner.name
    )[0];
    (async () => {
      this.loading = true;
      const res = await fetch(`${baseUrl}/api/v1/projects`, {
        method: "GET",
      });
      this.projects = await res.json();
    })().finally(() => {
      this.loading = false;
    });
  },
};
</script>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;

  .projects__container--no-project {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 10px;
    height: 40vh;
    display: flex;
    user-select: none;
    h1 {
      color: gray;
      font-size: 0.9rem;
      font-weight: 500;
    }
  }
  .projects__header {
    width: 100%;
    border-bottom: 1px solid lightgrey;
    font-size: 0.9rem;
    letter-spacing: 2px;
    user-select: none;
    text-align: center;
    padding: 10px;
    text-transform: uppercase;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;

    .project__header__search {
      display: flex;
      width: 100%;
      max-width: 600px;
      margin: 10px auto;
      align-items: flex-start;
      .project__select__input {
        display: flex;
        flex-direction: column;
        select {
          margin-left: 10px;
          width: 200px;
          outline: none;
          border: 1px solid cornflowerblue;
          padding: 5px 10px;
          border-radius: 5px;
          margin-top: 10px;
        }
        span {
          text-transform: lowercase !important;
          letter-spacing: unset !important;
          color: cornflowerblue;
          font-size: 0.8rem;
        }
      }

      .project__search__input {
        display: flex;
        align-items: center;
        margin: 10px;
        background-color: #f5f5f5;
        border: 1px solid transparent;
        padding: 5px 10px;
        flex: 1;
        border-radius: 5px;
        input {
          padding: 5px 10px;
          outline: none;
          background: white;
          flex: 1;
          border: none;
          margin-right: 5px;
          font-size: 1rem;
        }
        .project__header__search__icon {
          cursor: pointer;
        }
      }
    }
  }
  .projects__container {
    width: 100%;
    margin: 0px auto;
    max-width: 1000px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 20px;
    justify-content: space-around;
    flex: 1;
    .projects__not__found {
      height: 100px;
      display: flex;
      user-select: none;

      flex-direction: column;
      justify-content: center;
      h1 {
        color: cornflowerblue !important;
        letter-spacing: 1px;
        font-weight: 500 !important;
      }
    }
  }
}

.project__search__input:focus-within {
  border: 1px solid cornflowerblue !important;
}
@media only screen and (max-width: 425px) {
  .projects > h1 {
    font-size: 14px !important;
  }
  .project__header__search {
    flex-direction: column;
    align-items: center !important;
    width: 100%;
  }
}
</style>
