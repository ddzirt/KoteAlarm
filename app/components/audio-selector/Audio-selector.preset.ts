import {TextStyle, ViewStyle} from 'react-native';
import {color, sizes, spacing, typography} from 'theme';

export const TEXT: TextStyle = {
  color: color.text,
  fontFamily: typography.primary,
  fontSize: sizes.highTextSize,
};
export const CONTENT_CONTAINER = {
  marginHorizontal: spacing[2],
};
export const CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingTop: spacing[4],
};
export const SLIDER: ViewStyle = {
  width: '80%',
  height: 40,
};
