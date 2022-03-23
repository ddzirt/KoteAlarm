import {TextStyle, ViewStyle, ImageStyle} from 'react-native';
import {color} from '../../theme';

export const CONTAINER: ViewStyle = {
  alignItems: 'center',
  flex: 1,
  padding: 16,
  paddingVertical: 50,
  backgroundColor: color.background,
};

export const ERROR_DETAILS_CONTAINER: ViewStyle = {
  width: '100%',
  maxHeight: '60%',
  backgroundColor: color.line,
  marginVertical: 15,
  paddingHorizontal: 10,
  paddingBottom: 15,
  borderRadius: 6,
};

export const BTN_RESET: ViewStyle = {
  paddingHorizontal: 40,
  backgroundColor: color.primary,
};

export const TITLE_ERROR: TextStyle = {
  color: color.error,
  fontWeight: 'bold',
  paddingVertical: 15,
};

export const FRIENDLY_SUBTITLE: TextStyle = {
  color: color.palette.black,
  fontWeight: 'normal',
  paddingVertical: 15,
};

export const CONTENT_ERROR: TextStyle = {
  color: color.error,
  fontWeight: 'bold',
  paddingVertical: 15,
};

export const ICON: ImageStyle = {
  marginTop: 30,
  width: 64,
  height: 64,
};
