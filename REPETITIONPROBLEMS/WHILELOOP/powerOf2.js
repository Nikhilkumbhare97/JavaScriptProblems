var digit = require("readline-sync");
var number = parseInt(digit.question("Enter Number For Power: "))
console.log("Limit Of Table is 256")
const RESULT = 256;
var table = 0;
console.log("Table Of Power Of Two")
var count = 1
while (count != number) {
    if (table != RESULT) {
        table = 2 ** count;
        count++
        console.log(table)
    } else {
        break;
    }
}