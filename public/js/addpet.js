$(document).ready(() => {
  // Getting references to our form and input
  const newPetForm = $("form.newPet");
  const petNameInput = $("input#petName");
  const petTypeInput = $("input#petType");
  const petFoodInput = $("input#petFood");
  const petFoodAmtInput = $("input#foodAmt");
  const petVetInput = $("input#Vet");
  const commentsInput = $("textarea#tripComments");

  // When the signup button is clicked, we validate the email and password are not blank
  newPetForm.on("submit", event => {
      event.preventDefault();
      const petInfo = {
          petName: petNameInput.val().trim(),
          petType: petTypeInput.val().trim(),
          petFood: petFoodInput.val().trim(),
          petFoodAmt: petFoodAmtInput.val().trim(),
          petVet: petVetInput.val().trim(),
          comments: commentsInput.val().trim()
      };

      // if (!userData.email || !userData.password) {
      //     return;
      // }
      // If we have an email and password, run the signUpUser function
      createPet(
          petData.petName,
          petData.petType,
          petData.petFood,
          petData.petFoodAmt,
          petData.petVet,
          petData.comments
      );
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function createPet(
      petName,
      petType,
      petFood,
      petFoodAmt,
      petVet,
      comments
  ) {
      $.post("/api/newpet", {
          PetName: petName,
          PetType: petType,
          Food: petFood,
          FoodAmt: petFoodAmt,
          VetInfo: petVet, 
          Comments: comments
      })
          .then(() => {
          })
          .catch(handleNewPetErr);
  }

  function handleNewPetErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
  }
});
