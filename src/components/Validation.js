function Validation(values) {
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phone_pattern = /^\d{10}$/;

  if (values.email === "") {
    error.email = "Email Should Not be Empty";
  }

  //   if (!email_pattern.test(values.email)) {
  //     error.email = "Email is Incorrect";
  //   }
  if (!phone_pattern.test(values.phone)) {
    error.phone = "Phone Number should be of 10 digits";
  }

  //   if (values.phone === "") {
  //     error.phone = "Phone Number Should Not be Empty";
  //   }

  //   if (values.phone.length < 10) {
  //     error.phone = "Phone Number should be of 10 digits";
  //   }

  return error;
}
export default Validation;
