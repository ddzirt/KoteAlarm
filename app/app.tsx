import React, {useEffect, useState} from 'react';
import * as RNLocalize from 'react-native-localize'; // TODO: Remove from here
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';

import './i18n';

import {AppNavigator, useNavigationPersistence} from 'navigators';
import {setLanguageConfig} from 'i18n';
import {ErrorBoundary} from './screens/Error/ErrorBoundary';

import * as storage from './utils/storage';
import {RootStore, RootStoreProvider, setupRootStore} from './models';

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
// TODO: Is it needed?
export const NAVIGATION_PERSISTENCE_KEY = 'NAVIGATION_STATE';

const App: React.FC = () => {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);

  const {
    initialNavigationState,
    onNavigationStateChange,
    isRestored: isNavigationStateRestored,
  } = useNavigationPersistence(storage, NAVIGATION_PERSISTENCE_KEY);

  // ?: Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    (async () => {
      // await initFonts(); // expo
      setLanguageConfig();
      setupRootStore().then(setRootStore);
    })();
  }, []);

  // TODO: Remove from here
  useEffect(() => {
    RNLocalize.addEventListener('change', () => {
      setLanguageConfig();
    });

    return () => {
      RNLocalize.removeEventListener('change', () => {
        setLanguageConfig();
      });
    };
  });

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything. This will be the background
  // color set in native by rootView's background color.
  // In iOS: application:didFinishLaunchingWithOptions:
  // In Android: https://stackoverflow.com/a/45838109/204044
  // You can replace with your own loading component if you wish.
  if (!rootStore || !isNavigationStateRestored) {
    return null;
  }

  return (
    <RootStoreProvider value={rootStore}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <ErrorBoundary catchErrors={'always'}>
          <AppNavigator
            initialState={initialNavigationState}
            onStateChange={onNavigationStateChange}
          />
        </ErrorBoundary>
      </SafeAreaProvider>
    </RootStoreProvider>
  );
};

export default App;
