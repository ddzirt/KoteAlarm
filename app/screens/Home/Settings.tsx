import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  // StyleSheet,
  Text,
  //   View,
} from 'react-native';

const Settings: React.FC = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <Text>Hey Hey settings screen </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
