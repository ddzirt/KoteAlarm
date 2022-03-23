import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {observer} from 'mobx-react-lite';

import HomeView from './HomeView';
import {NavigatorParamList} from '../../navigators';

const Home: React.FC<NativeStackScreenProps<NavigatorParamList, 'alarms'>> =
  observer(({navigation}) => {
    return <HomeView />;
  });

export default Home;
