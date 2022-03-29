import React from 'react';
import {observer} from 'mobx-react-lite';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import HomeView from './HomeView';
import {NavigatorParamList} from '../../navigators';

const Home: React.FC<NativeStackScreenProps<NavigatorParamList, 'alarms'>> =
  observer(({navigation}) => {
    const navigateToCreateAlarm = () => {
      navigation.navigate('manageAlarmContainer', {key: 'new'});
    };

    return <HomeView createAlarmOnPress={navigateToCreateAlarm} alarms={[]} />;
  });

export default Home;
