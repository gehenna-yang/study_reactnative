import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthStackParamList} from '~/navigations/stack/AuthStackNavigator';
import {authNavigation} from '~/constants';
import CustomButton from '~/components/CustomButton';

type AuthHomeScreenProps = StackScreenProps<
  AuthStackParamList,
  typeof authNavigation.AUTH_HOME
>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
  return (
    <SafeAreaView style={styles.continer}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../../assets/MATZIP.png')}
        />
      </View>
      <View style={styles.buttonContiner}>
        <CustomButton
          label="로그인화면으로 이동"
          onPress={() => navigation.navigate(authNavigation.LOGIN)}
        />
        <CustomButton
          label="회원가입화면으로 이동"
          variant="outlined"
          onPress={() => navigation.navigate(authNavigation.SIGNUP)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContiner: {
    flex: 1,
    gap: 10,
  },
});

export default AuthHomeScreen;
