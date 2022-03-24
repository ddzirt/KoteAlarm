import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {NavigatorParamList} from 'navigators';
import {Button, Header} from 'components';
import {color, spacing} from 'theme';

import ManageAlarmView from './ManageAlarmView';

const ManageAlarm: React.FC<
  NativeStackScreenProps<NavigatorParamList, 'manageAlarm'>
> = observer(({navigation}) => {
  const [date, setDate] = useState(new Date());

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

  return <ManageAlarmView date={date} setDate={setDate} />;
});

export default ManageAlarm;
