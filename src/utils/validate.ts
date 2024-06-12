type LoginInformation = {
  email: string;
  pwd: string;
};

function validateUser(values: LoginInformation) {
  const errors = {
    email: '',
    pwd: '',
  };

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = '올바른 형식의 이메일이 아닙니다.';
  }
  if (!(values.pwd.length >= 8 && values.pwd.length < 20)) {
    errors.pwd = '비밀번호는 8~20자 사이로 입력해 주세요.';
  }

  return errors;
}

function validateLogin(values: LoginInformation) {
  return validateUser(values);
}

function validateSignup(values: LoginInformation & {pwdConfirm: string}) {
  const errors = validateUser(values);
  const signupErrors = {...errors, pwdConfirm: ''};

  if (values.pwd !== values.pwdConfirm) {
    signupErrors.pwdConfirm = '비밀번호가 일치하지 않습니다.';
  }

  return signupErrors;
}

export {validateLogin, validateSignup};
