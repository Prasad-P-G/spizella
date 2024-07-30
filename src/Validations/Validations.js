function Validations(values) {
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (values.email === "") {
    error.email = "Email Should Not be Empty";
  }

  if (!email_pattern.test(values.email)) {
    error.email = "Email Does not match";
  }

  if (values.phone.trim() === "") {
    error.phone = "Phone Number Should Not be Empty";
  }

  if (values.phone.trim().length > 10 || values.phone.trim().length < 10) {
    error.phone = "Phone Number should be of 10 digits";
  }

  return error;
}
export default Validations;
