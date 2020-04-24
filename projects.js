const projects = [
  {
    title: 'Product Cards',
    camel: 'projectCards',
    screenshot: 'https://i.postimg.cc/vmzTV7r6/product-cards-final.jpg',
    description: 'Our first project at NSS was to create product cards using HTML and CSS. The biggest challenge of this project was placing the sold out image over the card.',
    technologiesUsed: 'HTML, CSS, Version Control with GitHub ',
    available: true,
    url: '',
    githubUrl: 'https://github.com/MLogan1998/product-cards'
  },
  {
    title: 'CSS Theme Challenge',
    camel: 'cssThemeChallenge',
    screenshot: 'https://i.postimg.cc/LXkjbZFt/css-theme-challenge-final.jpg',
    description: 'This was an opttional challenge to recreate a template from TEMPLATED. At the time, by far the most advanced work I had done. I think it turned out pretty good!',
    technologiesUsed: 'HTML, CSS, Version Control with GitHub ',
    available: true,
    url: '',
    githubUrl: 'https://github.com/MLogan1998/css-theme-challenge'
  },
  {
    title: 'Pet Adoption',
    camel: 'petAdoption',
    screenshot: 'https://i.postimg.cc/CdpTLtQT/pet-adoption-final.jpg',
    description: 'Create pet cards using JavaScript. This was our first project using JavaScript to print to the dom. Added buttons to filter the cards by animal type using jQuery.',
    technologiesUsed: 'HTML, CSS, Vanilla JavaScript, jQuery, Version Control with GitHub ',
    available: true,
    url: '',
    githubUrl: 'https://github.com/MLogan1998/pet-adoption'
  },
]

const printsToDom = (selector, textToPrint) => {
  const selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}

const buildProjects = (obj) => {
  let domString = '';

  for (i = 0; i < projects.length; i++) {
    if(obj[i].available === true) {
      domString += `<div class="${obj[i].camel}" id="projectCard">`
      domString += `<h3 class="projectTitle">${obj[i].title}</h3>`
      domString += `<img src="${obj[i].screenshot} " alt="${obj[i].title} Screenshot"><br>`
      domString += `<a href="${obj[i].githubUrl}" target="_new"><img border="0" alt="GitHub" src="https://i.postimg.cc/6pBvGvtv/githubnew.png" width="50" height="50"></a>`
      domString += '</div>'
    }
  }
  printsToDom('#projectsPage', domString)
}

const init = () => {
  buildProjects(projects);
}

init();
