$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
  const firstNameInput = $("input#first-name");
  const lastNameInput = $("input#last-name");
  const phoneNumInput = $("input#phone-num");
  const zipCodeInput = $("input#zip-code");
  // const roleInput = $(".role-check");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      firstName: firstNameInput.val().trim(),
      lastName: lastNameInput.val().trim(),
      phoneNumber: parseInt(phoneNumInput.val().trim()),
      zipCode: parseInt(zipCodeInput.val().trim()),
      userRole: $("input[name=role]:checked").val()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(
      userData.email,
      userData.password,
      userData.firstName,
      userData.lastName,
      userData.phoneNumber,
      userData.zipCode,
      userData.userRole
    );
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(
    email,
    password,
    firstName,
    lastName,
    phoneNumber,
    zipCode,
    userRole
  ) {
    $.post("/api/signup", {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      zipCode: zipCode,
      userRole: userRole
    })
      .then(() => {
        if (userRole === "pet-owner") {
          window.location.replace("/owner");
        } else if (userRole === "pet-sitter") {
          window.location.replace("/sitter");
        }
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
