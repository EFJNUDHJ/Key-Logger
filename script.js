const logDiv = document.getElementById("log");
const stateDiv = document.getElementById("state");
const startDiv = document.getElementById("start");
const stopDiv = document.getElementById("stop");

startDiv.addEventListener("click", () => {
    document.addEventListener("keydown", handledown);
    document.addEventListener("keyup", handleup);
    start.disabled = true;
    stop.disabled = false;
});

stopDiv.addEventListener("click", () => {
    document.removeEventListener("keydown", handledown);
    document.removeEventListener("keyup", handleup);
    logDiv.textContent = "";
    stateDiv.textContent = "";
    stop.disabled = true;
    start.disabled = false;
});

function handledown(e) {
    logDiv.textContent = `Key ${e.key} pressed down`;
    stateDiv.textContent = "Key is Down";
}

function handleup(e) {
    logDiv.textContent = `Key ${e.key} pressed up`;
    stateDiv.textContent = "Key is Up";
}
