import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import useForm from '../../hooks/useForm';
import {validateLogin} from '../../utils';

function LoginScreen() {
  const login = useForm({
    initialValue: {email: '', pwd: ''},
    validate: validateLogin,
  });

  const handleSubmit = () => {
    console.log('values: ', login.values);
    console.log('values2: ', login);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          error={login.errors.email}
          inputMode="email"
          touched={login.touched.email}
          {...login.getTextInputProps('email')}
        />
        <InputField
          placeholder="비밀번호"
          error={login.errors.pwd}
          secureTextEntry
          touched={login.touched.pwd}
          {...login.getTextInputProps('pwd')}
        />
      </View>
      <CustomButton
        label="로그인"
        variant="filled"
        size="large"
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  },
});

export default LoginScreen;
