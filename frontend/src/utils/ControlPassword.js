/* eslint-disable prefer-regex-literals */
const controlPassword = (password) => {
  const testPassword = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^/.&*-]).{8,}$');
  return testPassword.test(password);
};

export default controlPassword;
