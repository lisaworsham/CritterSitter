$(document).ready(() => {
    // Getting references to our form and input
    const checkInBtn = $(".checkInBtn");
    const ownerId = checkInBtn.attr("id")
    // const tripNameInput = $("input#tripName");

    checkInBtn.on("click", (event) => {
        $.get("/api/sitterCheckin", {id: ownerId})
        // event.preventDafault();
        // return ownerId
        // console.log(ownerId);
    })
})