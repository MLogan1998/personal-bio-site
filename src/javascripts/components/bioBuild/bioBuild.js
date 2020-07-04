/* eslint-disable max-len */
import './bioBuild.scss';

import utils from '../../helpers/utils';

const buildBio = () => {
  const domString = `
  <h1>Welcome!</h1>
  <div class="secondContainer">
  <div class="textContentTyping">
  <p class="about"><span class="const">const </span><span class="nameText">mattLogan </span><span class="equal">= </span><span class="bracket">[</span><span>'Father', 'Developer', 'Designer',</p>
  <p>&nbsp;&nbsp;&nbsp;&nbsp;'Tennessee Fan', 'Nashville Strong'</span><span class="bracket">]</span>;</p>
  </div>
  <div class="textContentTypingSmall">
  <p class="about"><span class="const">const </span><span class="nameText">mattLogan </span><span class="equal">= </span><span class="bracket">[</span><span>'Father', 'Developer', 'Designer',</p>
  <p>&nbsp;&nbsp;&nbsp;&nbsp;'Tennessee Fan', 'Nashville Strong'</span><span class="bracket">]</span>;</p>
  </div>
  <div class="textContent">
  <p class="edP">Thank you for vitising. My name is Matt Logan, I was born and raised in Nashville. Recently, I began a new journey into the world of web development. I enrolled at Nashville Software School, and am in Evening Cohort 12. I created this website to showcase my progress. Have a look around and contact me with any questions. I'd love to hear from you.</p>
  </div>
  </div>
  <a href="mailto:mlogan5212@gmail.com"><i class="far fa-envelope fa-2x"></i></a>
  <a href="https://github.com/MLogan1998" target="_new"><i class="fab fa-github fa-2x"></i></a>
  <a href="https://www.linkedin.com/in/matt-logan-a7742a19b/" target="_new"><i class="fab fa-linkedin fa-2x"></i></a>
  <a href="https://www.facebook.com/matt.logan.39" target="new"><i class="fab fa-facebook fa-2x"></i>
  </a>
  `;
  utils.printToDom('#bioPage', domString);
};

export default { buildBio };
