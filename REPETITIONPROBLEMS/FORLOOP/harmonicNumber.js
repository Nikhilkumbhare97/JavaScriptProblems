var digit = require("readline-sync");
var num = digit.question("Enter nth Number For Harmonic Number: ");
var number = parseInt(num)
var table = 0;
for (count = 1; count <= number; count++) {
        table = 1 / count;  
}
console.log("nth Harmonic Number Value is: "+table)