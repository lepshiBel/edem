const SCREEN_WIDTH = window.screen.width;
var isOpen = false;

function changeGlobalVar(value) {
    isOpen = value;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open");
        
        var h = document.getElementById("menu").clientHeight;
  
        if (isOpen === false) {
            document.getElementById("main-container").style.marginTop = h - 200 + "px";      
            changeGlobalVar(true);
        } 
        else {
            document.getElementById("main-container").style.marginTop = h - 10 + "px";
            changeGlobalVar(false);
        }
    });
});