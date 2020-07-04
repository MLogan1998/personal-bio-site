import './technologyBuild.scss';

import utils from '../../helpers/utils';

const buildTech = () => {
  const domString = `
    <h1>Technologies!</h1>
    <div class="techContainer">
    <i class="fab fa-html5 fa-3x"></i>
    <i class="fab fa-css3-alt fa-3x"></i>
    <i class="fab fa-js-square fa-3x"></i>
    <i class="fab fa-bootstrap fa-3x"></i>
    <i class="fab fa-sass fa-3x"></i>
    </div>
    `;
  utils.printToDom('#technologiesPage', domString);
};

export default { buildTech };
