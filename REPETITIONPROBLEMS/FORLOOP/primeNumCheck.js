var digit = require("readline-sync");
var number = parseInt(digit.question("Enter Number To Check For Prime: "))
var val = 0;
for (count = 1; count <= number; count++) {
    if ((number % count) == 0) {
        val++
    }
}
if (val == 2) {
    console.log("Number " + number + " is a Prime Number")
} else {
    console.log("Number "+ number + " is a Not a Prime Number")
}