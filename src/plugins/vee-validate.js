import { required, email } from "vee-validate/dist/rules";
import { extend } from "vee-validate";

extend("required", {
  ...required,
  message: "This is a required field",
});

extend("length", (value) => {
  if(value.length >= 10){
      return true;
  }
  return "This field must be at least 10 characters long";
});

extend("email", {
  ...email,
  message: "This field must be a valid email",
});

extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Password confirmation does not match'
});
