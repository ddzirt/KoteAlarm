import React from 'react';
import {useColorScheme} from 'react-native';

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  navigationRef,
  useBackButtonHandler,
  canExit,
} from './navigation-utilities';
import {color} from 'theme';
import {Header} from 'components';

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  alarms: undefined;
  alarmsContainer: undefined;
  alarm: undefined;
  manageAlarm: undefined;
  manageAlarmContainer: undefined;
  settings: undefined;
};

// TODO: Question: can same stacks, ie same NativeStackNavigator be shared?
const AddAlarmStack = createNativeStackNavigator<NavigatorParamList>();
const AddAlarmScreenNavigator = () => (
  <AddAlarmStack.Navigator>
    <AddAlarmStack.Screen
      name="manageAlarm" // TODO: set based on navigation param
      getComponent={() => require('../screens/Home/ManageAlarm').default}
      options={{
        header: () => <Header headerTx="manageAlarmScreen.title" />,
      }}
    />
  </AddAlarmStack.Navigator>
);

const BottomTab = createBottomTabNavigator<NavigatorParamList>();
const TabNavigator = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen
      name="alarms"
      getComponent={() => require('../screens/Home/Home').default}
      options={{
        header: () => <Header headerTx="alarmsScreen.title" />,
        tabBarStyle: {backgroundColor: color.background},
      }}
    />
    <BottomTab.Screen
      name="manageAlarmContainer"
      component={AddAlarmScreenNavigator}
      options={{
        headerShown: false,
        tabBarStyle: {backgroundColor: color.background},
      }}
    />
    <BottomTab.Screen
      name="settings"
      getComponent={() => require('../screens/Home/Settings').default}
      options={{
        header: () => <Header headerTx="settingsScreen.title" />,
        tabBarStyle: {backgroundColor: color.background},
      }}
    />
  </BottomTab.Navigator>
);

const AlarmViewStack = createNativeStackNavigator<NavigatorParamList>();
const AppStack = () => {
  return (
    <AlarmViewStack.Navigator initialRouteName="alarmsContainer">
      <AddAlarmStack.Screen
        name="alarmsContainer"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <AddAlarmStack.Screen
        name="alarm"
        getComponent={() => require('../screens/ViewAlarm')}
        options={{
          headerShown: false,
        }}
      />
    </AlarmViewStack.Navigator>
  );
};

interface NavigationProps
  extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  useBackButtonHandler(canExit);
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      <AppStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
export const exitRoutes = ['alarms'];
