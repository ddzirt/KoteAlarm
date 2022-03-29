import React from 'react';
import {View, ViewProps, ViewStyle} from 'react-native';
import {spacing} from 'theme';

const PRESETS: {[name: string]: ViewStyle} = {
  default: {
    height: spacing[2],
    width: '100%',
  },
  small: {
    height: spacing[4],
    width: '100%',
  },
  medium: {
    height: spacing[4],
    width: '100%',
  },
  big: {
    height: spacing[6],
    width: '100%',
  },
};

export interface EmptyProps extends ViewProps {
  /**
   * Various look & feels.
   */
  preset?: keyof typeof PRESETS;
}

/**
 * Add empty space for scrollable screens without touching styles
 */
export function Empty(props: EmptyProps) {
  const {preset = 'default'} = props;
  return <View style={PRESETS[preset]} />;
}
