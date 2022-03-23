import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../text/Text';
import {viewPresets, textPresets} from './Button.preset';
import {ButtonProps} from './Button.props';

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Button(props: ButtonProps) {
  // grab the props
  const {
    preset = 'primary',
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    ...rest
  } = props;

  const viewStyle = viewPresets[preset] || viewPresets.primary;
  const viewStyles = [viewStyle, styleOverride];
  const textStyle = textPresets[preset] || textPresets.primary;
  const textStyles = [textStyle, textStyleOverride];

  const content = children || <Text tx={tx} text={text} style={textStyles} />;

  // TODO: Replace with proper native buttons. IE: Button with ripple effect on
  // TODO: Android and TouchableOpacity on iOS. Current implementation is a lazy stub
  return (
    <TouchableOpacity style={viewStyles} {...rest}>
      {content}
    </TouchableOpacity>
  );
}
