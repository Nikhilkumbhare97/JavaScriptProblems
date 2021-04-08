var digit = require("readline-sync");
console.log("Enter Range To Get Prime Number")
var number1 = parseInt(digit.question("Enter 1st Number: "))
var number2 = parseInt(digit.question("Enter 2nd Number: "))
console.log("Prime Numbers are: ")
for (count1 = 1 + number1; count1 < number2; count1++) {
    var val = 0
    for (count2 = 1; count2 <= count1; count2++) {
        if ((count1 % count2) == 0) {
            val++
        }
    }
    if (val == 2) {
        console.log(count1)
    } else {
        val++
    }
}