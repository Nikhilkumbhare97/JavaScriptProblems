function checkWord(num) {
    if (num == 1) {
        return "ONE";
    } else if (num == 2) {
        return "TWO";
    } else if (num == 3) {
        return "THREE";
    } else if (num == 4) {
        return "FOUR";
    } else if (num == 5) {
        return "FIVE";
    } else if (num == 6) {
        return "SIX";
    } else if (num == 7) {
        return "SEVEN";
    } else if (num == 8) {
        return "EIGHT";
    } else if (num == 9) {
        return "NINE";
    } else {
        return "Wrong Input";
    }
}
var digit = require("readline-sync");
var num = digit.question("enter the Single digit Number (1-9): ");
var word = checkWord(num)
console.log("Num in Digit: " + num + " is in Words is: " + word)
