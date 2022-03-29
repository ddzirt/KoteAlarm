import React from 'react';
import {Switch as SwitchRN, SwitchProps as RNSwitchProps} from 'react-native';
import {color} from 'theme';

export interface SwitchProps extends RNSwitchProps {
  isEnabled: boolean;
  toggleSwitch: (state: boolean) => void;
}

//#region Styles
export const SWITCH_TRACK = {
  false: color.backgroundSecondary,
  true: color.background,
};
//#endregion

/**
 * Hoc over RN Switch
 */
export function Switch(props: SwitchProps) {
  const {isEnabled, toggleSwitch} = props;
  return (
    <SwitchRN
      trackColor={SWITCH_TRACK}
      // thumbColor={isEnabled ? color.background : color.backgroundSecondary}
      ios_backgroundColor={color.backgroundSecondary}
      onValueChange={toggleSwitch}
      value={isEnabled}
      {...props}
    />
  );
}
