import './darkMode.scss';

const changeIcon = () => {
  const lightSwtich = $('.custom-control-label')[0];
  if (lightSwtich.innerHTML === '<i class="fas fa-moon"></i>') {
    lightSwtich.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    lightSwtich.innerHTML = '<i class="fas fa-moon"></i>';
  }
};

const lightSwitch = (selector, light, dark) => {
  if ($(selector).hasClass(light)) {
    $(selector).removeClass();
    $(selector).addClass(dark);
    $(selector).addClass('responsive');
  } else {
    $(selector).removeClass();
    $(selector).addClass(light);
    $(selector).addClass('responsive');
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
  lightSwitch('#bioPage', 'bioPageLight', 'darkBio');
  lightSwitch('#projectContainer', 'projectLight', 'projectDark');
  lightSwitch('#technologiesPage', 'techLight', 'techDark');
  lightSwitch('footer', 'lightFoot', 'darkFoot');
  changeBody();
};

export default { switched };
