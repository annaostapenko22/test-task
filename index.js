// REFS

const refs = {
  form: document.getElementById("testForm")
  // firstName: document.getElementById("firstName"),
  // lastName: document.getElementById("lastName"),
  // email: document.getElementById("email")
};

// ENUMS

const errorMessages = {
  EMAIL_NOT_VALID: "EMAIL_NOT_VALID",
  VALUE_IS_TOO_SHORT: "VALUE_IS_TOO_SHORT",
  SHOULD_BE_NUMBER: "SHOULD_BE_NUMBER"
  //  VALUE_IS_TOO_SHORT: function(value, min) {
  // return `The ${value} is too short. Should be minimum ${min} symbols.`
  //  },
  //  SHOULD_BE_NUMBER: "The value should include just numbers"
};

// VALIDATORS

const isEmptyValidator = value => value.trim() === "";

const isNumberValidator = value => !isNaN(parseInt(value));

const isEmailValidator = value => {
  const emailRegex = /.+@.+\..+/;
  return emailRegex.test(value);
};

const isShortValidator = (value, min) => value.length < min;

const nameValidator = (value, min) =>
  !isEmailValidator(value) && !isShortValidator(value, min);

// MAIN FUNCTIONALITY

const onSubmit = e => {
  e.preventDefault();
  console.log(e.target.elements);
  const { firstName, lastName, email, phone } = e.target.elements;
  console.log(firstName, lastName, email, phone);
const isEmailValid = isEmailValidator(email)
if(!isEmailValid) {
  showHelperText("emailHelp", errorMessages.EMAIL_NOT_VALID)
}
};

const showHelperText = (name, error) => {
  const nameHelpElement = document.getElementById(name);
  
  let errorMessage;
  switch (error) {
    case errorMessages.EMAIL_NOT_VALID:
      errorMessage = "Email is not valid";
      break;
    case erroMessage.VALUE_IS_TOO_SHORT:
      errorMessage = "Entered value is short";
      break;
    case erroMessage.SHOULD_BE_NUMBER:
      errorMessage = "The field should contain just numbers";
      break;
      default:
      errorMessage = "The field is wrong"
  }
  nameHelpElement.textContent = errorMessage;
  nameHelpElement.classList.add("helper-text")
};

// refs.firstName.addEventListener("input", handleInput);
// refs.lastName.addEventListener("input", handleInput);
// refs.email.addEventListener("input", handleInput);
refs.form.addEventListener("submit", onSubmit);
