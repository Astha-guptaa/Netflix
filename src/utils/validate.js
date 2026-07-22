export const validateLoginForm = (email, password) => {
  const checkValidEmail =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    
  const checkValidPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );

  if (!checkValidEmail) {
    return 'Email Id is not valid'
  }
  if (!checkValidPassword) {
    return 'Password is not valid'
  }

  return null
}
