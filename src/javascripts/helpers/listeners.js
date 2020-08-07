import switched from '../components/darkMode/darkMode';

const attachEvents = () => {
  $('body').on('change', '#customSwitch1', switched.switched);
};

export default { attachEvents };
