import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  // StyleSheet,
  Text,
  //   View,
} from 'react-native';

const ViewAlarm: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Text>Hey Hey manage view alarm screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewAlarm;
