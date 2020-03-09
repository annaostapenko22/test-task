const refs = {
    form: document.getElementById("testForm"),
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    email: document.getElementById("email")
  };
  
  const onSubmit = e => {
    e.preventDefault();
    if(refs.firstName.validity.valid && refs.lastName.validity.valid && refs.email.validity.valid) {
        alert("ALL THE INFO IS VALID")
    }
    console.log(e.target.elements.email)
  };
  
  const handleInput = e => {
    const name = e.target.value;
    let validityMessage = `length: too short`;
    let messageColor = "red";
    const emailRegex = /.+@.+\..+/;
    if (name.length >= 2) {
      validityMessage = `length: adequate`;
      messageColor = "green";
    }
    if (e.target.name === "firstName") {
      showHelperText("firstNameHelp", messageColor, validityMessage);
    }
    if (e.target.name === "lastName") {
      showHelperText("lastNameHelp", messageColor, validityMessage);
    }
    if (e.target.name === "email") {
      if (!emailRegex.test(e.target.value)) {
        validityMessage = "Invalid address";
        messageColor = "red";
        showHelperText("emailHelp", messageColor, validityMessage);
      }
      if (emailRegex.test(e.target.value)) {
        validityMessage = "Valid address";
        messageColor = "green";
        showHelperText("emailHelp", messageColor, validityMessage);
      }
    }
  };
  
  const showHelperText = (name, messageColor, nameLength) => {
    const nameHelpElement = document.getElementById(name);
    nameHelpElement.textContent = `${nameLength}`;
    nameHelpElement.style.color = messageColor;
  };
  
  refs.firstName.addEventListener("input", handleInput);
  refs.lastName.addEventListener("input", handleInput);
  refs.email.addEventListener("input", handleInput);
  refs.form.addEventListener("submit", onSubmit);
  