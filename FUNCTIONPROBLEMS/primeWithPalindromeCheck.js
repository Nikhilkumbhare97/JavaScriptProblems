function palindrome(PrimeNum) {
    const number = PrimeNum
    var reverse = 0
    var a = 0
    while (PrimeNum > 0) {
        a = PrimeNum % 10
        PrimeNum = parseInt(PrimeNum / 10)
        reverse = reverse * 10 + a
    }
    if (number == reverse) {
        console.log("Number " + number + " is a prime and its Palindrome is also Prime")
    } else if (number != reverse && number > 0) {
        var newNum = prime(reverse)
        if (newNum == reverse) {
            console.log("Number " + number + " is a prime and its Palindrome is also Prime")
        } else {
            console.log("Number " + number + " is a Prime but its Palindrome is not a Prime")
        }
    } else {
        console.log("Number is Not a Prime Number")
    }
}
function prime(n) {
    var number1 = 0
    for (num = 1; num <= n; num++) {
        if ((n % num) == 0) {
            number1++
        }
    }
    if (number1 == 2) {
        console.log(n + " is a Prime Number")
        return n;
    } else {
        -1
    }
}
var digit = require("readline-sync");
var n = parseInt(digit.question("Enter Number To Check Prime And Palindrome "))
var PrimeNum = prime(n)
palindrome(PrimeNum)