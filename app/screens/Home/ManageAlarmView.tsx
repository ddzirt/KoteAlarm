import React from 'react';
import DatePicker from 'react-native-date-picker';
import {View, ViewStyle} from 'react-native';

import {Empty, LineHeader, Screen, Switch} from 'components';
import {color, spacing} from 'theme';
import {DaySelector, AudioSelector, TitleEditor} from 'components';

//#region Styles

const DATE_CONTAINER: ViewStyle = {
  backgroundColor: color.background,
  alignItems: 'center',
};

export const SNOOZE_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
};

//#endregion

// TODO: Redo for a proper format
export interface IAlarmView {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  days: string[];
  selectDays: (date: string) => void;
  selectedDays: string[];
  isVibrating: boolean;
  setVibrationState: (state: boolean) => void;
  alarmName: string;
  setAlarmName: (name: string) => void;
  isSnoozed: boolean;
  setIsSnoozed: (state: boolean) => void;
}

const ManageAlarmView: React.FC<IAlarmView> = props => {
  const {
    date,
    setDate,
    days,
    selectDays,
    selectedDays,
    isVibrating,
    setVibrationState,
    alarmName,
    setAlarmName,
    isSnoozed,
    setIsSnoozed,
  } = props;
  return (
    <Screen unsafe={true} preset="scroll" showsVerticalScrollIndicator={false}>
      <View style={DATE_CONTAINER}>
        <DatePicker
          androidVariant="nativeAndroid"
          date={date}
          onDateChange={setDate}
          mode="time"
          textColor={color.palette.white}
        />
      </View>
      <DaySelector
        title="Select days"
        days={days}
        selectedDays={selectedDays}
        onPressDaySelected={selectDays}
      />
      <AudioSelector
        title="Sound"
        isVibrating={isVibrating}
        onVibrationPress={setVibrationState}
      />
      <TitleEditor
        title="Label"
        placeholder="Enter alarm title"
        value={alarmName}
        onChangeText={setAlarmName}
      />
      <View style={SNOOZE_CONTAINER}>
        <LineHeader text="Snooze" />
        <Switch
          style={{marginRight: spacing[3]}}
          isEnabled={isSnoozed}
          toggleSwitch={setIsSnoozed}
        />
      </View>
      <Empty preset="big" />
    </Screen>
  );
};

export default ManageAlarmView;
