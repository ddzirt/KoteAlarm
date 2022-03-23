import {TextStyle} from 'react-native';
import {color, spacing, typography} from 'theme';

export const TEXT: TextStyle = {
  color: color.palette.white,
  fontFamily: typography.primary,
};
export const BOLD: TextStyle = {fontWeight: 'bold'};
export const HEADER: TextStyle = {
  paddingTop: spacing[8],
  //   paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
};
export const HEADER_TITLE: TextStyle = {
  ...TEXT,
  ...BOLD,
  fontSize: 12,
  lineHeight: 15,
  textAlign: 'center',
  letterSpacing: 1.5,
};
