let doubleDigitNumbers = new Array();
for (i = 1; i < 100; i++) {
    if (i % 11 == 0)
        doubleDigitNumbers.push(i);
}
console.log("Double digit numbers are : " + doubleDigitNumbers.toString());