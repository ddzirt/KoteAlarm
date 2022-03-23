import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  // StyleSheet,
  Text,
  useColorScheme,
  //   View,
} from 'react-native';

const ViewAlarm: React.FC = () => {
  // TODO: Move this away
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Text>
          Hey Hey manage view alarm screen {isDarkMode ? 'dark' : 'white'}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewAlarm;
