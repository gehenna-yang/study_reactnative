import React, {useRef} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputField from '~/components/InputField';
import CustomButton from '~/components/CustomButton';
import useForm from '~/hooks/useForm';
import {validateLogin} from '~/utils';
import useAuth from '~/hooks/queries/useAuth';

function LoginScreen() {
  const pwdRef = useRef<TextInput | null>(null);
  const {loginMutation} = useAuth();
  const login = useForm({
    initialValue: {email: '', pwd: ''},
    validate: validateLogin,
  });

  const handleSubmit = () => {
    loginMutation.mutate(login.values);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          onSubmitEditing={() => pwdRef.current?.focus()}
          placeholder="이메일"
          error={login.errors.email}
          inputMode="email"
          touched={login.touched.email}
          {...login.getTextInputProps('email')}
        />
        <InputField
          ref={pwdRef}
          placeholder="비밀번호"
          error={login.errors.pwd}
          secureTextEntry
          touched={login.touched.pwd}
          onSubmitEditing={handleSubmit}
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
