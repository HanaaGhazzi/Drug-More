var username = prompt("What is your name?");

var age = prompt("How old are you?");



function myFunction() {
    var check = prompt("Did you take you medicines? ");
    if (check != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + username + "  Don’t Forget to Take Your Medicines ";
    }
}