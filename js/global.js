/*
    Global JavaScript for COM1008 website
    Chris Heppell & Robbie Thandi
    Copyright 2017
*/

// Used so that when javascript is enabled the menu will be hidden on a mobile device
function hideOnLoad (target) {
    // Sets the breakpoint
    const BREAKPOINT = "(max-width: 768.99px)";
    // Checks to see if window is less than 768.99px
    if (window.matchMedia(BREAKPOINT).matches) {
        // Hides menu if it is
        target.style.display = "none";
    }
}

function showHide(visibleDisplayValue, target){
    // Function that takes the display value it should have and will toggle them
    if(target.style.display === "block"){
        target.style.display = visibleDisplayValue;
    }
    else {
        target.style.display = "block";
    }
}

var showHideNavButton = document.getElementById('showHideNavButton');
var nav = document.getElementById('menuBar');


// Event listener on the menu button to detect click
showHideNavButton.addEventListener('click', function () {
    // Calls the showHide function. Has to be a function calling a function so that the display can be passed to showHide
    showHide("none", nav)
}, false);

// Calls hideOnLoad when the page is loaded
window.onload = hideOnLoad(nav);

