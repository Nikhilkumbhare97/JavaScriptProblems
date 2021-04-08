var digit = require("readline-sync");
var number = parseInt(digit.question("Enter Number For Factorial: "))
var result = 1
for (count = 1; count <= number; count++) {
    result = result * count
}
console.log("Factorial Result Of "+number+" is: "+result)