import React from 'react';
import {View, ViewStyle, TextStyle} from 'react-native';

import {color, sizes, typography, spacing} from 'theme';
import {Text} from 'components';
import {TextProps} from 'components/text/Text.props';

//#region Styles
const TEXT: TextStyle = {
  color: color.text,
  fontFamily: typography.primary,
  fontSize: sizes.highTextSize,
};
const HEADER_TITLE: TextStyle = {
  ...TEXT,
  fontSize: sizes.highlightMediumTextSize,
  color: color.background,
  textAlign: 'left',
  marginLeft: spacing[2],
  paddingVertical: spacing[2],
};
const CONTAINER: ViewStyle = {
  marginTop: spacing[3],
};
//#endregion

export interface LineHeader extends TextProps {
  containerStyle?: ViewStyle;
}

/**
 * Line component heading title
 */
export function LineHeader(props: LineHeader) {
  const {containerStyle, style, text, tx} = props;
  return (
    <View style={[CONTAINER, containerStyle]}>
      <Text style={[HEADER_TITLE, style]} text={text} tx={tx} />
    </View>
  );
}
