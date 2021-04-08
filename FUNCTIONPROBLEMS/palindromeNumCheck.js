function palindrome(num) {
    const NUMBER = num
    var reverse = 0
    var a = 0
    while (num > 0) {
        a = num % 10;
        num = parseInt(num / 10);
        reverse = reverse * 10 + a;
    }
    console.log("Reverse Number is: "+reverse)
    if  (NUMBER == reverse) {
        console.log("Number is palindrome")
    } else {
        console.log("Number is not palindrome")
    }
}
var digit = require("readline-sync");
var num = parseInt(digit.question("Enter Number To Check Palindrome Or Not: "))
palindrome(num)