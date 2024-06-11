import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputField from '../../components/InputField';

function LoginScreen() {
  const [values, setValue] = useState({
    email: '',
    pwd: '',
  });
  const [touched, setTouched] = useState({
    email: false,
    pwd: false,
  });

  const handleChangeText = (name: string, text: string) => {
    setValue({
      ...values,
      [name]: text,
    });
  };

  const handleBlur = (name: string) => {
    setTouched({
      ...touched,
      [name]: true,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="이메일"
          error={'이메일을 입력하세요'}
          inputMode="email"
          touched={touched.email}
          value={values.email}
          onChangeText={text => handleChangeText('email', text)}
          onBlur={() => handleBlur('email')}
        />
        <InputField
          placeholder="비밀번호"
          error={'비밀번호를 입력하세요'}
          touched={touched.pwd}
          secureTextEntry
          value={values.pwd}
          onChangeText={text => handleChangeText('pwd', text)}
          onBlur={() => handleBlur('pwd')}
        />
      </View>
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
  },
});

export default LoginScreen;
