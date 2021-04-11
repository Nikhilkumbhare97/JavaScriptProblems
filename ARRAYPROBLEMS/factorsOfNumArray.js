var digit = require("readline-sync");
var number = parseInt(digit.question("Enter Number whoose Factor To Be Find: "))
let primeFactorArray = new Array();
for (count1 = 1; count1 <= number; count1++) {
    var result = 0
    for (count2 = 1; count2 <= number; count2++) {
        if (((count1 % count2) == 0) && ((number % count1) == 0)) {
            result++
        }
    }
    if (result == 2) {
        primeFactorArray.push(count1);
    }
}
console.log("Prime Factors are: " + primeFactorArray)