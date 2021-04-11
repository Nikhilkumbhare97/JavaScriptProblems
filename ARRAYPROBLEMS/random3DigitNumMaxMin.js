let numArray = new Array();
for (i = 0; i < 10; i++) {
    let number = Math.floor(Math.random() * 900) + 100;
    numArray.push(number);
}
console.log("Numbers are: " + numArray);
let max = Math.max(...numArray);
let min = Math.min(...numArray);
let secondMax = 100;
let secondMin = 999;

for (j = 0; j < numArray.length; j++) {
    if (numArray[j] > secondMax && numArray[j] < max) {
        secondMax = numArray[j];
    }
    if (numArray[j] < secondMin && numArray[j] > min) {
        secondMin = numArray[j];
    }
}
console.log("Second Max Number : " + secondMax);
console.log("Second Min Number : " + secondMin);