/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var ourVariable = document.getElementById("myTopnav");
    if (ourVariable.className === "topnav") {
        ourVariable.className += " responsive";
    } else {
        ourVariable.className = "topnav";
    }
}
