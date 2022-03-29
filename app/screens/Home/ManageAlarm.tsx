import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {NavigatorParamList} from 'navigators';
import {Header} from 'components';
import {color, spacing} from 'theme';

import ManageAlarmView from './ManageAlarmView';

const dayArray: string[] = [];

const ManageAlarm: React.FC<
  NativeStackScreenProps<NavigatorParamList, 'manageAlarm'>
> = observer(({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [selectedDay, setDaySelected] = useState('');
  const [isVibrating, setIsVibrating] = useState(false);
  const [alarmName, setAlarmName] = useState('');
  const [isSnoozed, setIsSnoozed] = useState(false);

  const toggleVibration = () => setIsVibrating(previousState => !previousState);

  React.useLayoutEffect(() => {
    const navigateAlarmsList = () => {
      navigation.navigate('alarms');
    };

    const navigateBack = () => {
      navigation.goBack();
    };

    navigation.setOptions({
      header: () => (
        <Header
          headerTx="manageAlarmScreen.title"
          leftIcon="manageAlarmScreen.cancel"
          leftIconContainerStyle={{marginLeft: spacing[4]}}
          leftIconTextStyle={{color: color.tabBarText}}
          rightIcon="manageAlarmScreen.save"
          rightIconTextStyle={{color: color.tabBarText}}
          rightIconContainerStyle={{marginRight: spacing[4]}}
          onLeftPress={navigateBack}
          onRightPress={navigateAlarmsList}
        />
      ),
    });
  }, [navigation]);

  const manageDays = (day: string) => {
    const dayIndex = dayArray.indexOf(day);
    if (dayIndex === -1) {
      dayArray.push(day);
      setDaySelected(day);
    } else {
      dayArray.splice(dayIndex, 1);
      if (dayArray.length === 0 && selectedDay !== '') {
        setDaySelected('');
      } else {
        setDaySelected(dayArray[dayIndex - 1]);
      }
    }
  };

  // TODO: Add actual days with IDs, Name, ShortName, isSelected, other things?
  const getDaysToShow = () => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <ManageAlarmView
      date={date}
      setDate={setDate}
      days={getDaysToShow()}
      selectDays={manageDays}
      selectedDays={dayArray}
      isVibrating={isVibrating}
      setVibrationState={toggleVibration}
      alarmName={alarmName}
      setAlarmName={setAlarmName}
      isSnoozed={isSnoozed}
      setIsSnoozed={setIsSnoozed}
    />
  );
});

export default ManageAlarm;
