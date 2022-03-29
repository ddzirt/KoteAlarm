import React from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {color, sizes, spacing, typography} from 'theme';
import {translate, TxKeyPath} from 'i18n';
import {Text} from 'components';

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingVertical: spacing[3],
};

// the base styling for the TextInput
const INPUT: TextStyle = {
  fontFamily: typography.primary,
  color: color.text,
  minHeight: 30, //44,
  fontSize: sizes.highTextSize,
  backgroundColor: color.palette.white,
};

const PRESETS: {[name: string]: ViewStyle} = {
  default: {},
};

export interface TextFieldProps extends TextInputProps {
  /**
   * The placeholder i18n key.
   */
  placeholderTx?: TxKeyPath;

  /**
   * The Placeholder text if no placeholderTx is provided.
   */
  placeholder?: string;

  /**
   * The label i18n key.
   */
  labelTx?: TxKeyPath;

  /**
   * The label text if no labelTx is provided.
   */
  label?: string;

  /**
   * Optional container style overrides useful for margins & padding.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Optional style overrides for the input.
   */
  inputStyle?: StyleProp<TextStyle>;

  /**
   * Various look & feels.
   */
  preset?: keyof typeof PRESETS;

  /**
   * Do we show text title
   */
  isTextShown?: boolean;

  forwardedRef?: any;
}

/**
 * A component which has a label and an input together.
 */
export function TextField(props: TextFieldProps) {
  const {
    placeholderTx,
    placeholder,
    labelTx,
    label,
    preset = 'default',
    style: styleOverride,
    inputStyle: inputStyleOverride,
    forwardedRef,
    isTextShown,
    ...rest
  } = props;

  const containerStyles = [CONTAINER, PRESETS[preset], styleOverride];
  const inputStyles = [INPUT, inputStyleOverride];
  const actualPlaceholder = placeholderTx
    ? translate(placeholderTx)
    : placeholder;

  return (
    <View style={containerStyles}>
      {isTextShown ? (
        <Text preset="fieldLabel" tx={labelTx} text={label} />
      ) : null}
      <TextInput
        placeholder={actualPlaceholder}
        placeholderTextColor={color.text}
        underlineColorAndroid={color.transparent}
        {...rest}
        style={inputStyles}
        ref={forwardedRef}
      />
    </View>
  );
}
