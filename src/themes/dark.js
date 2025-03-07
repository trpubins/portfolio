import common from './common';

const darkTheme = {
  ...common,
  bg: {
    default: '#161922',
    defaultLight: '#242A38',
    reverse: '#F4F4F4',
  },
  text: {
    default: '#F4F4F4',
    reverse: '#242A38',
    accent: '#a3a8c3',
  },
  shadows: {
    default: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
    small: '0 10px 30px -10px rgba(2, 12, 27, 0.7)',
    medium: '0 20px 30px -15px rgba(2,12,27, 0.7)',
    large: '0 30px 60px rgba(0, 0, 0, 0.12) ',
  },
};

export default darkTheme;
