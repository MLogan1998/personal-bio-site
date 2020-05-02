const projects = [
  {
    title: 'Sorting Hat',
    camel: 'sortingHat',
    screenshot: 'https://i.postimg.cc/HkQp7Kjz/sorting-hat-final.jpg',
    description: 'The goal of the project was to created a Sorting Hat that assigned a student to a random house, and a button that removed the studen when expelled.',
    technologiesUsed: 'HTML, CSS, Vanilla JS',
    available: true,
    url: '',
    githubUrl: 'https://github.com/MLogan1998/sorting-hat'
  },
  {
    title: 'Pet Adoption',
    camel: 'petAdoption',
    screenshot: 'https://i.postimg.cc/Kz44b9Xn/pet-adoption-final2.jpg',
    description: 'Create pet cards using JavaScript. This was our first project using JavaScript to print to the dom. Added buttons to filter the cards by animal type.',
    technologiesUsed: 'HTML, CSS, Vanilla JS',
    available: true,
    url: '',
    githubUrl: 'https://github.com/MLogan1998/pet-adoption'
  },
  {
    title: 'CSS Theme Challenge',
    camel: 'cssThemeChallenge',
    screenshot: 'https://i.postimg.cc/LXkjbZFt/css-theme-challenge-final.jpg',
    description: 'This was an opttional challenge to recreate a template from TEMPLATED. At the time, by far the most advanced work I had done. I think it turned out pretty good!',
    technologiesUsed: 'HTML, CSS',
    available: true,
    url: '',
    githubUrl: 'https://github.com/MLogan1998/css-theme-challenge'
  },
  {
    title: 'Product Cards',
    camel: 'projectCards',
    screenshot: 'https://i.postimg.cc/vmzTV7r6/product-cards-final.jpg',
    description: 'Our first project at NSS was to create product cards using HTML and CSS. The biggest challenge of this project was placing the sold out image over the card.',
    technologiesUsed: 'HTML, CSS',
    available: true,
    url: '',
    githubUrl: 'https://github.com/MLogan1998/product-cards'
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
      domString += '<div class="projectDiv">'
      domString += `<img class="screenshotImg" src="${obj[i].screenshot}" alt="${obj[i].title} Screenshot">`
      domString += `<h4 class="projectH3">${obj[i].title}</h4>`
      domString += `<p class="descriptionP">${obj[i].description} <a href="${obj[i].githubUrl}" target="_new">>>GitHub Repo</a></p>`
      domString += `<p class="techP">${obj[i].technologiesUsed}</p>`
      domString += '</div>'
    }
  }
  printsToDom('#projectsPage', domString)
}

const init = () => {
  buildProjects(projects);
}

init();
