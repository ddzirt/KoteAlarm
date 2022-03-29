import React from 'react';
import {View} from 'react-native';

import {DayProps, DaySelectorProps} from './Day-selector.props';
import {
  DAY_TEXT_CONTAINER,
  DAY_TEXT_CONTAINER_SELECTED,
  DAY_CONTAINER,
  DAY_TEXT,
  SELECTED_TEXT_COLOR,
} from './Day-selector.preset';
import {Button, Text, LineHeader} from 'components';
import {spacing} from 'theme';

/**
 * Day day component for selector
 */
function Day(props: DayProps) {
  const {name, nameTx, onPress, isSelected} = props;
  const pressWrapper = () => {
    onPress(name);
  };
  return (
    <Button
      style={isSelected ? DAY_TEXT_CONTAINER_SELECTED : DAY_TEXT_CONTAINER}
      onPress={pressWrapper}
      key={`day-button-key-${name}-${nameTx}`}>
      <Text
        style={isSelected ? SELECTED_TEXT_COLOR : DAY_TEXT}
        key={`day-text-key-${name}-${nameTx}`}
        text={name}
        tx={nameTx}
      />
    </Button>
  );
}

/**
 * Day generation, it would probably be better to run flatlist
 * but I'd rather not since I don't see any reason for such a small list
 */
// TODO: REDO proper with typing
const generateDays = (
  days: string[],
  selectedDays: string[],
  onPress: (date: string) => void,
) => {
  const daysView = [];
  for (let i = 0; i < days.length; i++) {
    const isSelected = selectedDays.includes(days[i]);
    daysView.push(
      <Day
        isSelected={isSelected}
        onPress={onPress}
        key={`day-component-${days[i]}`}
        name={days[i]}
      />,
    );
  }
  return daysView;
};

/**
 * Day selector for alarm screen.
 */
export function DaySelector(props: DaySelectorProps) {
  const {title, titleTx, days, selectedDays, onPressDaySelected} = props;

  return (
    <View style={{marginHorizontal: spacing[1]}}>
      <LineHeader text={title} tx={titleTx} />
      <View style={DAY_CONTAINER}>
        {generateDays(days, selectedDays, onPressDaySelected)}
      </View>
    </View>
  );
}
