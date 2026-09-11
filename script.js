function selectQualification(level) {
    // Save the user's answer
    localStorage.setItem("qualificationLevel", level);

    // Move to the next question
    document.querySelector(".question").style.display = "none";
    document.querySelectorAll(".question")[1].style.display = "block";
}
function selectCareerGoal(goal) {
    // Save the user's career goal
    localStorage.setItem("careerGoal", goal);

    // Hide the current question
    document.querySelectorAll(".question")[1].style.display = "none";

    // Show the next question
    document.querySelectorAll(".question")[2].style.display = "block";
}
