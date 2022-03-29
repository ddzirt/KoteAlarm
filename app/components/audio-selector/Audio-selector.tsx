import React from 'react';
import Slider from '@react-native-community/slider';

import {View} from 'react-native';

import {color, spacing} from 'theme';
import {Text, Switch, LineHeader} from 'components';
import {
  CONTAINER,
  CONTENT_CONTAINER,
  TEXT,
  SLIDER,
} from './Audio-selector.preset';
import {AudioSelectorProps} from './Audio-selector.props';

/**
 * Audio selector for alarm screen.
 */
export function AudioSelector(props: AudioSelectorProps) {
  const {title, titleTx, isVibrating, onVibrationPress} = props;

  return (
    <View style={{marginHorizontal: spacing[1]}}>
      <LineHeader text={title} tx={titleTx} />
      <View style={CONTENT_CONTAINER}>
        <View style={{...CONTAINER, paddingTop: spacing[2]}}>
          <Text style={TEXT} text="Ringtone:" />
        </View>
        <View style={CONTAINER}>
          <Text style={TEXT} text="Volume:" />
          <Slider
            style={SLIDER}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor={color.background}
            maximumTrackTintColor={color.line}
          />
        </View>
        <View style={CONTAINER}>
          <Text style={TEXT} text="Vibration:" />
          <Switch isEnabled={isVibrating} toggleSwitch={onVibrationPress} />
        </View>
      </View>
    </View>
  );
}
