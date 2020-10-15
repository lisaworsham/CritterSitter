// $(document).ready(() => {
    const signIn = $("#signInBtn");
    const signUp = $("#signUpBtn");

    signIn.on("click", event => {
        // event.preventDefault();
        $.get("/login")
    })
    signUp.on("click", event => {
        event.preventDefault();
        res.render("signup");
    })
// })

// function displayLogin() {
//     $.get("/login")
// }