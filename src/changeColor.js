var Logger = require("./Logger.js");
function changeBackground() {
    Logger.logStatus();
    document.body.style.backgroundColor = "#662D8C";
}
 //Attach function to the browser window, webpack does not make it global by default
window.changeBackground = changeBackground;
