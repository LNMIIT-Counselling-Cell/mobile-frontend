// import { createIconSetFromFontello } from 'react-native-vector-icons';
// import fontelloConfig from '../config.json';
// const Icon = createIconSetFromFontello(fontelloConfig);

import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const Icon = createIconSetFromIcoMoon(
  icoMoonConfig,
  'icomoon',
  'icomoon.ttf'
);

export default Icon;