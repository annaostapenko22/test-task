// REFS

const refs = {
  form: document.getElementById("testForm"),
  firstName: document.getElementById("firstName"),
  lastName: document.getElementById("lastName"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone")
};

// ENUMS

const errorMessages = {
  EMAIL_NOT_VALID: "EMAIL_NOT_VALID",
  VALUE_IS_TOO_SHORT: "VALUE_IS_TOO_SHORT",
  PHONE_IS_NOT_VALID: "PHONE_IS_NOT_VALID"
};

// VALIDATORS

const isEmptyValidator = value => value.trim() === "";

const isNumberValidator = value => !isNaN(parseInt(value));

const isEmailValidator = value => {
  const emailRegex = /.+@.+\..+/;
  return emailRegex.test(value);
};

const isShortValidator = (value, min) => value.length < min;

const emailValidator = (value, min) =>
  !isEmptyValidator(value) &&
  !isEmailValidator(value) &&
  !isShortValidator(value, min);

const namelValidator = (value, min) =>
  !isEmptyValidator(value) && !isShortValidator(value, min);

const phoneValidator = (value, min) =>
  !isShortValidator(value, min) && isNumberValidator(value);

// MAIN FUNCTIONALITY

const onSubmit = e => {
  e.preventDefault();
  const { firstName, lastName, email, phone } = e.target.elements;
  const isFirstNameValid = namelValidator(firstName.value, 2);

  if (!isFirstNameValid) {
    showHelperText("firstNameHelp", errorMessages.VALUE_IS_TOO_SHORT);
  }

  const isLasttNameValid = namelValidator(lastName.value, 2);
  if (!isLasttNameValid) {
    showHelperText("lastNameHelp", errorMessages.VALUE_IS_TOO_SHORT);
  }

  const isEmailValid = isEmailValidator(email.value);
  if (email && !isEmailValid) {
    showHelperText("emailHelp", errorMessages.EMAIL_NOT_VALID);
  }

  const isPhoneValid = phoneValidator(phone.value, 7);
  if (!isPhoneValid) {
    showHelperText("phoneHelp", errorMessages.PHONE_IS_NOT_VALID);
  }
};

const showHelperText = (name, error) => {
  const nameHelpElement = document.getElementById(name);

  let errorMessage;
  switch (error) {
    case errorMessages.EMAIL_NOT_VALID:
      errorMessage = "Email is not valid";
      break;
    case errorMessages.VALUE_IS_TOO_SHORT:
      errorMessage = "Entered value is short";
      break;
    case errorMessages.PHONE_IS_NOT_VALID:
      errorMessage = "Phone is not valid";
      break;
    default:
      errorMessage = "The field is wrong";
  }
  nameHelpElement.textContent = errorMessage;
  nameHelpElement.classList.add("helper-text");
};

const disableHelperText = e => {
  const name = e.target.name;
  const nameHelpElement = document.getElementById(`${name}Help`);
  nameHelpElement.textContent = "";
  nameHelpElement.classList.remove("helper-text");
};

refs.firstName.addEventListener("focus", disableHelperText);
refs.lastName.addEventListener("focus", disableHelperText);
refs.email.addEventListener("focus", disableHelperText);
refs.phone.addEventListener("focus", disableHelperText);
refs.form.addEventListener("submit", onSubmit);
