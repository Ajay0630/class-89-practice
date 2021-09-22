var score = 0;
function pscore() {
    score = score + 1;
    if (score > 5) {
        document.getElementById("score").innerHTML = "YOU ARE A GOD AT THIS GAME! You have " + score + " points.";
    } else {
        document.getElementById("score").innerHTML = "OOF! You have " + score + " points.";
    }
}
function saveData() {
    localStorage.setItem("score", score);
}
function outofthisworld() {
    window.location = "activity_2.html";
}