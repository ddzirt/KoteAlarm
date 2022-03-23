import React from 'react';
import {
  //   View,
  //   ViewStyle,
  // TextStyle,
  //   ImageStyle,
  //   SafeAreaView,
  useColorScheme,
} from 'react-native';
import {} from 'react-native';

import {Screen, Text} from 'components';

const HomeView: React.FC = () => {
  // TODO: Move this away
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Screen preset="scroll">
      <Text>Hey Hey home screen {isDarkMode ? 'dark' : 'white'}</Text>
    </Screen>
  );
};

export default HomeView;
