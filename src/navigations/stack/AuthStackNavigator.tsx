import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../../screen/auth/LoginScreen';
import AuthHomeScreen from '../../screen/auth/AuthHomeScreen';
import {authNavigation} from '../../constants';
import SignupScreen from '../../screen/auth/SignupScreen';
import {StyleSheet} from 'react-native';

export type AuthStackParamList = {
  [authNavigation.AUTH_HOME]: undefined;
  [authNavigation.LOGIN]: undefined;
  [authNavigation.SIGNUP]: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

function AuthStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'gray',
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: 'black',
      }}>
      <Stack.Screen
        name={authNavigation.AUTH_HOME}
        component={AuthHomeScreen}
        options={{
          headerTitle: ' ',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={authNavigation.LOGIN}
        component={LoginScreen}
        options={{headerTitle: '로그인'}}
      />
      <Stack.Screen
        name={authNavigation.SIGNUP}
        component={SignupScreen}
        options={{headerTitle: '회원가입'}}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default AuthStackNavigator;
