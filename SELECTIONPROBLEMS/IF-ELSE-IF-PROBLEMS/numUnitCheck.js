function checkUnit(num) {
    if ((num>=0) && (num<10)) {
        return "Unit";
    } else if ((num>=10) && (num<100)) {
        return "Ten";
    } else if ((num>=100) && (num<1000)) {
        return "Hundred";
    } else if ((num>=1000) && (num<10000)) {
        return "Thousand";
    } else if ((num>=10000) && (num<100000)) {
        return "Ten Thousand";
    } else if ((num>=100000) && (num<1000000)) {
        return "Lakh";
    } else {
        return "Not in Limit"
    }
}

var digit = require("readline-sync");
var num = digit.question("Enter Any No Upto 100000: ");
var unit = checkUnit(num)
console.log("Num in Digit is : " + num + " and its unit is: " + unit)