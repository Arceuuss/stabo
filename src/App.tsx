const Stack = createNativeStackNavigator();
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import OnboardingS1 from './screens/OnboardingS1';
import OnboardingS2 from './screens/OnboardingS2';
import OnboardingS3 from './screens/OnboardingS3';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="OnboardingS1"
              component={OnboardingS1}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OnboardingS2"
              component={OnboardingS2}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="OnboardingS3"
              component={OnboardingS3}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
