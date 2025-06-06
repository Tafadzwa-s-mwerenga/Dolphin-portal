import { Dimensions } from 'react-native';

// Figma frame dimensions (width x height)
const DESIGN_WIDTH = 375;
const DESIGN_HEIGHT = 812;

const { width, height } = Dimensions.get('window');

// Horizontal scale
export const scale = (size: number): number => (width / DESIGN_WIDTH) * size;

// Vertical scale
export const verticalScale = (size: number): number =>
  (height / DESIGN_HEIGHT) * size;

// For font scaling (optional)
export const moderateScale = (size: number, factor = 0.5): number =>
  size + (scale(size) - size) * factor;
