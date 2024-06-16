import React, {useRef} from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import InputField from '../../components/InputField';
import useForm from '../../hooks/useForm';
import CustomButton from '../../components/CustomButton';
import {validateSignup} from '../../utils';
import useAuth from '../../hooks/queries/useAuth';

function SignupScreen() {
  const pwdRef = useRef<TextInput | null>(null);
  const pwdConfirmRef = useRef<TextInput | null>(null);
  const {signupMutation, loginMutation} = useAuth();
  const signup = useForm({
    initialValue: {email: '', pwd: '', pwdConfirm: ''},
    validate: validateSignup,
  });

  const handleSubmit = () => {
    const {email, pwd} = signup.values;
    signupMutation.mutate(
      {email, pwd},
      {
        onSuccess: () => loginMutation.mutate({email, pwd}),
      },
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          autoFocus
          placeholder="이메일"
          error={signup.errors.email}
          inputMode="email"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => pwdRef.current?.focus()}
          touched={signup.touched.email}
          {...signup.getTextInputProps('email')}
        />
        <InputField
          ref={pwdRef}
          placeholder="비밀번호"
          error={signup.errors.pwd}
          secureTextEntry
          textContentType="oneTimeCode"
          returnKeyType="next"
          blurOnSubmit={false}
          onSubmitEditing={() => pwdConfirmRef.current?.focus()}
          touched={signup.touched.pwd}
          {...signup.getTextInputProps('pwd')}
        />
        <InputField
          ref={pwdConfirmRef}
          placeholder="비밀번호 확인"
          textContentType="oneTimeCode"
          error={signup.errors.pwdConfirm}
          secureTextEntry
          touched={signup.touched.pwdConfirm}
          onSubmitEditing={handleSubmit}
          {...signup.getTextInputProps('pwdConfirm')}
        />
      </View>
      <CustomButton label="회원가입" onPress={handleSubmit} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    gap: 20,
    margin: 30,
  },
});

export default SignupScreen;
