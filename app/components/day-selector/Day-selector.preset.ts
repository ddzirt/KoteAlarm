import {TextStyle, ViewStyle} from 'react-native';
import {color, sizes, typography} from 'theme';

export const TEXT: TextStyle = {
  color: color.text,
  fontFamily: typography.primary,
};
export const DAY_TEXT: TextStyle = {
  ...TEXT,
  fontSize: sizes.highTextSize,
  fontWeight: '100',
};
export const SELECTED_TEXT_COLOR = {
  ...DAY_TEXT,
  color: color.palette.lighterGreen,
};
export const DAY_TEXT_CONTAINER = {
  borderWidth: 2,
  borderColor: color.backgroundSecondary,
};
export const DAY_TEXT_CONTAINER_SELECTED = {
  borderWidth: 2,
  borderColor: color.palette.lighterGreen,
};
export const DAY_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};
