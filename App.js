import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import CompanyProfile from './screens/companyprofile.js';
import UserProfile from './screens/userprofile.js';
import JobDetail from './screens/jobdetail.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CompanyProfile">
          <Stack.Screen name="CompanyProfile" component={CompanyProfile} options={{ headerShown: false }} />
          <Stack.Screen name="UserProfile" component={UserProfile} options={{ headerShown: false }} />
          <Stack.Screen name="JobDetail" component={JobDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
