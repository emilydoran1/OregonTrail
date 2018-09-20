window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.keyCode == "32") {
        window.location.href = "/mainmenu";
    }
}
