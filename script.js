/* =========================================================
   START ASSESSMENT
========================================================= */

function startAssessment() {

    window.location.href = "user-details.html";

}


/* =========================================================
   SAVE USER DETAILS
========================================================= */

function saveUserDetails() {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const education = document.getElementById("education").value.trim();


    /* Check all fields */

    if (name === "" || email === "" || education === "") {

        alert("Please fill all the details.");

        return;
    }


    /* Save user information */

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userEducation", education);


    /* Go to Skill Selection */

    window.location.href = "home.html";

}
