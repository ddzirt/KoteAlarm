import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
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

const DATE_CONTAINER: ViewStyle = {
  backgroundColor: color.background,
  alignItems: 'center',
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

export interface IAlarmView {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
}

const ManageAlarmView: React.FC<IAlarmView> = props => {
  const {date, setDate} = props;
  return (
    <Screen unsafe={true} preset="scroll">
      <View style={DATE_CONTAINER}>
        <DatePicker
          androidVariant="nativeAndroid"
          date={date}
          onDateChange={setDate}
          mode="time"
          textColor={color.palette.white}
        />
      </View>
    </Screen>
  );
};

export default ManageAlarmView;
