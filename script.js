function selectQualification(level) {
    // Save the user's answer
    localStorage.setItem("qualificationLevel", level);

    // Move to the next question
    document.querySelector(".question").style.display = "none";
    document.querySelectorAll(".question")[1].style.display = "block";
}
