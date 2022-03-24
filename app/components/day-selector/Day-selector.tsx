import React from 'react';
import {View} from 'react-native';

import {DayProps, DaySelectorProps} from './Day-selector.props';
import {Button, Text} from 'components';

function Day(props: DayProps) {
  const {name, nameTx} = props;

  return (
    <Button>
      <Text text={name} tx={nameTx} />
    </Button>
  );
}

/**
 * Day selector for alarm screen.
 */
export function DaySelector(props: DaySelectorProps) {
  const {title, titleTx} = props;

  return (
    <View>
      <View>
        <Text text={title} tx={titleTx} />
      </View>
      <View>
        <Day />
      </View>
    </View>
  );
}
