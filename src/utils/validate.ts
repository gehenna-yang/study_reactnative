type LoginInformation = {
  email: string;
  pwd: string;
};

function validateLogin(values: LoginInformation) {
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

export {validateLogin};
