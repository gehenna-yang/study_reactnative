import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../../screen/LoginScreen';
import AuthHomeScreen from '../../screen/AuthHomeScreen';
import {authNavigation} from '../../constants';

export type AuthStackParamList = {
  [authNavigation.AUTH_HOME]: undefined;
  [authNavigation.LOGIN]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={authNavigation.AUTH_HOME}
        component={AuthHomeScreen}
      />
      <Stack.Screen name={authNavigation.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}

// const styles = StyleSheet.create({});

export default AuthStackNavigator;
