import projects from './components/projectBuild/projectbuild';
import technology from './components/technologyBuild/technologyBuild';
import bio from './components/bioBuild/bioBuild';

import '../styles/main.scss';

const init = () => {
  bio.buildBio();
  projects.buildProjects();
  technology.buildTech();
};

init();
