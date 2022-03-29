import React from 'react';
import {
  View,
  ViewStyle,
  TextStyle,
  //   ImageStyle,
  //   SafeAreaView,
} from 'react-native';

import {Screen, Text, Button} from 'components';
import {color, sizes} from 'theme';

//#region Styles

const EMPTY_CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color.backgroundSecondary,
};

const TEXT_STYLE: TextStyle = {
  fontSize: sizes.importantTextSize,
  color: color.background,
};

const BUTTON_CONTAINER: ViewStyle = {
  width: '80%',
  height: '10%',
  backgroundColor: color.background,
  marginTop: '2%',
};

const BUTTON_TEXT: TextStyle = {
  fontSize: sizes.highlightTextSize,
};

//#endregion

export interface IHomeView {
  alarms: [];
  createAlarmOnPress: () => void;
}

const HomeView: React.FC<IHomeView> = props => {
  const {alarms, createAlarmOnPress} = props;

  // ?: No alarms so ask to add
  if (alarms.length < 1) {
    return (
      <Screen
        preset="fixed"
        unsafe={true}
        // style={{backgroundColor: color.error, height: '100%'}}
      >
        <View style={EMPTY_CONTAINER}>
          <Text style={TEXT_STYLE} tx="alarmsScreen.noAlarms" />
          <Button
            textStyle={BUTTON_TEXT}
            style={BUTTON_CONTAINER}
            tx="alarmsScreen.create"
            onPress={createAlarmOnPress}
          />
        </View>
      </Screen>
    );
  }

  return (
    <Screen preset="scroll">
      <Text>Hey Hey home screen</Text>
    </Screen>
  );
};

export default HomeView;
