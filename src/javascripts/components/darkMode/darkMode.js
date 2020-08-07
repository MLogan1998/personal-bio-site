import './darkMode.scss';

const changeIcon = () => {
  const lightSwtich = $('.custom-control-label')[0];
  if (lightSwtich.innerHTML === '<i class="fas fa-moon"></i>') {
    lightSwtich.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    lightSwtich.innerHTML = '<i class="fas fa-moon"></i>';
  }
};

const changeBio = () => {
  if ($('#bioPage').hasClass('bioPageLight')) {
    $('#bioPage').removeClass();
    $('#bioPage').addClass('darkBio');
    $('#bioPage').addClass('responsive');
  } else {
    $('#bioPage').removeClass();
    $('#bioPage').addClass('bioPageLight');
    $('#bioPage').addClass('responsive');
  }
};

const changeProjects = () => {
  if ($('#projectContainer').hasClass('projectLight')) {
    $('#projectContainer').removeClass();
    $('#projectContainer').addClass('projectDark');
    $('#projectContainer').addClass('responsive');
  } else {
    $('#projectContainer').removeClass();
    $('#projectContainer').addClass('projectLight');
    $('#projectContainer').addClass('responsive');
  }
};

const changeTech = () => {
  if ($('#technologiesPage').hasClass('techLight')) {
    $('#technologiesPage').removeClass();
    $('#technologiesPage').addClass('techDark');
    $('#technologiesPage').addClass('responsive');
  } else {
    $('#technologiesPage').removeClass();
    $('#technologiesPage').addClass('techLight');
    $('#technologiesPage').addClass('responsive');
  }
};

const changeFooter = () => {
  if ($('footer').hasClass('lightFoot')) {
    $('footer').removeClass();
    $('footer').addClass('darkFoot');
    $('footer').addClass('responsive');
  } else {
    $('footer').removeClass();
    $('footer').addClass('lightFoot');
    $('footer').addClass('responsive');
  }
};

const changeBody = () => {
  if ($('body').hasClass('lightBody')) {
    $('body').removeClass();
    $('body').addClass('darkBody');
  } else {
    $('body').removeClass();
    $('body').addClass('lightBody');
  }
};

const switched = () => {
  changeIcon();
  changeBio();
  changeProjects();
  changeTech();
  changeFooter();
  changeBody();
};

export default { switched };
