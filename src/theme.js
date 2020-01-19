import { Dimensions } from 'react-native';

export default {
  deviceHeight: Dimensions.get('screen').height,
  deviceWidth: Dimensions.get('screen').width,
  colors: {
    primary: '#ff5757',
    secundary: '#000000',
    background: '#FFFFFF',
    text: '#1D1E1F',
    textDark: '#8D8980',
    textLight: '#FFFFFF',
    border: '#1D1E1F',
    warning: '#ef4444',
  },

  fontSize: {
    h1: 42,
    h2: 33,
    h3: 20,
    h4: 18,
    h5: 16,
    subtitle: 20,
    medium: 13,
    normal: 14,
    small: 12,
    button: 18,
    input: 17,
  },
  fontFamily: {
    regular: 'HelveticaNeue-Light ',
    light: 'HelveticaNeue-Light ',
    bold: 'HelveticaNeue-Light ',
    button: 'HelveticaNeue-Light ',
    input: 'HelveticaNeue-Light ',
    bolder: 'HelveticaNeue-Light ',
  },
};
